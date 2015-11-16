/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

import React from 'react-native';
import Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Category from './category';
import DishList from './dishList';
import DishProfile from './dishProfile';
import Cart from './cart';

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

let data = [
  { name: 'One'},
  { name: 'Two'}
];

class WaiterScreen extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      isOnCart: false
    };
  }

  onShowCart() {
    this.setState({ isOnCart: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.categoryBar}>
          <Category />
        </View> 
        <DishList />
        {(()=>{
          if(!this.state.isOnCart) 
            return (<DishProfile onShowCart={this.onShowCart.bind(this)} />);
          else
            return (<Cart data ={data} />)
        })()}
      </View>
    );
  }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    categoryBar: {
        width: 90,
        borderRightColor: '#CCC',
        borderRightWidth: 1
    },
});

module.exports =WaiterScreen;