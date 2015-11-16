/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

import React from 'react-native';
import Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dishes from './dishes';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableWithoutFeedback,
  ListView,
} = React;

class WaiterScreen extends React.Component {
  constructor(args) {
    super(args);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontSize: 25}}>Title Goes Here...</Text>
        </View>
        <View style={styles.titleTextWrapper}>
          <TextInput placeholder="Search Something Here..." />
        </View>
        <View style={{alignItems: 'center', flex: 1}}>
          <Dishes />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: { 
    width: 450, 
    backgroundColor: 'whitesmoke', 
    alignItems:'stretch', 
    flexDirection: 'column', 
    borderRightColor:'#766946', 
    borderRightWidth: 5
  },
  title: {
    backgroundColor: '#FFF', 
    height: 50, 
    padding: 10 
  },
  titleTextWrapper: {
    backgroundColor: '#FFF', 
    padding: 5, 
    borderTopColor: '#F4F4F4',
    borderTopWidth: 1 
  }
});

module.exports =WaiterScreen;