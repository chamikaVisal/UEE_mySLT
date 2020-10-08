import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Accordion,
    Text,
    View,
} from "native-base";


const dataArray = [
    {
        title: "Entertainment",
        content:
            "Find the packages     >",
    },
    {
        title: "Education",
        content:
            "Find the packages     >",
    },
    {
        title: "Work",
        content:
            "Find the packages     >",
    },
    {
        title: "Other",
        content:
            "Find the packages     >",
    },
];

class Promotions extends Component {
    constructor(props) {
        super(props);

        this.validateFields = this.validateFields.bind(this);

    }
    _renderHeader(item, expanded) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#009eff",
                    marginVertical: 5, borderRadius: 20
                }}
            >
                <Text style={{ fontWeight: "600", color: "#fff" }}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18, color: '#ffffff' }} name="arrow-up" />
                    : <Icon style={{ fontSize: 18, color: '#ffffff' }} name="arrow-down" />}
            </View>
        );
    }
    validateFields = (item) => {
        if (item === "Entertainment")
            this.props.navigation.navigate("Entertainment");

    }
    _renderContent = (item) => {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2 }}>
                    <Image
                        style={{ height: 100, width: 300 }}
                        source={require('../assets/adddata.jpg')}
                    />

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.validateFields(item.title)} >
                        <Text
                            style={{
                                backgroundColor: "#ffffff",
                                padding: 10,
                                color: "#009eff"

                            }}
                        >
                            {item.content}
                        </Text>
                    </TouchableOpacity>
                    <Icon style={{ fontSize: 18, color: '#ffffff' }} name="arrow-up" />
                </View>
            </View>

        );
    }



    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#ffffff'

            }}>

                {/* Create your Promo UI's here -- Promo */}
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 30 }}>
                                <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                                <Text style={{ fontSize: 28, color: '#009eff' }}>Promotions</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 5, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 80, borderRadius: 20, marginTop: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }}>
                            <View style={{ flex: 1.8, justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ fontSize: 16 }}>Here You Can Find Your Recent</Text>
                                <Text style={{ fontSize: 22, color: '#00FF00' }}>OFFER!</Text>

                                <Image
                                    style={{ width: 220, height: 120 }}
                                    source={require('../assets/promo_nishiki.png')}
                                />


                            </View>
                            <View style={{
                                flex: 3,
                            }}>
                                <Content padder>
                                    <Accordion
                                        iconStyle={{ color: "green" }}
                                        expandedIconStyle={{ color: "red" }}
                                        headerStyle={{ backgroundColor: '#009eff', marginVertical: 5, borderRadius: 20 }}
                                        dataArray={dataArray}
                                        renderHeader={this._renderHeader}
                                        renderContent={this._renderContent} />
                                </Content>

                                {/* <Container>


                                    <Content padder style={{ backgroundColor: "white" }}>
                                        <Accordion
                                            dataArray={dataArray}
                                            animation={true}
                                            expanded={true}
                                            renderHeader={this._renderHeader}
                                            renderContent={this._renderContent}
                                        />
                                    </Content>
                                </Container> */}




                            </View>


                        </View>

                    </View>


                </View>


                {/* Create your Promo UI's here -- Promo */}

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


    }


});
export default Promotions;