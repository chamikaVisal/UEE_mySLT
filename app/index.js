import React from 'react'
import { View, StyleSheet, Dimensions, TextInput, Modal } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Svg, { Image, Circle, ClipPath } from 'react-native-svg'
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State, TouchableOpacity } from 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationEvents } from 'react-navigation';
import { Container, Header, Content, Text, Button, Toast } from "native-base";

const { width, height } = Dimensions.get('window');

const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate,
    concat

} = Animated

function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);
}


class MYSLT extends React.Component {

    constructor() {

        super()
        this.state = {
            username: ''
        }
        this.state = {
            password: ''
        }


        this.buttonOpacity = new Value(1)
        this.onStateChange = event([
            {
                nativeEvent: ({ state }) => block([
                    cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 1, 0)))
                ])
            }
        ])


        this.onCloseState = event([
            {
                nativeEvent: ({ state }) => block([
                    cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 0, 1)))
                ])
            }
        ])
        this.buttonY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: Extrapolate.CLAMP
        })
        this.bgY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [-height / 3, 0],
            extrapolate: Extrapolate.CLAMP
        })
        this.logoY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [height / 3, 0],
            extrapolate: Extrapolate.CLAMP
        })
        this.textInputZindex = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, -1],
            extrapolate: Extrapolate.CLAMP
        })
        this.textInputY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 100],
            extrapolate: Extrapolate.CLAMP
        })
        this.textInputOpacity = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: Extrapolate.CLAMP
        })

        this.rotateCross = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [180, 360],
            extrapolate: Extrapolate.CLAMP
        })
        this.goup = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [-2 * height / 3, 0],
            extrapolate: Extrapolate.CLAMP
        })
    }


    updateValue(text, field) {
        console.log("awa!")
        console.log(this.state.username + "prev un")

        if (field == 'username') {
            this.setState({
                username: text

            });
            console.log(this.state.username + "after un")
        }
        else if (field == 'password') {
            this.setState({
                password: text
            });
        }

    }
    handlelogin = () => {


        console.log("indside handle login" + "username = " + this.state.username)
        if (this.state.username === 'user' || this.state.password === 'user') {
            Toast.show({
                text: "Login Successful !",
                position: 'bottom',
                textStyle: { fontWeight: 'bold' },
                duration: 4000,
                style: { backgroundColor: "#00ff80", height: 80, margin: 15, borderRadius: 20, borderWidth: 1, borderColor: '#ffffff' },
                buttonText: "Okay",
                buttonStyle: { backgroundColor: "#ffffff", justifyContent: 'center', alignSelf: 'center' },
                buttonTextStyle: { color: "#00ff80" },

            })
            this.setState({
                username: ''

            });
            this.setState({
                password: ''
            });

            this.props.navigation.navigate("MainUI")

        }
        else {
            Toast.show({
                text: "Login failed!",
                position: 'bottom',
                textStyle: { fontWeight: 'bold' },
                duration: 3000,
                style: { backgroundColor: "#FFCC00", height: 80, margin: 15, borderRadius: 20, borderWidth: 1, borderColor: '#ffffff' },
                buttonText: "Okay",
                buttonStyle: { backgroundColor: "#ffffff", justifyContent: 'center', alignSelf: 'center' },
                buttonTextStyle: { color: "#FFCC00" },

            })
        }
    }


    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>

                <Animated.View style={{ ...StyleSheet.absoluteFill, transform: [{ translateY: this.bgY }], position: 'absolute', }}>

                    <Svg height={height + 50} width={width}>
                        <ClipPath id="clip">
                            <Circle r={height + 50} cx={width / 2} />
                        </ClipPath>
                        <Image
                            href={require('../assets/bg.jpg')}
                            height={height + 50}
                            width={width}
                            preserveAspectRatio='xMIDYmid slice'
                            clipPath="url(#clip)"

                        />
                    </Svg>
                    <Animated.View style={{
                        position: 'absolute', alignSelf: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 80,
                        transform: [{ translateY: this.logoY }]
                    }}>
                        <Svg height={250} width={250}>
                            <Image
                                href={require('../assets/logo_slt.png')}
                                position='absolute'
                                height="100%"
                                width="100%"
                            />
                        </Svg>
                        <Text style={{ color: '#ffffff', fontSize: 24 }}>Sri Lanka Telecom</Text>
                        <Text style={{ color: '#ffffff', fontSize: 24 }}>MySLT</Text>

                    </Animated.View>

                </Animated.View>

                <View style={{ height: height / 3, justifyContent: 'center' }}>

                    <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate("Selectregtype")} >
                        <Animated.View style={{ ...styles.button, opacity: this.buttonOpacity, transform: [{ translateY: this.buttonY }] }}>

                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#009eff' }}>Register</Text>


                        </Animated.View>
                    </TapGestureHandler>

                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View style={{ ...styles.button, backgroundColor: '#009eff', borderWidth: 1, borderColor: 'white', opacity: this.buttonOpacity, transform: [{ translateY: this.buttonY }] }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Login</Text>
                        </Animated.View>
                    </TapGestureHandler>

                    <Animated.View style={{
                        height: height / 3 - 10, ...StyleSheet.absoluteFill, top: null, justifyContent: 'center',
                        zIndex: this.textInputZindex,
                        opacity: this.textInputOpacity,
                        transform: [{ translateY: this.textInputY }]
                    }} >

                        {/* login */}
                        <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                            <Animated.View style={styles.closeButton}>
                                <Animated.Text style={{ fontSize: 15, color: '#009eff', transform: [{ rotate: concat(this.rotateCross, 'deg') }] }}>
                                    X
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>

                        <TextInput
                            onFocus={this.onFocus}
                            autoFocus={false}
                            placeholder="Username"
                            style={styles.textInput}
                            placeholderTextColor="#009eff"
                            onChangeText={(text) => this.updateValue(text, 'username')}
                        />
                        <TextInput
                            autoFocus={false}
                            placeholder="Password"
                            style={styles.textInput}
                            placeholderTextColor="#009eff"
                            secureTextEntry={true}
                            onChangeText={(text) => this.updateValue(text, 'password')}
                        />
                        <TouchableOpacity onPress={this.handlelogin}>
                            <Animated.View style={{
                                ...styles.button, shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,

                            }} >

                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#009eff' }}>Login</Text>

                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View >
        )
    }
}
export default MYSLT;

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
        borderColor: "#008ECC",
        backgroundColor: '#ffffff',

    },
    closeButton: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -20,
        left: width / 2 - 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    }
})
