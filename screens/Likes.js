import pins from '../assets/data/pins';
import { ScrollView } from 'react-native';
import MasonryList from '../components/MasonryList';
import { SafeAreaView } from 'react-native-safe-area-context';

function Likes() {
  return (
    <SafeAreaView>
      <ScrollView>
        <MasonryList pins={pins}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Likes