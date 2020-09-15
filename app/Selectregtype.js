import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert, TextInput } from 'react-native';

// import { Image } from 'native-base'

export default class Selectregtype extends Component {
    render() {
        return (
            <View
                style={{ flex: 1 }}
            >
                <Image
                    style={{ height: '100%', width: '100%' }}
                    source={require('../assets/regselect.png')} />
                <View style={{ flex: 3, position: 'absolute', left: 80, right: 80, top: 80, }}>
                    <View>
                        <Image
                            source={require('../assets/logo_slt.png')}
                            position='absolute'
                            style={{ height: 250, width: 250, }}
                        />
                    </View>
                    <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', top: 230 }}>
                        <Text style={{ color: '#ffffff', fontSize: 24 }}>Sri Lanka Telecom</Text>
                        <Text style={{ color: '#ffffff', fontSize: 24 }}>MySLT</Text>

                    </View>



                </View>
                <View style={{ alignItems: 'center', position: "absolute", bottom: 25, left: 40, right: 40 }}>
                    <Text style={{ color: '#009eff', fontSize: 24, }}>- Select Account Type -</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RegPage")}>
                        <View style={{
                            ...styles.button, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,

                        }} >

                            <Text style={{ fontSize: 20, color: '#009eff' }}>SLT Account</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RegPage")}>
                        <View style={{
                            ...styles.button, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,

                        }} >

                            <Text style={{ fontSize: 20, color: '#009eff' }}>Broadband Account</Text>

                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height: 70,
        width: 350,
        marginHorizontal: 20,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderColor: '#009eff'
    },

})
