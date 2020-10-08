import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Alert, TextInput, Modal, KeyboardAvoidingView, } from 'react-native';
import { Container, Header, Content, Text, Button, Toast } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


class AddNewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pwModalshow: false,


            showToast: false
        };
    }

    validateFields = () => {

        Toast.show({
            text: "User added successfully !",
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

                {/* Create your PasswordchangeVisal UI's here -- PasswordchangeVisal */}

                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 60 }}>
                            <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                            <Text style={{ fontSize: 28, color: '#009eff' }}>ADD USER</Text>


                        </View>

                    </View>

                    <View style={{
                        flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 80, borderRadius: 20, marginTop: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <View style={{ flex: 1, }}>
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Enter the username and the portal / app</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>password of the user to add another</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>user account</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={{
                                        width: 120,
                                        height: 120,
                                        marginTop: 20
                                    }}
                                    source={require('../assets/adduserhome.png')}
                                />
                            </View>

                        </View>

                        <View style={{ flex: 2, }}>
                            <View style={{
                                flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 50, borderRadius: 20, marginTop: 60,
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

                                    <View style={{ marginTop: 35 }}>
                                        <TextInput style={{
                                            alignSelf: 'center',
                                            alignContent: 'center',
                                            alignItems: 'center'
                                        }}
                                            autoFocus={false}
                                            placeholder="Username"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            secureTextEntry={true}

                                        />
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <TextInput style={{}}
                                            autoFocus={false}
                                            placeholder="Portal / app password"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            secureTextEntry={true}
                                        />
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        <TouchableOpacity onPress={this.validateFields}>
                                            <View style={{ ...styles.buttonmain, backgroundColor: '#009eff', }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Add user</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </ScrollView>
                            </View>

                        </View>


                    </View>
                </View>

                {/* Create your PasswordchangeVisal UI's here -- PasswordchangeVisal */}

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


});
export default AddNewUser;