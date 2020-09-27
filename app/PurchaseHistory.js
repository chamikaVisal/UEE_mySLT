import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import { DatePicker, Card } from 'native-base';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


class PurchaseHistory extends Component {



    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#ffffff'

            }}>

                {/* Create your History UI's here -- History */}
                <View style={{ flex: 1, backgroundColor: 'pink', marginBottom: 70 }}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ justifyContent: "center", alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
                            <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                            <Text style={{ fontSize: 28, color: '#009eff' }}>Purchase History</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <View style={{ flex: 1, flexDirection: 'row', margin: 5, backgroundColor: '#ffffff' }}>

                            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                                <View style={{ flex: 1, marginHorizontal: 20 }}>
                                    <Text>From</Text>
                                </View>


                                <View style={{ borderWidth: 1, borderColor: '#009eff', flex: 2, marginHorizontal: 10, borderRadius: 20, }}>

                                    <DatePicker />
                                </View>

                            </View>

                            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                                <View style={{ flex: 1, marginHorizontal: 20 }}>
                                    <Text>To</Text>
                                </View>


                                <View style={{ borderWidth: 1, borderColor: '#009eff', flex: 2, marginHorizontal: 10, borderRadius: 20, }}>

                                    <DatePicker />
                                </View>

                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 5, backgroundColor: '#ffffff' }}>
                        <ScrollView>

                            <View style={{
                                marginHorizontal: 20, marginVertical: 10, borderRadius: 20, shadowColor: "#000", backgroundColor: '#ffffff',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                                flex: 1,
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flex: 5, }}>
                                        <View style={{ margin: 10, backgroundColor: '#009eff', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Extra 5GB</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 16, }}>Post paid</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 14, color: 'silver' }}>Tue, June 13 - 6.30 PM</Text>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#009eff' }}>Rs. 250</Text>

                                </View>
                            </View>
                            <View style={{
                                marginHorizontal: 20, marginVertical: 10, borderRadius: 20, shadowColor: "#000", backgroundColor: '#ffffff',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                                flex: 1,
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flex: 5, }}>
                                        <View style={{ margin: 10, backgroundColor: '#009eff', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Extra 5GB</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 16, }}>Post paid</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 14, color: 'silver' }}>Tue, June 13 - 6.30 PM</Text>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#009eff' }}>Rs. 250</Text>

                                </View>
                            </View>
                            <View style={{
                                marginHorizontal: 20, marginVertical: 10, borderRadius: 20, shadowColor: "#000", backgroundColor: '#ffffff',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                                flex: 1,
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flex: 5, }}>
                                        <View style={{ margin: 10, backgroundColor: '#009eff', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Extra 5GB</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 16, }}>Post paid</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 14, color: 'silver' }}>Tue, June 13 - 6.30 PM</Text>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#009eff' }}>Rs. 250</Text>

                                </View>
                            </View>
                            <View style={{
                                marginHorizontal: 20, marginVertical: 10, borderRadius: 20, shadowColor: "#000", backgroundColor: '#ffffff',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                                flex: 1,
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flex: 5, }}>
                                        <View style={{ margin: 10, backgroundColor: '#009eff', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Extra 5GB</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 16, }}>Post paid</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 14, color: 'silver' }}>Tue, June 13 - 6.30 PM</Text>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#009eff' }}>Rs. 250</Text>

                                </View>
                            </View>
                            <View style={{
                                marginHorizontal: 20, marginVertical: 10, borderRadius: 20, shadowColor: "#000", backgroundColor: '#ffffff',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                                flex: 1,
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flex: 5, }}>
                                        <View style={{ margin: 10, backgroundColor: '#009eff', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Extra 5GB</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 16, }}>Post paid</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ margin: 2, marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 14, color: 'silver' }}>Tue, June 13 - 6.30 PM</Text>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#009eff' }}>Rs. 250</Text>

                                </View>
                            </View>



                        </ScrollView>

                    </View>


                </View>
                {/* Create your History UI's here -- History */}

                <View style={{

                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: '#ffffff',
                    width: 84,
                    height: 82,
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
                            onPress={() => this.props.navigation.navigate("History")}
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
            </View >
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
export default PurchaseHistory;