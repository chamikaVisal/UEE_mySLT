import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Animated, Text, Alert, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Toast } from "native-base";


class AddMoreData extends Component {

    validateFields = () => {

        Toast.show({
            text: "Data Package Added to the Bill !",
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
                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                            <Text style={{ fontSize: 28, marginTop: 3, color: '#009eff' }}>Add Data Packages</Text>

                        </View>

                    </View>
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
                            <View style={{ flex: 1.7, }}>
                                <View style={{
                                    flex: 4, backgroundColor: '#e4f1f7', marginLeft: 20, marginRight: 20, marginBottom: 50, borderRadius: 20, marginTop: 10,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                }}>
                                    <TouchableOpacity>
                                        <View style={{ flex: 1.4, }}>
                                            <View style={{ justifyContent: 'center', marginTop: 15 }}>
                                                <View style={{ marginTop: -1, alignItems: 'center' }}>
                                                    <Text style={{ color: '#009eff', marginHorizontal: 20, fontSize: 40, marginLeft: -140 }}>1.0 GB</Text>

                                                </View>

                                            </View>

                                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10, marginLeft: 150, marginTop: -60 }}>LKR 100 + TAX</Text>
                                                </View>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 15, color: '#A49591', marginLeft: 140, marginTop: -30, marginBottom: 20 }}>(Valid for 60 days)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ flex: 1.4, }}>
                                <View style={{
                                    flex: 4, backgroundColor: '#e4f1f7', marginLeft: 20, marginRight: 20, marginBottom: 60, borderRadius: 20, marginTop: -30,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                }}>
                                    <TouchableOpacity>
                                        <View style={{ flex: 1.4, }}>
                                            <View style={{ justifyContent: 'center', marginTop: 15 }}>
                                                <View style={{ marginTop: 2, alignItems: 'center' }}>
                                                    <Text style={{ color: '#009eff', marginHorizontal: 20, fontSize: 40, marginLeft: -130 }}>2.0 GB</Text>

                                                </View>

                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10, marginLeft: 150, marginTop: -60 }}>LKR 200 + TAX</Text>
                                                </View>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 15, color: '#A49591', marginLeft: 140, marginTop: -30, marginBottom: 20 }}>(Valid for 60 days)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ flex: 1.4, }}>
                                <View style={{
                                    flex: 4, backgroundColor: '#e4f1f7', marginLeft: 20, marginRight: 20, marginBottom: 60, borderRadius: 20, marginTop: -40,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                }}>
                                    <TouchableOpacity>
                                        <View style={{ flex: 1.4, }}>
                                            <View style={{ justifyContent: 'center', marginTop: 15 }}>
                                                <View style={{ marginTop: 2, alignItems: 'center' }}>
                                                    <Text style={{ color: '#009eff', marginHorizontal: 20, fontSize: 40, marginLeft: -130 }}>3.0 GB</Text>

                                                </View>

                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10, marginLeft: 150, marginTop: -60 }}>LKR 300 + TAX</Text>
                                                </View>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 15, color: '#A49591', marginLeft: 140, marginTop: -30, marginBottom: 20 }}>(Valid for 60 days)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={{ flex: 1.7, }}>
                                <View style={{
                                    flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 50, borderRadius: 5, marginTop: -50,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },

                                }}>
                                    <View style={{ flex: 0.4, }}>
                                        <View style={{ justifyContent: 'center', marginTop: -5 }}>
                                            <View style={{ marginTop: 20, alignItems: 'center', marginLeft: -175 }}>
                                                <Text style={{ color: '#C0C0C0', marginHorizontal: 20, fontSize: 18, fontWeight: 'bold' }}>85 LKR per GB</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View></View>


                            <View style={{ flex: 1.7, }}>
                                <View style={{
                                    flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 95, borderRadius: 20, marginTop: -40,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                }}>
                                    <TouchableOpacity>
                                        <View style={{ flex: 1.4, }}>
                                            <View style={{ justifyContent: 'center', marginTop: 15 }}>
                                                <View style={{ marginTop: 2, alignItems: 'center' }}>
                                                    <Text style={{ color: '#009eff', marginHorizontal: 20, fontSize: 40, marginLeft: -130 }}>5.0 GB</Text>

                                                </View>

                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10, marginLeft: 150, marginTop: -60 }}>LKR 425 + TAX</Text>
                                                </View>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 15, color: '#A49591', marginLeft: 140, marginTop: -30, marginBottom: 20 }}>(Valid for 60 days)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>


                            <View style={{ flex: 1.7, }}>

                                <View style={{
                                    flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 130, borderRadius: 20, marginTop: -75,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,

                                }}>
                                    <TouchableOpacity>
                                        <View style={{ flex: 1.4, }}>

                                            <View style={{ justifyContent: 'center', marginTop: 15 }}>

                                                <View style={{ marginTop: 2, alignItems: 'center' }}>
                                                    <Text style={{ color: '#009eff', marginHorizontal: 20, fontSize: 40, marginLeft: -130 }}>7.0 GB</Text>
                                                </View>

                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10, marginLeft: 150, marginTop: -60 }}>LKR 595 + TAX</Text>
                                                </View>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 15, color: '#A49591', marginLeft: 140, marginTop: -30, marginBottom: 20 }}>(Valid for 60 days)</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flex: 1.7, }}>
                                <View style={{
                                    flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: -40, borderRadius: 5, marginTop: -120,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },

                                }}>
                                    <View style={{ flex: 0.4, }}>
                                        <View style={{ justifyContent: 'center', marginTop: -5 }}>
                                            <View style={{ marginTop: 20, alignItems: 'center', marginLeft: -175 }}>
                                                <Text style={{ color: '#C0C0C0', marginHorizontal: 20, fontSize: 18, fontWeight: 'bold' }}>75 LKR per GB</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View></View>


                            <View style={{ flex: 1.7, }}>
                                <View style={{
                                    flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 95, borderRadius: 20, marginTop: -60,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                }}>
                                    <TouchableOpacity>
                                        <View style={{ flex: 1.4, }}>
                                            <View style={{ justifyContent: 'center', marginTop: 15 }}>
                                                <View style={{ marginTop: 2, alignItems: 'center' }}>
                                                    <Text style={{ color: '#009eff', marginHorizontal: 20, fontSize: 40, marginLeft: -130 }}>20.0 GB</Text>

                                                </View>

                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10, marginLeft: 150, marginTop: -60 }}>LKR 1500 + TAX</Text>
                                                </View>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 15, color: '#A49591', marginLeft: 140, marginTop: -30, marginBottom: 20 }}>(Valid for 60 days)</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>


                            <View style={{ flex: 1.7, }}>

                                <View style={{
                                    flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 130, borderRadius: 20, marginTop: -75,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,

                                }}>
                                    <TouchableOpacity>
                                        <View style={{ flex: 1.4, }}>

                                            <View style={{ justifyContent: 'center', marginTop: 15 }}>

                                                <View style={{ marginTop: 2, alignItems: 'center' }}>
                                                    <Text style={{ color: '#009eff', marginHorizontal: 20, fontSize: 40, marginLeft: -130 }}>30.0 GB</Text>
                                                </View>

                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10, marginLeft: 150, marginTop: -60 }}>LKR 2250 + TAX</Text>
                                                </View>
                                                <View style={{ flex: 2 }}>
                                                    <Text style={{ fontSize: 15, color: '#A49591', marginLeft: 140, marginTop: -30, marginBottom: 20 }}>(Valid for 60 days)</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>





                            <View style={{ flex: 0.2, }}>
                                <View style={{
                                    borderBottomColor: '#C0C0C0',
                                    borderBottomWidth: 1,
                                    marginTop: -100
                                }}
                                />
                                <View style={{ flex: 0.4, marginTop: 10, backgroundColor: '#ffffff' }}>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                                        <View style={{ flex: 1, height: 50, backgroundColor: '#009eff', paddingLeft: 5, borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#009eff" }}>
                                            <TouchableOpacity>
                                                <Text style={{ color: "#ffffff", fontSize: 17 }}>Pay Now</Text>

                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 1, height: 50, backgroundColor: '#009eff', marginLeft: 5, borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#009eff" }}>
                                            <TouchableOpacity onPress={this.validateFields}>
                                                <Text style={{ color: "#ffffff", fontSize: 17 }}>Add Bill</Text>

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>


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


});
export default AddMoreData;