import { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNhostClient } from '@nhost/react';
import { SafeAreaView } from 'react-native-safe-area-context';

import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';

export default Home = () => {
  const nhost = useNhostClient();
  const [pins, setPins] = useState([]);

  const fetchPins = async () => {
    const response = await nhost.graphql.request(`
      query MyQuery {
        pins {
          id
          image
          title
        }
      }
    `);

    if (response.error) {
      Alert.alert('Error Fetching Pins !!!');
    }else{
      setPins(response?.data?.pins || []);
    }
  }

  useEffect(() => {
    fetchPins();
  }, [])
  

  return (
    <SafeAreaView>
      <ScrollView>
        <MasonryList pins={pins}/>
      </ScrollView>
    </SafeAreaView>
  )
}