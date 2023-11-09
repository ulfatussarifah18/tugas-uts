import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export class Navbar extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={require('../Image/01.jpg')}
              style={{
                width: 180,
                height: 180,
                borderRadius: 10,
                marginBottom: 20,
                marginTop: 25,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={require('../Image/02.jpeg')}
              style={{
                width: 180,
                height: 180,
                borderRadius: 10,
                marginBottom: 20,
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
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Navbar;
