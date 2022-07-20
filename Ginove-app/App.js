
import NavBar from './app/components/NavBar';
import SearchBar from './app/components/SearchBar';
import { View, } from 'react-native';
import Images from './app/components/Images';
import Info from './app/components/Info';
import ControlButton from './app/components/ControlButton';
import LineChart2 from './app/components/LineChart2';



export default function App() {


  return (
   
    <View>
      <SearchBar />
      <NavBar />
      <Info />
      <ControlButton />
      <Images />
      <LineChart2 />
    </View>
  
  );
}


