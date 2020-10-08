import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Animated, Text, Alert, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
import { Toast } from "native-base";

class DataAddOns extends Component {

    validateFields = () => {

        Toast.show({
            text: "Package activated successfully !",
            position: 'bottom',
            textStyle: { fontWeight: 'bold' },
            duration: 4000,
            style: { backgroundColor: "#00ff80", height: 80, margin: 15, borderRadius: 20, borderWidth: 1, borderColor: '#ffffff' },
            buttonText: "Okay",
            buttonStyle: { backgroundColor: "#ffffff", justifyContent: 'center', alignSelf: 'center' },
            buttonTextStyle: { color: "#00ff80" },

        })

    }

    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#ffffff'

            }}>


                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 60 }}>
                            <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                            <Text style={{ fontSize: 28, marginTop: 3, color: '#009eff' }}>DATA ADD-ON</Text>

                        </View>

                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.slt.lk/en/broadband/packages')}>
                            <View style={{
                                ...styles.buttonmain, backgroundColor: '#009eff', marginHorizontal: 40, height: 40, marginTop: 15, marginBottom: 20,
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>Browse more data add ons here!</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    {/* start box 01 */}

                    <View style={{
                        flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 80, borderRadius: 20, marginTop: -10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>

                        <ScrollView>

                            {/* button 1 -start */}
                            <View style={{
                                flex: 1, backgroundColor: '#e4f1f7', marginLeft: 20, marginRight: 20, borderRadius: 20, marginTop: 10, marginBottom: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>

                                <Text style={{
                                    marginLeft: 10,
                                    marginTop: 15,
                                    fontSize: 17
                                }}>Home Schooling and</Text>
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 17
                                }}>WFH</Text>

                                <Text style={{
                                    marginLeft: 250,
                                    fontSize: 22,
                                    marginTop: -45,
                                    fontWeight: 'bold'
                                }}>30 GB</Text>


                                <View>
                                    <TouchableOpacity onPress={this.validateFields}>
                                        <View style={{
                                            ...styles.buttonmain, backgroundColor: '#009eff', marginHorizontal: 40, height: 40, marginTop: 20, marginBottom: 5,
                                        }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Activate</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>



                                {/* horizontal line */}
                                <View style={{
                                    flex: .5
                                }}>
                                    <View style={{
                                        borderBottomColor: '#C0C0C0',
                                        borderBottomWidth: 1,
                                        marginTop: 5
                                    }} />

                                    <Text style={{
                                        marginLeft: 10,
                                        marginTop: 3,
                                        fontSize: 16,
                                        fontStyle: 'italic'
                                    }}>Meet Lite</Text>
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 14,
                                        marginBottom: 5,
                                    }}>Zoom, Teams and more</Text>

                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 25,
                                        marginTop: -45,
                                        marginBottom: 10,
                                        marginLeft: 220,
                                        fontWeight: 'bold'
                                    }}>Rs. 195</Text>

                                </View>
                                {/* horizontal line */}

                            </View>
                            {/* button 1 - end */}
                            {/* button 2- start */}
                            <View style={{
                                flex: 1, backgroundColor: '#e4f1f7', marginLeft: 20, marginRight: 20, borderRadius: 20, marginTop: 10, marginBottom: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>

                                <Text style={{
                                    marginLeft: 10,
                                    marginTop: 15,
                                    fontSize: 17
                                }}>Home Schooling and</Text>
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 17
                                }}>WFH</Text>

                                <Text style={{
                                    marginLeft: 240,
                                    fontSize: 22,
                                    marginTop: -45,
                                    fontWeight: 'bold'
                                }}>100 GB</Text>


                                <View>
                                    <TouchableOpacity onPress={this.validateFields}>
                                        <View style={{
                                            ...styles.buttonmain, backgroundColor: '#009eff', marginHorizontal: 40, height: 40, marginTop: 20, marginBottom: 5,
                                        }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Activate</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>


                                {/* horizontal line */}
                                <View style={{
                                    flex: .5
                                }}>
                                    <View style={{
                                        borderBottomColor: '#C0C0C0',
                                        borderBottomWidth: 1,
                                        marginTop: 5
                                    }} />

                                    <Text style={{
                                        marginLeft: 10,
                                        marginTop: 5,
                                        fontSize: 16,
                                        fontStyle: 'italic'
                                    }}>Meet Max</Text>
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 14,
                                        marginBottom: 5
                                    }}>Zoom, Teams and more</Text>

                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 25,
                                        marginTop: -45,
                                        marginBottom: 10,
                                        marginLeft: 220,
                                        fontWeight: 'bold'
                                    }}>Rs. 495</Text>

                                </View>
                                {/* horizontal line */}

                            </View>
                            {/* button 2 - end */}
                            {/* button 3 - start */}
                            <View style={{
                                flex: 1, backgroundColor: '#e4f1f7', marginLeft: 20, marginRight: 20, borderRadius: 20, marginTop: 10, marginBottom: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>

                                <Text style={{
                                    marginLeft: 10,
                                    marginTop: 15,
                                    fontSize: 17
                                }}>Entertainment</Text>
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 17
                                }}>Unlimited</Text>

                                <Text style={{
                                    marginLeft: 210,
                                    fontSize: 20,
                                    marginTop: -45,
                                    fontWeight: 'bold'
                                }}>UNLIMITED</Text>


                                <View>
                                    <TouchableOpacity onPress={this.validateFields}>
                                        <View style={{
                                            ...styles.buttonmain, backgroundColor: '#009eff', marginHorizontal: 40, height: 40, marginTop: 20, marginBottom: 5,
                                        }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Activate</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                                {/* horizontal line */}
                                <View style={{
                                    flex: .5
                                }}>
                                    <View style={{
                                        borderBottomColor: '#C0C0C0',
                                        borderBottomWidth: 1,
                                        marginTop: 5
                                    }} />

                                    <Text style={{
                                        marginLeft: 10,
                                        marginTop: 5,
                                        fontSize: 16,
                                        fontStyle: 'italic'
                                    }}>Entertainment</Text>
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 14,
                                        marginBottom: 5
                                    }}>Combo pack</Text>

                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 25,
                                        marginTop: -45,
                                        marginBottom: 10,
                                        marginLeft: 220,
                                        fontWeight: 'bold'
                                    }}>Rs. 1990</Text>

                                </View>
                                {/* horizontal line */}

                            </View>
                            {/* button 3 - end */}


                            {/* button 4 - start */}
                            <View style={{
                                flex: 1, backgroundColor: '#e4f1f7', marginLeft: 20, marginRight: 20, borderRadius: 20, marginTop: 10, marginBottom: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>

                                <Text style={{
                                    marginLeft: 10,
                                    marginTop: 15,
                                    fontSize: 17
                                }}>Entertainment</Text>
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 17
                                }}>Booster</Text>

                                <Text style={{
                                    marginLeft: 240,
                                    fontSize: 22,
                                    marginTop: -45,
                                    fontWeight: 'bold'
                                }}>100 GB</Text>


                                <View>
                                    <TouchableOpacity onPress={this.validateFields}>
                                        <View style={{
                                            ...styles.buttonmain, backgroundColor: '#009eff', marginHorizontal: 40, height: 40, marginTop: 20, marginBottom: 5,
                                        }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Activate</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                                {/* horizontal line */}
                                <View style={{
                                    flex: .5
                                }}>
                                    <View style={{
                                        borderBottomColor: '#C0C0C0',
                                        borderBottomWidth: 1,
                                        marginTop: 5
                                    }} />

                                    <Text style={{
                                        marginLeft: 10,
                                        marginTop: 5,
                                        fontSize: 16,
                                        fontStyle: 'italic'
                                    }}>Entertainment</Text>
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 14,
                                        marginBottom: 5
                                    }}>Limited pack</Text>

                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 25,
                                        marginTop: -45,
                                        marginBottom: 10,
                                        marginLeft: 220,
                                        fontWeight: 'bold'
                                    }}>Rs. 1200</Text>

                                </View>
                                {/* horizontal line */}

                            </View>
                            {/* button 4 - end */}

                            {/* button 5 - start */}
                            <View style={{
                                flex: 1, backgroundColor: '#e4f1f7', marginLeft: 20, marginRight: 20, borderRadius: 20, marginTop: 10, marginBottom: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>

                                <Text style={{
                                    marginLeft: 10,
                                    marginTop: 15,
                                    fontSize: 17
                                }}>Education</Text>
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 17
                                }}>Booster</Text>

                                <Text style={{
                                    marginLeft: 250,
                                    fontSize: 22,
                                    marginTop: -45,
                                    fontWeight: 'bold'
                                }}>50 GB</Text>


                                <View>
                                    <TouchableOpacity onPress={this.validateFields}>
                                        <View style={{
                                            ...styles.buttonmain, backgroundColor: '#009eff', marginHorizontal: 40, height: 40, marginTop: 20, marginBottom: 5,
                                        }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Activate</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                                {/* horizontal line */}
                                <View style={{
                                    flex: .5
                                }}>
                                    <View style={{
                                        borderBottomColor: '#C0C0C0',
                                        borderBottomWidth: 1,
                                        marginTop: 5
                                    }} />

                                    <Text style={{
                                        marginLeft: 10,
                                        marginTop: 5,
                                        fontSize: 16,
                                        fontStyle: 'italic'
                                    }}>Education</Text>
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 14,
                                        marginBottom: 5
                                    }}>Limited pack</Text>

                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 25,
                                        marginTop: -45,
                                        marginBottom: 10,
                                        marginLeft: 220,
                                        fontWeight: 'bold'
                                    }}>Rs. 1000</Text>

                                </View>
                                {/* horizontal line */}

                            </View>
                            {/* button 5 - end */}
                        </ScrollView>
                    </View>
                </View>

                {/* DO NOT CHANGE BELOW */}
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
    textInput: {
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: "#008ECC"

    },
    buttonmain: {
        backgroundColor: 'white',
        height: 60,
        marginHorizontal: 20,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    buttonmain: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },

});
export default DataAddOns;