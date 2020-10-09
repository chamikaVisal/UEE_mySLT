import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';


class MyProfile extends Component {



    render() {
        return (

            <View style={{
                flex: 1,

                backgroundColor: '#ffffff'

            }}>

                {/* Create your profile UI's here -- Nishiki */}
                <View style={{ flex: 1, backgroundColor: '#ffff' }}>
                    <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                        <Text style={{ fontSize: 28, color: '#009eff' }}>My Profile</Text>
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#fff', alignContent: 'center' }}>
                        <View style={{
                            margin: 15, flex: 1, backgroundColor: '#ffffff', shadowColor: "#000", borderRadius: 20, marginBottom: 90, backgroundColor: '#ffff',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,

                        }}>


                            <View>
                                <Image
                                    style={{
                                        width: 140,
                                        height: 140,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        marginTop: 10
                                    }}
                                    source={require('../assets/images.png')}>

                                </Image>
                            </View>
                            {/* content of my profile */}

                            <View style={{ flex: .7 }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    marginTop: 10,
                                    marginLeft: 20
                                }}>USER DETAILS{"\n"}
                                </Text>
                                <Text style={{
                                    fontSize: 16,
                                    marginLeft: 50
                                }}>
                                    Username      :      RG2956821{"\n"}
                                    Name             :      Arron Hunter{"\n"}
                                    Email              :      arron.h@example.com{"\n"}{"\n"}
                                </Text>

                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    marginLeft: 20,
                                    marginTop: -15
                                }}>ACCOUNT DETAILS{"\n"}</Text>
                                <Text style={{
                                    fontSize: 16,
                                    marginLeft: 50
                                }}>
                                    Package          :   web-booster{"\n"}
                                    Billing Date     :   1st of the month{"\n"}

                                </Text>
                            </View>



                            {/* content of my profile */}

                            <View style={{ flex: .15, marginTop: 2, marginBottom: 5 }}>
                                <TouchableOpacity>
                                    <View style={{ ...styles.buttonmain, backgroundColor: '#009eff', }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Switch User</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: .15, marginTop: 5, marginBottom: 35 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("MYSLT")}>
                                    <View style={{ ...styles.buttonmain, backgroundColor: '#a0a3a8', }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign out</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                        </View>

                    </View>
                </View>
                {/* Create your profile UI's here -- Nishiki */}

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


    },
    buttonmain: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    }


});
export default MyProfile;