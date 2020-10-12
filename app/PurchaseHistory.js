import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import { DatePicker, Card } from 'native-base';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


class PurchaseHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDateSet: false,
            fromDateSet: false,

            bothset: false,

            showExtraContent: false,
        };
    }
    setToDate = () => {
        this.setState({
            toDateSet: true
        });
        if (this.state.fromDateSet) {
            this.setState({
                bothset: true
            });
        }
    }
    setFromDate = () => {
        this.setState({
            fromDateSet: true
        });

    }
    componentDidMount() {
        this.setState({
            bothset: false
        })
    }


    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#ffffff'

            }}>

                {/* Create your History UI's here -- History */}
               
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
export default PurchaseHistory;