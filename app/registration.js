import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, AppRegistry, ScrollView, Dimensions, TextInput } from 'react-native'

class registration extends Component {
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
                    ref={(node) => this.scroll = node}
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
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Last Name</Text>
                                    <TextInput style={{}}
                                        autoFocus={false}
                                        placeholder="Shore"
                                        style={styles.textInput}
                                        placeholderTextColor="#C0C0C0"
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
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Mobile Number</Text>
                                    <TextInput
                                        autoFocus={false}
                                        placeholder="0717291782"
                                        style={styles.textInput}
                                        placeholderTextColor="#C0C0C0"
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
                                <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: 400 }) }}>
                                    <View style={{ ...styles.button, backgroundColor: '#009eff', borderWidth: 1, borderColor: 'white', opacity: this.buttonOpacity, }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Next</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
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
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={{ color: '#009eff', marginHorizontal: 20, }}>NIC</Text>
                                    <TextInput style={{}}
                                        autoFocus={false}
                                        placeholder="962061540V"
                                        style={styles.textInput}
                                        placeholderTextColor="#C0C0C0"
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
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Confirm Password</Text>
                                    <TextInput
                                        autoFocus={false}
                                        placeholder="*********"
                                        style={styles.textInput}
                                        placeholderTextColor="#C0C0C0"
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
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("MYSLT", alert("successfully Registered"))}>
                                    <View style={{ ...styles.button, backgroundColor: '#009eff', borderWidth: 1, borderColor: 'white', opacity: this.buttonOpacity, }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Register</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </ScrollView>

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

