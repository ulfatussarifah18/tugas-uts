import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  RootTagContext,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Menu = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1}}></View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          elevation: 3,
          paddingTop: 7,
          paddingBottom: 5,
          marginHorizontal: 10,
          marginBottom: 10,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="home" size={30} color="#F67280" />
          <Text style={{fontSize: 12, color: '#F67280', fontWeight: 'bold'}}>
            home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="bag-handle-outline" size={30} color="#bdbdbd" />
          <Text style={{fontSize: 12, color: '#bdbdbd', fontWeight: 'bold'}}>
            Transaksi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="calendar-outline" size={30} color="#bdbdbd" />
          <Text style={{fontSize: 12, color: '#bdbdbd', fontWeight: 'bold'}}>
            Book Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="notifications" size={30} color="#bdbdbd" />
          <Text style={{fontSize: 12, color: '#bdbdbd', fontWeight: 'bold'}}>
            Notifikasi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="person-circle" size={30} color="#bdbdbd" />
          <Text style={{fontSize: 12, color: '#bdbdbd', fontWeight: 'bold'}}>
            User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
