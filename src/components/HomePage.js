import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

const BACKGROUND_IMAGE = require('./../images/bg.png');

export default class HomePage extends Component {
    render() {
        return (
            <ImageBackground 
                source={BACKGROUND_IMAGE}
                style={styles.container}>
                <View>
                    <Text>realizando teste</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Screen.width,
        height: Screen.height,
        alignItems: 'center',
        padding: 20
    }
});