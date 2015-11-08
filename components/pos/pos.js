/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

var React = require('react-native');
var Animatable = require('react-native-animatable');
var Icon = require('react-native-vector-icons/FontAwesome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableWithoutFeedback,
} = React;


export class PointOfSale extends React.Component{
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.categoryBar}>
             {(() => {
                 var components = []
                 for(var i = 0; i < 9;i++) {
                     components.push(<SidebarButton icon="list" text="Juice" />);
                 }
                 return components;
             })()}
          </View>
          <View style={{ width: 550, backgroundColor: '#F9F9F9', flexDirection: 'column', borderRightColor:'#766946', borderRightWidth: 5}}>
              <View style={{ padding: 15, backgroundColor: '#FFF'}}>
                  <Text> Category 1</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                  {(() => {
                      var views = [];
                      for(var i = 0; i < 5; i++){
                          var dishes = [];
                          for(var j = 0; j < 8; j++) {
                              dishes.push(<SidebarButton icon="list" text="Juice" />);
                          }
                          views.push(<View style={{flexDirection: 'row'}}>{dishes}</View>);
                      }
                      return views;
                  })()}
              </View>
              <View style={{ padding: 15, backgroundColor: '#FFF'}}>
                  <Text> Category 1</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                  {(() => {
                      var views = [];
                      for(var i = 0; i < 5; i++){
                          var dishes = [];
                          for(var j = 0; j < 8; j++) {
                              dishes.push(<SidebarButton icon="list" text="Juice" />);
                          }
                          views.push(<View style={{flexDirection: 'row'}}>{dishes}</View>);
                      }
                      return views;
                  })()}
              </View>
          </View>
          <View style={{flex:1, padding: 10}}>
              <RecieptView />
          </View>
      </View>
    );
  }
}

class RecieptView extends React.Component {
    constructor(args) {
        super(args);
    }
    render() {
        return (
            <View style={{ borderColor: '#CCC', borderWidth: 1, borderRadius: 5 }}>
                <View style={{ borderBottomColor: '#CCC', borderBottomWidth: 1, padding: 10, flexDirection: 'row' }}>
                    <Text style={{flex: 1}}>Name</Text>
                    <Text style={{width: 50}}>Qty</Text>
                    <Text style={{width: 50}}>Each</Text>
                    <Text style={{width: 50}}>Price</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    {(() => {
                        var array = [];
                        for(var i = 0; i < 7; i++) {
                            array.push(<View style={{ borderBottomColor: '#CCC', borderBottomWidth: 1, padding: 20, flexDirection: 'row' }}></View>);
                        }
                        return array;
                    })()}
                </View>
            </View>
        );
    }
}

class SidebarButton extends React.Component {
  render() {
    return (
      <View style={[styles.button, this.props.style]}>
        <Icon name={this.props.icon} style={{fontSize: 25, height: 25, width: 25, margin: 5, marginBottom: 0}} size={25}/>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

class DishButton extends React.Component {
    render() {
      return (
        <View style={[styles.button, this.props.style]}>
          <Icon name={this.props.icon} style={{fontSize: 25, height: 25, width: 25, margin: 5, marginBottom: 0}} size={25}/>
          <Text>{this.props.text}</Text>
        </View>
      );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
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
        padding: 10
    },
});
