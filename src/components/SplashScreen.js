import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
1;
import {StackActions} from '@react-navigation/native';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Menu'));
      this.props.navigation.navigate('Menu');
    }, 3000);
  }
  render() {
    return (
      <View>
        <Text>SplashScreen</Text>
      </View>
    );
  }
}

export default Menu;
