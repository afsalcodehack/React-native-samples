/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
} = React;

class DishProfile extends React.Component{
    constructor(args){
        super(args);
        this.state = {
            qty: 1
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <Icon name="user" color="#BCCFE7" size={16} />
                    <Text style={styles.titleText}> User Profile</Text>
                </View>
                <View style={styles.userProfileWrapper}>
                    <Image source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} style={styles.profileImage} />
                    <View style={styles.profileInfoWrapper}>
                        <Text style={styles.name}>Jack Nicholson</Text>
                        <View style={styles.profileItemWrapper}>
                            <Icon name="envelope" size={18} color="#B5C8E2" />
                            <Text style={styles.profileItem}>johny@companyname.com</Text>
                        </View>
                        <View style={styles.profileItemWrapper}>
                            <Icon name="phone" size={18} color="#B5C8E2" />
                            <Text style={styles.profileItem}>+27 78 669 2347</Text>
                        </View>
                        <View style={styles.profileItemWrapper}>
                            <Icon name="map-marker" size={18} color="#B5C8E2" />
                            <Text style={styles.profileItem}>Hollywood Hills, California</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight onPress={()=>{this.setState({qty: this.state.qty + 1})}}>
                            <View style={styles.button}>
                                <Icon name="plus" size={14} />
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.qtyText}>{this.state.qty}</Text>
                        <TouchableHighlight onPress={()=>{this.setState({qty: this.state.qty - 1})}}>
                            <View style={styles.button}>
                                <Icon name="minus" size={14} />
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.tabWrapper}>
                    <View style={styles.tab}>
                        <Icon name="user" size={18} color="#A4C1E8" />
                        <Text style={styles.tabText}>OPTIONS</Text>
                    </View>
                    <View style={styles.tab}>
                        <Icon name="clock-o" size={18} color="#A4C1E8" />
                        <Text style={styles.tabText}>PREPARATIONS & INGRADIENTS</Text>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: '#FFF', flexDirection: 'column'}}>
                    <View style={styles.dishOption}>
                        <Text style={styles.question}>Do yo need Spicy ?</Text>
                        <View style={{flexDirection:'row'}}>
                            <OptionButton text="Yes" />
                            <OptionButton text="No" />
                        </View>
                    </View>
                     <View style={styles.dishOption}>
                        <Text style={styles.question}>Select Size ?</Text>
                        <View style={{flexDirection:'row'}}>
                            <OptionButton text="Small" />
                            <OptionButton text="Medium" />
                            <OptionButton text="small" />
                        </View>
                    </View>
                    <View style={styles.dishOption}>
                        <Text style={styles.question}>Some other question?</Text>
                        <View style={{flexDirection:'row'}}>
                            <OptionButton text="Answer 1" />
                            <OptionButton text="Answer 2" />
                            <OptionButton text="Answer 3" />
                        </View>
                    </View>
                </View>
                <View style={styles.bottomBar}>
                    <TouchableHighlight onPress={this.props.onShowCart}>
                        <View style={styles.orderButton}>
                            <Icon name="shopping-cart" size={24} color='#5075B2' />
                            <Text style={{color:'#5075B2'}}>Show Cart</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{flex:1}}>
                    </View>
                    <View style={styles.orderButton}>
                        <Icon name="shopping-cart" size={24} color='#5075B2' />
                        <Text style={{color:'#5075B2'}}>Add To Cart</Text>
                    </View>
                </View>
            </View>
        );
    }
}

class OptionButton extends React.Component {
    render() {
        return (
            <View style={{flexDirection:'row', margin: 10}}>
                <View style={{height:20,width:20,borderRadius:10,borderWidth:1, borderColor:'#C4D3E7'}}></View>
                <Text style={{marginLeft: 5}}>{this.props.text}</Text>
            </View>
        );
    }
}



var styles = StyleSheet.create({
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10
    },
    dishOption: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#C4D3E7',
        padding: 10
    },
    dishOptionItem: {
        borderBottomColor: '#C4D3E7',
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'column'
    },
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        flexDirection: 'column',
        alignItems: 'stretch',
        borderRightColor: '#D8E0F1',
        borderRightWidth: 1
    },
    titleBar: {
        backgroundColor: '#F7F8FC',
        padding: 10,
        borderBottomColor: '#C4D3E7',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    titleText: {
        color: '#5075B2',
        fontWeight: 'bold'
    },
    userProfileWrapper: {
        padding: 20,
        backgroundColor: '#EAEEF5',
        borderBottomColor: '#D8E0F1',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderColor: '#FFF',
        borderWidth: 5,
        borderRadius: 5
    },
    profileInfoWrapper: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5B7EB8'
    },
    profileItemWrapper: {
        flexDirection: 'row',
        paddingTop: 2,
    },
    profileItem: {
        color: '#5B7EB8'
    },
    tabWrapper: {
        backgroundColor: '#F0F1F3',
        padding: 10,
        flexDirection: 'row',
        borderBottomColor: '#D8E0F1',
        borderBottomWidth: 1,
    },
    tab: {
        flexDirection: 'row',
        borderRightColor: '#CCC',
        borderRightWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabText: {
        color: '#A4C1E8',
        fontWeight: 'bold'
    },
    bottomBar: {
        padding: 10,
        backgroundColor: '#EAEEF5',
        borderTopColor: '#D8E0F1',
        borderTopWidth: 1,
        flexDirection: 'row',
    },
    orderButton: {
        backgroundColor: '#F0F1F3',
        padding: 20,
        borderColor: '#D8E0F1',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#F0F1F3',
        padding: 5,
        borderColor: '#D8E0F1',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    qtyText: {
        backgroundColor: '#F0F1F3',
        padding: 10,
        marginLeft: 10,
    }
});

module.exports = DishProfile;
