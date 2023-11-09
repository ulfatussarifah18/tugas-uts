import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  components,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from './src/components/Menu';
import Header from './src/components/Header';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from './src/components/SplashScreen';
import Navbar from './src/components/Navbar';

const App = () => {
  const [pencarian, setPencarian] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}>
        <Header pencarian={pencarian} setPencarian={setPencarian} />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{color: '#F67280', fontWeight: 'bold', marginTop: 10}}>
            BEAUTY & SPA CENTER
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            bottom: 25,
          }}>
          <Text style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>
            Lihat semua
          </Text>
        </TouchableOpacity>
        <Navbar />
      </View>
      <Menu />
    </View>
  );
};

export default App;
