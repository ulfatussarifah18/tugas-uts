import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  RootTagContext,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={'#bdbdbd'} />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#212121',
          marginTop: 30,
        }}>
        Ulfatus sarifah
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={props.pencarian}
          onChangeText={text => setPencarian(text)}
          placeholder="Cari informasi tentang lapangan futsal"
          style={{
            backgroundColor: '#ffffff',
            elevation: 3,
            marginTop: 10,
            paddingLeft: 10,
            borderRadius: 5,
            flex: 1,
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0082f7',
            marginTop: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginLeft: 10,
            elevation: 3,
            paddingVertical: 10,
          }}>
          <Icon name="search" size={25} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
