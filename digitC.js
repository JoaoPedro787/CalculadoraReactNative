import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import Styles from "./style";

export default class Digit extends Component {
    render() {
        const { digitName, onPress } = this.props;

        const IsZero = digitName == '0';

        const IsFunction = ['AC', '+/-', '%'].includes(digitName);

        const IsSum = ['/', '+', '-', 'X', '='].includes(digitName);

        return (
            <TouchableOpacity
                onPress={() => onPress(digitName)}
                style={[Styles.digitWrapper,
                IsZero && { width: '50%', aspectRatio: 2 }]}>
                <View
                    style={[Styles.digitStyle,
                    IsFunction && { backgroundColor: 'gray' },
                    IsSum && { backgroundColor: 'orange' }]}>

                    <Text
                        style={Styles.digitText}>
                        {digitName}
                    </Text>

                </View>
            </TouchableOpacity>
        );
    };
};