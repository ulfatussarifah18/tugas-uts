import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from './src/components/Menu';

const App = () => {
  const [pencarian, setPencarian] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginTop: 30,
        }}></View>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#212121'}}>
        Ulfatus sarifah
      </Text>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#212121'}}>
        hayhay
      </Text>
      <View style={{flexDirection: 'row'}}></View>
      <TextInput
        value={pencarian}
        onChangeText={text => setPencarian(text)}
        placeholder="Cari informasi tentang lapangan futsal"
        style={{
          backgroundColor: '#ffffff',
          elevation: 3,
          marginTop: 10,
          paddingLeft: 10,
          borderRadius: 5,
          flex: 1,
          height: 10,
          width: 400,
        }}
      />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0082f7',
          marginTop: 20,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginLeft: 10,
        }}>
        <Icon name="search" size={25} color="#ffffff" />
      </TouchableOpacity>
      <Menu />
    </View>
  );
};

export default App;
