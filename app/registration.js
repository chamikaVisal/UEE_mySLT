import { Root } from "native-base";
import React, { Component, useRef } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, AppRegistry, ScrollView, Dimensions, TextInput, Modal } from 'react-native'
import { CurrentRenderContext } from '@react-navigation/native';
import { Container, Header, Content, Text, Button, Toast } from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'




class registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fnameModalshow: false,
            lnameModalshow: false,
            emailModalshow: false,
            mobnoModalshow: false,
            broadbandunModalshow: false,
            nicModalshow: false,
            passwordModalshow: false,


            firstname: '',
            lastname: '',
            email: '',
            mobilenumber: '',
            bbusername: '',
            nic: '',
            pw: '',
            confirmpw: '',
            showToast: false
        };
    }
    updateValue(text, field) {

        if (field == 'firstname') {
            this.setState({
                firstname: text
            });
        }
        else if (field == 'lastname') {
            this.setState({
                lastname: text
            });
        }
        else if (field == 'email') {
            this.setState({
                email: text
            });
        }
        else if (field == 'mobilenumber') {
            this.setState({
                mobilenumber: text
            });
        }

        else if (field == 'bbusername') {
            this.setState({
                bbusername: text
            });
        }
        else if (field == 'nic') {
            this.setState({
                nic: text
            });
        }
        else if (field == 'pw') {
            this.setState({
                pw: text
            });
        }
        else if (field == 'confirmpw') {
            this.setState({
                confirmpw: text
            });
        }
    }
    validateFields = () => {


        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regPhone = /^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;
        console.log("fname " + this.state.firstname)

        if (this.state.firstname === "") {
            this.setState({
                fnameModalshow: true
            });
        }
        else if (this.state.lastname === "") {

            this.setState({
                lnameModalshow: true
            });
        }
        else if (this.state.email === "" || !regEmail.test(this.state.email)) {

            this.setState({
                emailModalshow: true
            });
        }
        else if (this.state.mobilenumber === "" || !regPhone.test(this.state.mobilenumber)) {
            this.setState({
                mobnoModalshow: true
            });
        }
        else {
            CurrentRenderContext.scroll.scrollTo({ x: 400 })
        }
    }
    validateFieldsnext = () => {


        if (this.state.bbusername === "") {
            this.setState({
                broadbandunModalshow: true
            });
        }
        else if (this.state.nic === "") {

            this.setState({
                nicModalshow: true
            });
        }
        else if (this.state.pw != this.state.confirmpw || this.state.pw === "" || this.state.confirmpw === "") {

            this.setState({
                passwordModalshow: true
            });
        }

        else {
            Toast.show({
                text: "Successfully Registered !",
                position: 'bottom',
                textStyle: { fontWeight: 'bold' },
                duration: 4000,
                style: { backgroundColor: "#00ff80", height: 80, margin: 15, borderRadius: 20, borderWidth: 1, borderColor: '#ffffff' },
                buttonText: "Okay",
                buttonStyle: { backgroundColor: "#ffffff", justifyContent: 'center', alignSelf: 'center' },
                buttonTextStyle: { color: "#00ff80" },

            })
            this.props.navigation.navigate("MYSLT", alert("successfully Registered"))
        }
    }

    render() {
        let screenwidth = Dimensions.get('window').width;
        let screeheight = Dimensions.get('window').height;
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 0.18, backgroundColor: '#ffffff' }}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 60 }}>
                            <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                            <Text style={{ fontSize: 28, color: '#009eff' }}>Create Your Account Here</Text>
                        </View>

                    </View>

                </View>
                <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}
                    ref={(node) => CurrentRenderContext.scroll = node}
                    style={{
                        flex: 8, backgroundColor: '#ffffff'

                    }}>
                    <View style={{
                        backgroundColor: '#ffffff',
                        flex: 1,
                        marginTop: 20,
                        width: screenwidth - 35,



                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        marginLeft: 15, marginBottom: 20, marginRight: 20
                    }}>
                        <KeyboardAwareScrollView>
                            <View style={{ flex: 3, backgroundColor: '#fffffff' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                                    <Text style={{ color: '#00FF00', fontSize: 24 }}>Step 1</Text>
                                    <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 20 }}>Basic Information</Text>

                            </View>


                            <View style={{ margin: 10, marginTop: 25 }}>

                                <View >
                                    <Text style={{ color: '#009eff', marginHorizontal: 20, }}>First Name</Text>
                                    <TextInput
                                        onFocus={this.onFocus}
                                        autoFocus={false}
                                        placeholder="Katie"
                                        style={styles.textInput}
                                        placeholderTextColor="#C0C0C0"
                                        onChangeText={(text) => this.updateValue(text, 'firstname')}
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Last Name</Text>
                                    <TextInput style={{}}
                                        autoFocus={false}
                                        placeholder="Shore"
                                        style={styles.textInput}
                                        placeholderTextColor="#C0C0C0"
                                        onChangeText={(text) => this.updateValue(text, 'lastname')}
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Email</Text>
                                    <TextInput
                                        onFocus={this.onFocus}
                                        autoFocus={false}
                                        placeholder="katie@gmail.com"
                                        style={styles.textInput}
                                        placeholderTextColor="#C0C0C0"
                                        onChangeText={(text) => this.updateValue(text, 'email')}
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Mobile Number</Text>
                                    <TextInput
                                        autoFocus={false}
                                        placeholder="0717291782"
                                        style={styles.textInput}
                                        placeholderTextColor="#C0C0C0"
                                        onChangeText={(text) => this.updateValue(text, 'mobilenumber')}
                                    />

                                </View>
                                {/* MODAL first name------------------------------------------------------------------------------------------------------------------- */}
                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.fnameModalshow}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                                <TouchableOpacity
                                                    onPress={() => { this.setState({ fnameModalshow: false }) }}
                                                >
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>First Name</Text>
                                                        </View>
                                                        <View style={{ flex: 1 }}>
                                                            <Text >X</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#d3d3d3',
                                                        borderBottomWidth: 1,
                                                        padding: 10
                                                    }}
                                                ></View>
                                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                                    <Image
                                                        style={{ width: 60, height: 60 }}
                                                        source={require('../assets/warning.gif')}
                                                    />
                                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.firstname}</Text>
                                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your first name is invalid !</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={() => { this.setState({ fnameModalshow: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                                {/* MODAL last name------------------------------------------------------------------------------------------------------------------- */}
                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.lnameModalshow}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                                <TouchableOpacity
                                                    onPress={() => { this.setState({ lnameModalshow: false }) }}
                                                >
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Last Name</Text>
                                                        </View>
                                                        <View style={{ flex: 1 }}>
                                                            <Text >X</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#d3d3d3',
                                                        borderBottomWidth: 1,
                                                        padding: 10
                                                    }}
                                                ></View>
                                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                                    <Image
                                                        style={{ width: 60, height: 60 }}
                                                        source={require('../assets/warning.gif')}
                                                    />
                                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.lastname}</Text>
                                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your last name is invalid !</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={() => { this.setState({ lnameModalshow: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                                {/* MODAL email------------------------------------------------------------------------------------------------------------------- */}
                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.emailModalshow}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                                <TouchableOpacity
                                                    onPress={() => { this.setState({ emailModalshow: false }) }}
                                                >
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Email</Text>
                                                        </View>
                                                        <View style={{ flex: 1 }}>
                                                            <Text >X</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#d3d3d3',
                                                        borderBottomWidth: 1,
                                                        padding: 10
                                                    }}
                                                ></View>
                                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                                    <Image
                                                        style={{ width: 60, height: 60 }}
                                                        source={require('../assets/warning.gif')}
                                                    />
                                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.email}</Text>
                                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your email is invalid !</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={() => { this.setState({ emailModalshow: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                                {/* MODAL mobno ------------------------------------------------------------------------------------------------------------------- */}
                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.mobnoModalshow}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                                <TouchableOpacity
                                                    onPress={() => { this.setState({ mobnoModalshow: false }) }}
                                                >
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Mobile Number</Text>
                                                        </View>
                                                        <View style={{ flex: 1 }}>
                                                            <Text >X</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#d3d3d3',
                                                        borderBottomWidth: 1,
                                                        padding: 10
                                                    }}
                                                ></View>
                                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                                    <Image
                                                        style={{ width: 60, height: 60 }}
                                                        source={require('../assets/warning.gif')}
                                                    />
                                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.mobilenumber}</Text>
                                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your Mobile Number is Invalid !</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={() => { this.setState({ mobnoModalshow: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                                {/*  MODAL bb username ------------------------------------------------------------------------------------------------------------------- */}
                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.broadbandunModalshow}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                                <TouchableOpacity
                                                    onPress={() => { this.setState({ broadbandunModalshow: false }) }}
                                                >
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Broadband Username</Text>
                                                        </View>
                                                        <View style={{ flex: 1 }}>
                                                            <Text >X</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#d3d3d3',
                                                        borderBottomWidth: 1,
                                                        padding: 10
                                                    }}
                                                ></View>
                                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                                    <Image
                                                        style={{ width: 60, height: 60 }}
                                                        source={require('../assets/warning.gif')}
                                                    />
                                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.bbusername}</Text>
                                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your Broadband Username is Invalid !</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={() => { this.setState({ broadbandunModalshow: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                                {/* MODAL NIC------------------------------------------------------------------------------------------------------------------- */}
                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.nicModalshow}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                                <TouchableOpacity
                                                    onPress={() => { this.setState({ nicModalshow: false }) }}
                                                >
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>NIC</Text>
                                                        </View>
                                                        <View style={{ flex: 1 }}>
                                                            <Text >X</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#d3d3d3',
                                                        borderBottomWidth: 1,
                                                        padding: 10
                                                    }}
                                                ></View>
                                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                                    <Image
                                                        style={{ width: 60, height: 60 }}
                                                        source={require('../assets/warning.gif')}
                                                    />
                                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.nic}</Text>
                                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your NIC is Invalid !</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={() => { this.setState({ nicModalshow: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                                {/* MODAL password------------------------------------------------------------------------------------------------------------------- */}
                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.passwordModalshow}>
                                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                                <TouchableOpacity
                                                    onPress={() => { this.setState({ passwordModalshow: false }) }}
                                                >
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Password</Text>
                                                        </View>
                                                        <View style={{ flex: 1 }}>
                                                            <Text >X</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#d3d3d3',
                                                        borderBottomWidth: 1,
                                                        padding: 10
                                                    }}
                                                ></View>
                                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                                    <Image
                                                        style={{ width: 60, height: 60 }}
                                                        source={require('../assets/warning.gif')}
                                                    />
                                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.mobilenumber}</Text>
                                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your passwords do not match !</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={() => { this.setState({ passwordModalshow: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}

                                <View style={{ margin: 10, marginTop: 25 }}>

                                    <View >
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>First Name</Text>
                                        <TextInput
                                            onFocus={this.onFocus}
                                            autoFocus={false}
                                            placeholder="Katie"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            onChangeText={(text) => this.updateValue(text, 'firstname')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Last Name</Text>
                                        <TextInput style={{}}
                                            autoFocus={false}
                                            placeholder="Shore"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            onChangeText={(text) => this.updateValue(text, 'lastname')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Email</Text>
                                        <TextInput
                                            onFocus={this.onFocus}
                                            autoFocus={false}
                                            placeholder="katie@gmail.com"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            onChangeText={(text) => this.updateValue(text, 'email')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Mobile Number</Text>
                                        <TextInput
                                            autoFocus={false}
                                            placeholder="0717291782"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            onChangeText={(text) => this.updateValue(text, 'mobilenumber')}
                                        />
                                    </View>


                                </View>

                            </View>
                            <View style={{ flex: 1, }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 30,
                                        backgroundColor: '#009eff',
                                        borderWidth: 1,
                                        borderColor: '#C0C0C0',
                                    }}>

                                    </View>
                                    <View style={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 30,
                                        backgroundColor: '#ffffff',
                                        borderWidth: 1,
                                        borderColor: '#C0C0C0',
                                        marginLeft: 10
                                    }}>

                                    </View>


                                </View>
                                <View style={{ marginTop: 10 }}>

                                    {/* <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: 400 }) }}> */}
                                    <TouchableOpacity onPress={this.validateFields}>
                                        <View style={{ ...styles.button, backgroundColor: '#009eff', borderWidth: 1, borderColor: 'white', opacity: this.buttonOpacity, }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Next</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>

                    <View style={{
                        backgroundColor: '#ffffff',
                        flex: 1,
                        marginTop: 20,
                        width: screenwidth - 35,



                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        marginLeft: 5, marginBottom: 20, marginRight: 15
                    }}>
                        <KeyboardAwareScrollView>
                            <View style={{ flex: 3, backgroundColor: '#fffffff' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                                    <Text style={{ color: '#00FF00', fontSize: 24 }}>Step 2</Text>
                                    <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 20 }}>Credentials</Text>

                                </View>
                                <View style={{ margin: 10, marginTop: 25 }}>

                                    <View >
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Broadband Username</Text>
                                        <TextInput
                                            onFocus={this.onFocus}
                                            autoFocus={false}
                                            placeholder="BU145236"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            onChangeText={(text) => this.updateValue(text, 'bbusername')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>NIC</Text>
                                        <TextInput style={{}}
                                            autoFocus={false}
                                            placeholder="962061540V"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            onChangeText={(text) => this.updateValue(text, 'nic')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Portal/App Password</Text>
                                        <TextInput
                                            onFocus={this.onFocus}
                                            autoFocus={false}
                                            placeholder="*********"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            secureTextEntry={true}
                                            onChangeText={(text) => this.updateValue(text, 'pw')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Confirm Password</Text>
                                        <TextInput
                                            autoFocus={false}
                                            placeholder="*********"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            secureTextEntry={true}
                                            onChangeText={(text) => this.updateValue(text, 'confirmpw')}
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={{ flex: 1, }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{

                                        height: 20,
                                        width: 20,
                                        borderRadius: 30,
                                        backgroundColor: '#ffffff',
                                        borderWidth: 1,
                                        borderColor: '#C0C0C0',
                                    }}>

                                    </View>
                                    <View style={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 30,
                                        backgroundColor: '#009eff',
                                        borderWidth: 1,
                                        borderColor: '#C0C0C0',
                                        marginLeft: 10
                                    }}>

                                    </View>


                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity onPress={this.validateFieldsnext}>
                                        <View style={{ ...styles.button, backgroundColor: '#009eff', borderWidth: 1, borderColor: 'white', opacity: this.buttonOpacity, }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Register</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </ScrollView>





                {/* MODAL first name------------------------------------------------------------------------------------------------------------------- */}
                <Modal style={{ flex: 1 }}
                    transparent={true}
                    visible={this.state.fnameModalshow}>
                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ fnameModalshow: false }) }}
                                >
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>First Name</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text >X</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        borderBottomColor: '#d3d3d3',
                                        borderBottomWidth: 1,
                                        padding: 10
                                    }}
                                ></View>
                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                    <Image
                                        style={{ width: 60, height: 60 }}
                                        source={require('../assets/warning.gif')}
                                    />
                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.firstname}</Text>
                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your first name is invalid !</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={() => { this.setState({ fnameModalshow: false }) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                {/* MODAL last name------------------------------------------------------------------------------------------------------------------- */}
                <Modal style={{ flex: 1 }}
                    transparent={true}
                    visible={this.state.lnameModalshow}>
                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ lnameModalshow: false }) }}
                                >
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Last Name</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text >X</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        borderBottomColor: '#d3d3d3',
                                        borderBottomWidth: 1,
                                        padding: 10
                                    }}
                                ></View>
                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                    <Image
                                        style={{ width: 60, height: 60 }}
                                        source={require('../assets/warning.gif')}
                                    />
                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.lastname}</Text>
                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your last name is invalid !</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={() => { this.setState({ lnameModalshow: false }) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                {/* MODAL email------------------------------------------------------------------------------------------------------------------- */}
                <Modal style={{ flex: 1 }}
                    transparent={true}
                    visible={this.state.emailModalshow}>
                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ emailModalshow: false }) }}
                                >
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Email</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text >X</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        borderBottomColor: '#d3d3d3',
                                        borderBottomWidth: 1,
                                        padding: 10
                                    }}
                                ></View>
                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                    <Image
                                        style={{ width: 60, height: 60 }}
                                        source={require('../assets/warning.gif')}
                                    />
                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.email}</Text>
                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your email is invalid !</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={() => { this.setState({ emailModalshow: false }) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                {/* MODAL mobno ------------------------------------------------------------------------------------------------------------------- */}
                <Modal style={{ flex: 1 }}
                    transparent={true}
                    visible={this.state.mobnoModalshow}>
                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ mobnoModalshow: false }) }}
                                >
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Mobile Number</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text >X</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        borderBottomColor: '#d3d3d3',
                                        borderBottomWidth: 1,
                                        padding: 10
                                    }}
                                ></View>
                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                    <Image
                                        style={{ width: 60, height: 60 }}
                                        source={require('../assets/warning.gif')}
                                    />
                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.mobilenumber}</Text>
                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your Mobile Number is Invalid !</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={() => { this.setState({ mobnoModalshow: false }) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                {/*  MODAL bb username ------------------------------------------------------------------------------------------------------------------- */}
                <Modal style={{ flex: 1 }}
                    transparent={true}
                    visible={this.state.broadbandunModalshow}>
                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ broadbandunModalshow: false }) }}
                                >
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Broadband Username</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text >X</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        borderBottomColor: '#d3d3d3',
                                        borderBottomWidth: 1,
                                        padding: 10
                                    }}
                                ></View>
                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                    <Image
                                        style={{ width: 60, height: 60 }}
                                        source={require('../assets/warning.gif')}
                                    />
                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.bbusername}</Text>
                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your Broadband Username is Invalid !</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={() => { this.setState({ broadbandunModalshow: false }) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                {/* MODAL NIC------------------------------------------------------------------------------------------------------------------- */}
                <Modal style={{ flex: 1 }}
                    transparent={true}
                    visible={this.state.nicModalshow}>
                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ nicModalshow: false }) }}
                                >
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>NIC</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text >X</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        borderBottomColor: '#d3d3d3',
                                        borderBottomWidth: 1,
                                        padding: 10
                                    }}
                                ></View>
                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                    <Image
                                        style={{ width: 60, height: 60 }}
                                        source={require('../assets/warning.gif')}
                                    />
                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.nic}</Text>
                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your NIC is Invalid !</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={() => { this.setState({ nicModalshow: false }) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}
                {/* MODAL password------------------------------------------------------------------------------------------------------------------- */}
                <Modal style={{ flex: 1 }}
                    transparent={true}
                    visible={this.state.passwordModalshow}>
                    <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                            <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ passwordModalshow: false }) }}
                                >
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>Password</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text >X</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        borderBottomColor: '#d3d3d3',
                                        borderBottomWidth: 1,
                                        padding: 10
                                    }}
                                ></View>
                                <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                    <Image
                                        style={{ width: 60, height: 60 }}
                                        source={require('../assets/warning.gif')}
                                    />
                                    <Text style={{ fontSize: 14, marginTop: 10, color: '#4c4c4c' }}>{this.state.mobilenumber}</Text>
                                    <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your passwords do not match !</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={() => { this.setState({ passwordModalshow: false }) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* MODAL------------------------------------------------------------------------------------------------------------------- */}

            </View>

        );
    }
}
export default registration;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
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

})

