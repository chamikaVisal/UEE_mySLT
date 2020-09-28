import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert, Modal, TextInput } from 'react-native';
import { Container, Header, Content, Button, Toast } from "native-base";


class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1show: false,
            modal2show: false
        };
    }

    showToast = () => {
        Toast.show({
            text: "Password Successfully Reseted !",
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
                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 45 }}>
                            <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                            <Text style={{ fontSize: 28, marginTop:3, color: '#009eff' }}>ACCOUNT SETTING</Text>

                        </View>

                    </View>
                    
                    <View style={{
                        flex: 4, backgroundColor: '#ebf8ff', marginLeft: 20, marginRight: 20, marginBottom: 80, borderRadius: 20, marginTop: -30,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                       {/* buttons start*/}
{/* button1 */}         
                        <View style={{ flex: 0.5, }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate("AddNewUser")}>
                            <View style={{
                                flex: 4, backgroundColor: '#faf8f2', justifyContent: "center" ,marginLeft: 20, marginRight: 20, marginBottom: 50, borderRadius: 20, marginTop: 10,
                                paddingBottom: 120,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>
                            {/* icon for button 01 */}
                            <View
                            style={{
                                flex: 2,
                                
                            }}>
                                
                                <Image
                                    style={{ 
                                        width: 70, 
                                        height: 70,
                                        marginTop: 25,
                                        marginLeft: 10 }}
                                    source={require('../assets/user_add.png')}>

                                </Image>
                                    
                            
                            {/* icon for button 01 */}
                            
                            <View
                            style={{
                                flexDirection: "column",
                                flex: 2,
                                marginLeft: 100,
                                marginTop: -53,
                                
                            }}>
                            
                            <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20
                            }}>Add New User</Text>
                            </View>
                            </View>
                           </View>
                           </TouchableOpacity>
                        </View>
{/* button1 */}
{/* button2 */}
                        <View style={{ flex: 0.5, }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate("ContactInfoChange")}>
                            <View style={{
                                flex: 4, backgroundColor: '#faf8f2', justifyContent: "center" ,marginLeft: 20, marginRight: 20, marginBottom: 50, borderRadius: 20, marginTop: 10,
                                paddingBottom: 120,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>
                            {/* icon for button 02 */}
                            <View
                            style={{
                                flex: 2,
                                
                            }}>
                                <Image
                                    style={{ 
                                        width: 70, 
                                        height: 70,
                                        marginTop: 25,
                                        marginLeft: 10 }}
                                    source={require('../assets/free-mobile-phone-icon-760-thumb.png')}>

                                </Image>
                                    
                            
                            {/* icon for button 02 */}
                            <View
                            style={{
                                flexDirection: "column",
                                flex: 2,
                                marginLeft: 100,
                                marginTop: -65,
                                
                            }}>
                            <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20
                            }}>Change Contact Information</Text>
                            </View>
                            </View>
                           </View>
                           </TouchableOpacity>
                        </View>
{/* button2 */}
{/* button3 */}
                        <View style={{ flex: 0.5, }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate("ContactInfoChange")}>
                            <View style={{
                               flex: 4, backgroundColor: '#faf8f2', justifyContent: "center" ,marginLeft: 20, marginRight: 20, marginBottom: 50, borderRadius: 20, marginTop: 10,
                               paddingBottom: 120,
                               shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>
                            {/* icon for button 03 */}
                            <View
                            style={{
                                flex: 2,
                                
                            }}>
                                <Image
                                    style={{ 
                                        width: 70, 
                                        height: 70,
                                        marginTop: 25,
                                        marginLeft: 10 }}
                                    source={require('../assets/broadband.jpg')}>

                                </Image>
                                    
                            
                            {/* icon for button 03 */}
                            <View
                            style={{
                                flexDirection: "column",
                                flex: 2,
                                marginLeft: 100,
                                marginTop: -65,
                                
                            }}>
                            <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20
                            }}>Change Broadband Information</Text>
                            </View>
                            </View>
                           </View>
                           </TouchableOpacity>
                        </View>
{/* button3 */}
{/* button4 */}
                        <View style={{ flex: 0.5, }}>
                        <TouchableOpacity onPress={() => { this.setState({ modal1show: true }) }}>
                            <View style={{
                                flex: 4, backgroundColor: '#faf8f2', justifyContent: "center" ,marginLeft: 20, marginRight: 20, marginBottom: 50, borderRadius: 20, marginTop: 10,
                                paddingBottom: 120,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>
                            {/* icon for button 04 */}
                            <View
                            style={{
                                flex: 2,
                                
                            }}>
                                <Image
                                    style={{ 
                                        width: 70, 
                                        height: 70,
                                        marginTop: 25,
                                        marginLeft: 10 }}
                                    source={require('../assets/password.jpg')}>

                                </Image>
                                    
                            
                            {/* icon for button 04 */}
                            <View
                            style={{
                                flexDirection: "column",
                                flex: 2,
                                marginLeft: 100,
                                marginTop: -65,
                                
                            }}>
                            <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20
                            }}>Change Portal/app Password</Text>
                            </View>
                            </View>
                           </View>
                           </TouchableOpacity>
                        </View>
{/* button4 */}
                {/* buttons end */}

                {/* MODAL change password--------THIS DOES NOT EFFECT YOUR CODE. YOU CAN JUST ASSUME THIS IS NOT A PART OF ACCOUNT SETTINGS */}

                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.modal1show}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                        <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340, }}>

                                            <View style={{ flexDirection: 'row', }}>
                                                <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Change password</Text>
                                                </View>
                                            </View>

                                            <View
                                                style={{
                                                    borderBottomColor: '#d3d3d3',
                                                    borderBottomWidth: 1,
                                                    padding: 10
                                                }}
                                            ></View>
                                            <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 20, marginBottom: 10 }}>
                                                <TextInput
                                                    onFocus={this.onFocus}
                                                    autoFocus={false}
                                                    placeholder="                Enter current password                  "
                                                    style={styles.textInput}
                                                    placeholderTextColor="#C0C0C0"
                                                    secureTextEntry={true}

                                                />
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                                                <TouchableOpacity style={{ height: 45, width: 100, backgroundColor: '#ffffff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', borderWidth: 1 }}
                                                    onPress={() => { this.setState({ modal1show: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: 'silver' }}>Cancel</Text>
                                                    </View>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: 45, width: 100, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}
                                                    onPress={() => { this.setState({ modal1show: false, modal2show: true }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>Next</Text>
                                                    </View>
                                                </TouchableOpacity>

                                            </View>


                                        </View>

                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                                {/* MODAL new password--------THIS DOES NOT EFFECT YOUR CODE. YOU CAN JUST ASSUME THIS IS NOT A PART OF ACCOUNT SETTINGS */}

                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.modal2show}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                        <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340, }}>

                                            <View style={{ flexDirection: 'row', }}>
                                                <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Change password</Text>
                                                </View>
                                            </View>

                                            <View
                                                style={{
                                                    borderBottomColor: '#d3d3d3',
                                                    borderBottomWidth: 1,
                                                    padding: 10
                                                }}
                                            ></View>
                                            <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 20, marginBottom: 10 }}>
                                                <TextInput
                                                    onFocus={this.onFocus}
                                                    autoFocus={false}
                                                    placeholder="               Enter new password                 "
                                                    style={styles.textInput}
                                                    placeholderTextColor="#C0C0C0"
                                                    secureTextEntry={true}

                                                />
                                                <TextInput
                                                    onFocus={this.onFocus}
                                                    autoFocus={false}
                                                    placeholder="            Re-enter new password              "
                                                    style={styles.textInput}
                                                    placeholderTextColor="#C0C0C0"
                                                    secureTextEntry={true}

                                                />
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                                                <TouchableOpacity style={{ height: 45, width: 100, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}
                                                    onPress={() => { this.setState({ modal2show: false }, this.showToast) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>Confirm</Text>
                                                    </View>
                                                </TouchableOpacity>

                                            </View>


                                        </View>

                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}

                    </View>
                </View>


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
export default AccountSettings;