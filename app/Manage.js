import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import { Container, Header, Content, CardItem, Text, Right } from 'native-base';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


class Manage extends Component {



    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#ffffff'

            }}>

                {/* Create your Manage UI's here -- Manage */}
                <View style={{
                    flex: 6, marginHorizontal: 10,
                }}>
                    <ScrollView>
                        <Card style={{ borderRadius: 20, height: 50 }}>
                            <Card.Title>ADD MORE DATA</Card.Title>
                            <Card.Divider />
                            <Card.Image source={require('../assets/adddata.jpg')} style={{ height: 100 }} />
                            <Text style={{ marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }}>
                                Upgrade your existing data bundle here
                            </Text>
                            <Button onPress={() => this.props.navigation.navigate("AddMoreData")}
                                icon={<Icon name='add' color='#ffffff' />}
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Add now' />
                        </Card>


                        <Card style={{ borderRadius: 20, justifyContent: 'center' }}>
                            <Card.Title>DATA ADD-ONS</Card.Title>
                            <Card.Divider />
                            <Card.Image source={require('../assets/add_ons.jpg')} style={{ height: 100 }} />
                            <Text style={{ marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }}>
                                Add more to your data package
  </Text>
                            <Button onPress={() => this.props.navigation.navigate("DataAddOns")}
                                icon={<Icon name='add' color='#ffffff' />}
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Add now' />
                        </Card>

                        <Card style={{ borderRadius: 20 }}>
                            <Card.Title>GIFT DATA</Card.Title>
                            <Card.Divider />
                            <Card.Image source={require('../assets/giftData.png')} style={{ height: 100 }} />
                            <Text style={{ marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }}>
                                Gift data to your loved ones
  </Text>
                            <Button onPress={() => this.props.navigation.navigate("Giftdata")}
                                icon={<Icon name='add' color='#ffffff' />}
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Gift Data' />
                        </Card>

                        <Card style={{ borderRadius: 20 }}>
                            <Card.Title>REDEEM DATA</Card.Title>
                            <Card.Divider />
                            <Card.Image source={require('../assets/redeemData.jpg')} style={{ height: 100 }} />
                            <Text style={{ marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }}>
                                Redeem data using your voucher
  </Text>
                            <Button onPress={() => this.props.navigation.navigate("Promocode")}
                                icon={<Icon name='add' color='#ffffff' />}
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Redeem Now' />
                        </Card>

                        <Card style={{ borderRadius: 20 }}>
                            <Card.Title>HAPPY DAY</Card.Title>
                            <Card.Divider />
                            <Card.Image source={require('../assets/happyday.jpg')} style={{ height: 100 }} />
                            <Text style={{ marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }}>
                                Check in for the happy day offers
  </Text>
                            <Button
                                icon={<Icon name='add' color='#ffffff' />}
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Find Out' />
                        </Card>
                        <Card style={{ borderRadius: 20 }}>
                            <Card.Title>MORE</Card.Title>
                            <Card.Divider />
                            <Card.Image source={require('../assets/more.jpg')} style={{ height: 100 }} />
                            <Text style={{ marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }}>
                                Upgrade your existing data bundle here
  </Text>
                            <Button onPress={() => this.props.navigation.navigate("MoreAddsHansi")}
                                icon={<Icon name='add' color='#ffffff' />}
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Find out' />
                        </Card>


                    </ScrollView>






                    {/* <Text>This is Manage UI</Text>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Promocode")}>
                            <Text style={{ color: '#009eff' }}> Click to Redeem Data</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("AddMoreData")}>
                            <Text style={{ color: '#009eff' }}> Add More Data</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("TotalUsageChart")}>
                            <Text style={{ color: '#009eff' }}> View Total Usage</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("MoreAddsHansi")}>
                            <Text style={{ color: '#009eff' }}>Click for More Ads</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Giftdata")}>
                            <Text style={{ color: '#009eff' }}>Gift data</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("DataAddOns")}>
                            <Text style={{ color: '#009eff' }}>Data add ons</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Entertainment")}>
                            <Text style={{ color: '#009eff' }}> Entertainment UI</Text>
                        </TouchableOpacity>
                    </View> */}

                </View>
                <View style={{ flex: 1 }}>

                </View>
                {/* Create your Manage UI's here -- Manage */}

                <View style={{

                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: '#ffffff',
                    width: 85,
                    height: 85,
                    borderRadius: 40,
                    bottom: 35,
                    zIndex: 10


                }}>

                    <View style={[styles.button, styles.actionBtn]}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("MainUI")}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/009EFF/pie-chart-4-xxl.png' }}
                            />

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#009eff' }}>Usage </Text>
                    </View>




                </View>
                <View style={{

                    position: 'absolute',
                    backgroundColor: '#009eff',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Manage")}>
                            <Image

                                style={{ width: 30, height: 30 }}

                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/F1F3F8/settings-2-xxl.png' }}

                            >

                            </Image>

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#f1f3f8' }}>Manage</Text>
                    </View>

                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: 10
                    }}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("PurchaseHistory")}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/F1F3F8/clock-6-xxl.png' }}

                            />

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#f1f3f8' }}>History </Text>
                    </View>

                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginStart: 75,
                    }}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Promotions")}
                        >
                            <Image
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/F1F3F8/light-bulb-2-xxl.png' }}

                                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                containerStyle={{ marginHorizontal: 16 }}
                            />

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#f1f3f8' }}>Promo </Text>
                    </View>
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly',

                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Profile")}
                        >
                            <Image
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/F1F3F8/user-8-xxl.png' }}

                                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                containerStyle={{ marginHorizontal: 16 }}
                            />

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#f1f3f8' }}>Profile </Text>

                    </View>

                    {/* </View> */}
                </View>
            </View>
        );
    }


}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 40,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#f1f3f8',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#009eff'


    }


});
export default Manage;