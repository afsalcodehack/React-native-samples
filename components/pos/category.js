/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

import React from 'react-native';
import Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} = React;

let data =[
    { name: 'One', icon: 'globe'},
    { name: 'Two', icon: 'pencil'},
    { name: 'Three', icon: 'umbrella' },
    { name: 'Four', icon: 'car'},
    { name: 'Five', icon: 'cog' },
    { name: 'Six', icon: 'link'},
    { name: 'Seven', icon: 'file-text'}
]
class Category extends React.Component {
    constructor(args) {
        super(args);
        var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: dataSource.cloneWithRows(data)
        }
    }
    render() {
        return (<ListView dataSource={this.state.dataSource} renderRow={this.renderRow} style={{flex: 1}} />)
    }
    renderRow(rowData, sectionID: number, rowID: number) {
        return (
            <View style={[styles.button]}>
              <Icon name={rowData.icon} style={{fontSize: 25, height: 25, width: 25, margin: 5, marginBottom: 0}} size={25}/>
              <Text>{rowData.name}</Text>
            </View>
       );
    }
}


var styles = StyleSheet.create({
    categoryBar: {
        width: 90,
        borderRightColor: '#CCC',
        borderRightWidth: 1
    },
    button: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        flexDirection: 'column',
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
});

module.exports = Category;