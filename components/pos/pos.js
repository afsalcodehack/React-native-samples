/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

var React = require('react-native');
var Animatable = require('react-native-animatable');
var Icon = require('react-native-vector-icons/FontAwesome');
var Category = require('./category');
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

var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
class PointOfSale extends React.Component{
    constructor(args) {
        super(args);
        this.state = {
            dataSource: dataSource.cloneWithRows(posData)
        }
    }
    onItemPress() {
      //var newdata = update(posData,{$push:{ name: 'Test', icon: 'list'}});
       posData.splice(0,0,{ name: 'Test', icon: 'list' });
      this.setState({ dataSource: dataSource.cloneWithRows(posData)})
    }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.categoryBar}>
             <Category />
          </View>
          <View style={{ width: 450, backgroundColor: 'whitesmoke', alignItems:'stretch', flexDirection: 'column', borderRightColor:'#766946', borderRightWidth: 5}}>
              <View style={{ backgroundColor: '#FFF', height: 50, padding: 10 }}>
                  <Text style={{fontSize: 25}}>Title Goes Here...</Text>
              </View>
              <View style={{ backgroundColor: '#FFF', padding: 5, borderTopColor: '#F4F4F4',borderTopWidth: 1 }}>
                  <TextInput placeholder="Search Something Here..." />
              </View>
              <View style={{alignItems: 'center', flex: 1}}>
                  <Dishes onItemPress={this.onItemPress.bind(this)} />
              </View>
          </View>

          <View style={{flex:1, flexDirection: 'column', alignItems:'stretch', backgroundColor: 'whitesmoke',padding: 10}}>
              <View style={{borderWidth: 1, borderColor: '#DFE0E2', flexDirection: 'column', alignItems: 'stretch', backgroundColor: '#FBFBFB', padding: 10}}>
                  <View style={{alignItems: 'center'}}>
                      <Text style={{fontSize: 20}}> Order Number: #3659556</Text>
                  </View>
                  <View style={{borderColor:'#D6D6D6', borderWidth: 1, margin: 10, width: null, flex: 1,backgroundColor: '#FFF', padding: 5}}>
                      <View style={{borderBottomStyle: 'dashed', borderBottomWidth: 1, borderBottomColor: "#D6D6D6",padding: 8, flexDirection: 'row'}}>
                          <Text style={{ flex: 2, fontWeight : 'bold'}}>Name</Text>
                          <Text style={{ flex: 0.5, fontWeight : 'bold'}}>Qty</Text>
                          <Text style={{ flex: 0.5, fontWeight : 'bold'}}>Each</Text>
                          <Text style={{ flex: 0.5, fontWeight : 'bold'}}>Price</Text>
                      </View>
                      <View style={{height: 250}}>
                            <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}  />
                      </View>
                      <View style={{flexDirection: 'row', padding: 5}}>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text> Sub Total: </Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text> $7.25</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>Total</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-end'}}>
                              <Text style={{color: '#A51919', fontSize: 20}}>$7.25</Text>
                          </View>
                      </View>
                      <View style={{flexDirection: 'row', padding: 5}}>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>Discount: </Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>$ 0.00</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>

                          </View>
                          <View style={{flex: 1, alignItems: 'flex-end'}}>

                          </View>
                      </View>
                      <View style={{flexDirection: 'row', padding: 5}}>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>tabText: </Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text> $1.34</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>Balance Due</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-end'}}>
                              <Text style={{color: '#A51919', fontSize: 20}}> $8.59</Text>
                          </View>
                      </View>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{flex:1}}></View>
                      <View style={{borderColor:'#F4F4F4', borderWidth: 5, borderRadius: 20, backgroundColor: '#0085BE', padding: 8}}>
                            <Text style={{color: '#FFF'}}>
                                Hold Order
                            </Text>
                      </View>
                      <View style={{borderColor:'#F4F4F4', borderWidth: 5, borderRadius: 20, backgroundColor: '#0085BE', padding: 8}}>
                            <Text style={{color: '#FFF'}}>
                                Cancel Order
                            </Text>
                      </View>
                      <View style={{borderColor:'#F4F4F4', borderWidth: 5, borderRadius: 20, backgroundColor: '#0085BE', padding: 8, marginRight: 10 }}>
                            <Text style={{color: '#FFF'}}>
                                Send Order
                            </Text>
                      </View>
                  </View>

              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{width: 80, height: 80, borderRadius: 8, backgroundColor: '#0085BE', margin: 10, marginTop: 25, padding: 28, paddingLeft: 25}}>
                      <Text style={{color: '#FFF'}}>
                         Print
                      </Text>
                  </View>
                  <View style={{flex:1}}></View>

                  <View style={{width: 80, height: 80, borderRadius: 8, backgroundColor: '#0085BE', margin: 10, marginTop: 25, padding: 28, paddingLeft: 30}}>
                      <Text style={{color: '#FFF'}}>
                         Pay
                      </Text>
                  </View>
              </View>
          </View>
      </View>
    );
  }
  renderRow(rowData, sectionID: number, rowID: number) {
      return (
          <View style={{borderBottomStyle: 'dashed', borderBottomWidth: 1, borderBottomColor: "#D6D6D6",padding: 8, flexDirection: 'row'}}>
              <Text style={{ flex: 2}}>{rowData.name}</Text>
              <Text style={{ flex: 0.5}}>{rowID + 1}</Text>
              <Text style={{ flex: 0.5}}>{rowID + 1 * 25.25}</Text>
              <Text style={{ flex: 0.5}}>{ rowID + 1 * 26.2563 }</Text>
          </View>
     );
  }
}

var posData=[];

var data =[
    { name: 'One', icon: 'globe'},
    { name: 'Two', icon: 'pencil'},
    { name: 'Three', icon: 'umbrella' },
    { name: 'Four', icon: 'car'},
    { name: 'Five', icon: 'cog' },
    { name: 'Six', icon: 'link'},
    { name: 'Seven', icon: 'file-text'}
]

var _data = [
    { Category: [{name:'1', image:'http://pngimg.com/upload/burger_sandwich_PNG4135.png',price:''}, {name:'1', image:'',price:''}, {name:'1', image:'',price:''}]},
    { Category: [{name:'2', image:'',price:''},{name:'1', image:'',price:''},{name:'1', image:'',price:''}]},
    { Category: [{name:'3', image:'',price:''},{name:'1', image:'',price:''},{name:'1', image:'',price:''}]},
    { Category: [{name:'4', image:'',price:''},{name:'1', image:'',price:''},{name:'1', image:'',price:''}]},
    { Category: [{name:'5', image:'',price:''},{name:'1', image:'',price:''},{name:'1', image:'',price:''}]},
    { Category: [{name:'6', image:'',price:''},{name:'1', image:'',price:''},{name:'1', image:'',price:''}]},
];
class Dishes extends React.Component {
    constructor(args) {
        super(args);
        var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: dataSource.cloneWithRows(_data)
        }
    }
    render() {
        return (<ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} style={{flex: 1}} />)
    }
    renderRow(rowData, sectionID: number, rowID: number) {
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {
                    (()=>{
                        var items = [];
                        rowData.Category.map((itm) => {
                            items.push(
                              <TouchableHighlight onPress={this.props.onItemPress}>
                                <View style={{ width: 120, height: 120, backgroundColor: '#FFF', margin: 8}}>
                                  <Image source={{uri: itm.image}} style={{width:120,height:120}}/>
                                  <Text>{itm.name}</Text>
                                </View>
                              </TouchableHighlight>
                            );
                        });

                        return items;
                    })()
                }

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
            <Image source={require('image!pos_bg')} style={{width: 500, height: 500}} >
            </Image>
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
        justifyContent: 'center',
        padding: 10
    },
});

module.exports = PointOfSale;
