import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from './src/components/Menu';
import Header from './src/components/Header';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from './src/components/SplashScreen';

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
          <Text style={{color: '#0082f7', fontWeight: 'bold', marginTop: 10}}>
            Jadwal lapangan futsal
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            bottom: 25,
          }}>
          <Text style={{color: '#FDB436', fontWeight: 'bold', marginTop: 10}}>
            Lihat semua
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            elevation: 10,
            marginTop: 10,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{borderRadius: 10}}
            colors={['#0188F7', '#00BAF7']}>
            <TouchableOpacity style={{padding: 20, borderRadius: 10}}>
              <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Bola</Text>
              <Text style={{color: '#FFFFFF'}}>Lapangan umum</Text>
              <Text style={{color: '#FFFFFF'}}>Lapangan umum</Text>
              <Text style={{color: '#FFFFFF'}}>Lapangan umum</Text>
              <Text style={{color: '#FFFFFF'}}>Lapangan umum</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <Menu />
    </View>
  );
};

export default App;
