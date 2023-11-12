import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

import Header from './Header';

export default function Navbar() {
  const [pencarian, setPencarian] = useState('');
  return (
    <ScrollView style={{backgroundColor: '#f4f4f4'}}>
      <View style={{backgroundColor: '#f4f4f4'}}>
        <View style={{backgroundColor: '#f4f4f4'}}>
          <View
            style={{
              marginHorizontal: 20,
            }}>
            <Header pencarian={pencarian} setPencarian={setPencarian} />
            <View style={{flexDirection: 'row', marginTop: 50}}>
              <Text
                style={{
                  color: '#F67280',
                  fontWeight: 'bold',
                  marginTop: 2,
                  bottom: 20,
                }}>
                BEAUTY & SPA CENTER
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                bottom: 25,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  marginTop: 10,
                  bottom: 25,
                }}>
                Lihat semua
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
          }}>
          <Image
            source={require('../Image/01.jpg')}
            style={{
              width: 180,
              height: 180,
              borderRadius: 10,
              marginBottom: 25,
              marginTop: 25,
              marginRight: 50,
              padding: 50,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            source={require('../Image/06.jpg')}
            style={{
              width: 180,
              height: 180,
              borderRadius: 10,
              marginBottom: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            source={require('../Image/03.png')}
            style={{
              width: 180,
              height: 180,
              borderRadius: 10,
              marginBottom: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            source={require('../Image/04.webp')}
            style={{
              width: 180,
              height: 180,
              borderRadius: 10,
              marginBottom: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            source={require('../Image/05.jpg')}
            style={{
              width: 180,
              height: 180,
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
