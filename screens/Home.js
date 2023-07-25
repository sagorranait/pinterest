import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';

export default Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <MasonryList pins={pins}/>
      </ScrollView>
    </SafeAreaView>
  )
}