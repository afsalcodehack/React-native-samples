class Receipt extends React.Component {
	constructor(args) {
		super(args);
		var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.data)
        }
	}
	render() {
		return (
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
	);
}	
}
