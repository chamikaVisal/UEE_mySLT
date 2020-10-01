import { DatePicker } from 'native-base';
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class ViewDailyUsage extends Component {



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
                            <Text style={{ fontSize: 28, marginTop:3, color: '#009eff' }}>Daily Usage</Text>

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
                       <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <View style={{ flex: 1, flexDirection: 'row', margin: 5, backgroundColor: '#ffffff' }}>

                            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                                <View style={{ flex: 1, marginHorizontal: 20, marginBottom:5}}>
                                    <Text style={{ fontsize:30 ,fontWeight:'bold'}}>From</Text>
                                </View>


                                <View style={{ borderWidth: 1, borderColor: '#C0C0C0', flex: 2, marginHorizontal: 10, borderRadius: 10,backgroundColor: '#faf8f2' }}>

                                    <DatePicker />
                                </View>

                            </View>

                            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                                <View style={{ flex: 1, marginHorizontal: 20,marginBottom:5}}>
                                    <Text style={{fontsize:30,fontWeight:'bold'}}>To</Text>
                                </View>


                                <View style={{ borderWidth: 1, borderColor: '#C0C0C0', flex: 2, marginHorizontal: 10, borderRadius: 10, backgroundColor: '#faf8f2' }}>

                                    <DatePicker />
                                </View>

                            </View>
                        </View>

                    </View>

                      
                        <View style={{ flex: 1.5, }}>
                            <View style={{
                                flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20, marginTop: 10,
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
                            <View style={{ flexDirection: 'row', flex: 1}}>
                                <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                                    <Image
                                        style={{ width: 36, height: 36 }}
                                        source={require('../assets/signal.png')}
                                        onPress={() => { Alert.alert("click") }}
                                    />

                                </View>
                                <View style={{ flex: 5, }}>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginTop: 5, fontSize: 20 }}>02-OCT-20</Text>
                                        </View>
                                        <View style={{ flex: 1, marginTop: 1 }}>
                                            <Text style={{ fontSize: 15,fontWeight:'bold'}}>3GB</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                        
                        <View style={{ flex: 1, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, marginTop:5 }}>Limit</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>25.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18,marginTop:5  }}>Used</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>22.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, marginRight: 10,marginTop:5  }}>Remaining</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#00FF00',marginLeft: -10 }}>4.0GB</Text>
                                </View>
                            </View>

                        </View>

                        </View>

                        </View>

                      

                        <View style={{ flex: 1.5, }}>
                            <View style={{
                                flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20, marginTop: -10,
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
                                        style={{ width: 36, height: 36 }}
                                        source={require('../assets/signal.png')}
                                        onPress={() => { Alert.alert("click") }}
                                    />

                                </View>
                                <View style={{ flex: 5, }}>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginTop: 5, fontSize: 20 }}>01-OCT-20</Text>
                                        </View>
                                        <View style={{ flex: 1, marginTop: 1 }}>
                                            <Text style={{ fontSize: 15,fontWeight:'bold', }}>1GB</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                        
                        <View style={{ flex: 1, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18,marginTop:5  }}>Limit</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>25.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18,marginTop:5  }}>Used</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff'}}>19.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, marginRight: 10,marginTop:5  }}>Remaining</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#00FF00',marginLeft: -10 }}>7.0GB</Text>
                                </View>
                            </View>

                        </View>
                        </View>
                        </View>

                        <View style={{ flex: 1.5, }}>
                            <View style={{
                                flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20, marginTop: -10,
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
                                        style={{ width: 36, height: 36 }}
                                        source={require('../assets/signal.png')}
                                        onPress={() => { Alert.alert("click") }}
                                    />

                                </View>
                                <View style={{ flex: 5, }}>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginTop: 5, fontSize: 20 }}>31-AUG-20</Text>
                                        </View>
                                        <View style={{ flex: 1, marginTop: 1 }}>
                                            <Text style={{ fontSize: 15,fontWeight:'bold', }}>2GB</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                        
                        <View style={{ flex: 1, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18,marginTop:5  }}>Limit</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>25.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18,marginTop:5  }}>Used</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>18.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, marginRight: 10 ,marginTop:5 }}>Remaining</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#00FF00',marginLeft: -10 }}>8.0GB</Text>
                                </View>
                            </View>

                        </View>
                        </View>
                        </View>

                        <View style={{ flex: 1.5, }}>
                            <View style={{
                                flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20, marginTop: -10,
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
                                        style={{ width: 36, height: 36 }}
                                        source={require('../assets/signal.png')}
                                        onPress={() => { Alert.alert("click") }}
                                    />

                                </View>
                                <View style={{ flex: 5, }}>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginTop: 5, fontSize: 20 }}>30-AUG-20</Text>
                                        </View>
                                        <View style={{ flex: 1, marginTop: 1 }}>
                                            <Text style={{ fontSize: 15,fontWeight:'bold', }}>1GB</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                        
                        <View style={{ flex: 1, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18,marginTop:5  }}>Limit</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>25.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18,marginTop:5  }}>Used</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>16.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, marginRight: 10,marginTop:5  }}>Remaining</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#00FF00',marginLeft: -10 }}>9.0GB</Text>
                                </View>
                            </View>

                        </View>
                        </View>
                        </View>
                      

                        <View style={{ flex: 1.5, }}>
                            <View style={{
                                flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20, marginTop: -10,
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
                                        style={{ width: 36, height: 36 }}
                                        source={require('../assets/signal.png')}
                                        onPress={() => { Alert.alert("click") }}
                                    />

                                </View>
                                <View style={{ flex: 5, }}>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginTop: 5, fontSize: 20 }}>29-AUG-20</Text>
                                        </View>
                                        <View style={{ flex: 1, marginTop: 1 }}>
                                            <Text style={{ fontSize: 15,fontWeight:'bold', }}>1GB</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                        
                        <View style={{ flex: 1, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18,marginTop:5  }}>Limit</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>25.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18 ,marginTop:5 }}>Used</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#009eff' }}>15.0GB</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, marginRight: 10,marginTop:5  }}>Remaining</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#00FF00',marginLeft: -10 }}>10.0GB</Text>
                                </View>
                            </View>

                        </View>
                        </View>
                        </View>

                       

                           
                        {/* <View style={{ flex: 0.5, }}>
                    
                         <View style={{ flex: 0.4,marginTop:15, backgroundColor: '#ffffff' }}>
                        <View style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 20,paddingRight:20, marginLeft:30}}>
                        <View style={{ justifyContent: 'center', marginTop: -6 }}>
                                    <View style={{ marginTop: -18, alignItems: 'center' ,marginLeft:200}}>
                                        <Text style={{ marginHorizontal: 20, fontSize: 18, fontWeight:'bold' }}>More</Text>
                        
                                    </View>

                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flex: 1,marginLeft:270, alignItems: 'center', marginTop: -34 }}>
                                    <Image
                                        style={{ width: 17, height: 46,resizeMode:'contain' }}
                                        source={require('../assets/arrow.png')}
                                        onPress={() => { Alert.alert("click") }}
                                    />

                                </View></View>



                                </View>
                        </View>
                       </View>
                    </View> */}

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
export default ViewDailyUsage;