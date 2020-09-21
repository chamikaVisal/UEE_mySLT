import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import UsagesummaryChart from './Usagesummarychart'
import Constants from 'expo-constants';


const data = [{
    percentage: 34,
    color: '#009eff',
    max: 100
}]

class Bonusdatausage extends Component {



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
                            <Text style={{ fontSize: 28, color: '#009eff' }}>Bonus Data Usage</Text>
                            <View style={{ marginTop: -5, }}>
                                <Text style={{ fontSize: 20, color: '#C0C0C0' }}>Check Your Bonus Data Usage </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{
                        flex: 2, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <View style={{ margin: 5, alignItems: 'center', marginTop: 15, flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 20 }}>Bonus Volume</Text>
                            </View>
                            <View style={{ flex: 6 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>
                                    {data.map((p, i) => {
                                        return <UsagesummaryChart key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} />
                                    })}
                                </View>

                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={() => { Alert.alert("click") }}>
                                    <Text style={{ fontSize: 20, color: "#C0C0C0" }}>Tap for Daily Usage</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>


                    <View style={{ flex: 2, marginTop: 10 }}>
                        <View style={{ flex: 1.5, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }}>
                            <View style={{
                                borderWidth: 1, borderColor: '#009eff', marginHorizontal: 20, height: 50, marginTop: 10, borderRadius: 30, flexDirection: 'row', alignItems: 'center', flex: 1
                            }}>
                                < View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ height: 20, width: 20, backgroundColor: '#009eff' }} />
                                    <Text>  Remaining Data</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ height: 20, width: 20, backgroundColor: '#cbe6ef' }} />
                                    <Text>  Used Data</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            flex: 4, backgroundColor: '#ffffff', marginTop: 15, marginLeft: 20, marginRight: 20, borderRadius: 20, marginBottom: 100,
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
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                                        <Image
                                            style={{ width: 35, height: 35 }}
                                            source={{ uri: 'https://www.iconsdb.com/icons/preview/color/009EFF/clock-6-xxl.png' }}

                                        />

                                    </View>
                                    <View style={{ flex: 5, }}>
                                        <View style={{ flex: 1, flexDirection: 'column' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ marginTop: 5, fontSize: 20 }}>Subscription</Text>
                                            </View>
                                            <View style={{ flex: 1, marginTop: -20 }}>
                                                <Text tyle={{ fontSize: 15, color: '#C0C0C0' }}>Valid till 31-Aug</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </View>
                            <View style={{ flex: 1, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 18, marginLeft: 10 }}>Subscription</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 22, color: '#009eff', marginTop: -10 }}>2.0GB</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 20 }}>Used</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 22, color: '#009eff', marginTop: -10 }}>1.6GB</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 20, marginRight: 10 }}>Remaining</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 22, color: '#00FF00', marginTop: -10 }}>0.4GB</Text>
                                    </View>
                                </View>

                            </View>

                        </View>
                    </View>













                </View >


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

                                onPress={() => { Alert.alert("") }}
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
            </View >
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


    }


});
export default Bonusdatausage;