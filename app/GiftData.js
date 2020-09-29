import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Alert, TextInput, Modal, KeyboardAvoidingView, } from 'react-native';
import { Container, Header, Content, Text, Button, Toast } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
// import { Dropdown } from 'react-native-material-dropdown';

class GiftData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pwModalshow: false,


            showToast: false
        };
    }
    
    
    validateFields = () => {

            Toast.show({
                text: "Gift data sent successfully !",
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
                            <Text style={{ fontSize: 28, color: '#009eff' }}>GIFT DATA</Text>
                            

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
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Enter the username of the person to</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>whom you wish to gift data!</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={{ 
                                        width: 150, 
                                        height: 150,
                                        marginTop: 10 }}
                                    source={require('../assets/gift.png')}
                                />
                            </View>

                        </View>
                        
                        <View style={{ flex: 2, }}>
                            <View style={{
                                flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20, marginTop: 40,
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
                                    
                                    
                                    <View style={{ marginTop: 10 }}>
                                        <TextInput style={{}}
                                            autoFocus={false}
                                            placeholder="Receiver's username"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            secureTextEntry={true}
                                        />
                                    </View>

                                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>Ensure the username is correct, as this</Text>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>transaction cannot be reversed.</Text>
                                    </View>
{/* start - select data package box */}
                                    <View style={{
                                            flex: 4, backgroundColor: '#faf8f2', marginLeft: 10, marginRight: 10, marginBottom: 50, borderRadius: 20, marginTop: 10,
                                            shadowColor: "#ffffff",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,

                                            elevation: 5,

                                    }}>
                                        
                                        <View style={{flex: 4, height: 110, flexDirection: 'column' }}>
                                            
                                            <Text style={{
                                                marginLeft: 10,
                                                marginTop: 20
                                            }}>Enter a data amount:</Text>


                                                    <View style={{ marginTop: -30, marginHorizontal: 100, marginRight: 25, marginLeft: 145 }}>
                                                        <TextInput style={{}}
                                                            autoFocus={false}
                                                            placeholder="Data Amount"
                                                            style={styles.textInputgb}
                                                            placeholderTextColor="#C0C0C0"
                                                            secureTextEntry={true}
                                                        />
                                                    </View>

                                            <View style={{flex: 1, marginTop: -30, marginLeft: 270}}>
                                            <Text style={{
                                                fontWeight: 'bold'
                                            }}>
                                                GB
                                            </Text>
                                            </View>
                                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("AddMoreData")}>
                                                    <View style={{ ...styles.buttonmain, backgroundColor: '#b8b6b2', marginHorizontal: 30, height: 40, marginTop: 20, marginBottom: 10}}>
                                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>View package details</Text>
                                                    </View>
                                                    </TouchableOpacity>

                                            </View>
                                    </View>
{/* end - select data package box */}
                                            <View style={{ marginTop: -10 }}>
                                                    <TouchableOpacity onPress={this.validateFields}>
                                                    <View style={{ ...styles.buttonmain, backgroundColor: '#009eff', marginTop: -25 }}>
                                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Send data</Text>
                                                    </View>
                                                    </TouchableOpacity>
                                            </View>

                                </ScrollView>
                            </View>

                        </View>


                    </View>
                </View>

                {/*  */}

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
    textInputgb: {
        height: 30,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: "#008ECC"

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
    dropdown: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
      }

});
export default GiftData;