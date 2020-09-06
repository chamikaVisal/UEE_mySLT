import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class Registration extends Component {
    render() {
        return (
            <View>
                <Text> reg page </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Usage")}>
                    <Text>click</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Registration;
