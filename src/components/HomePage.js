import React, { Component } from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    Text, 
    Dimensions 
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
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
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: 'center',
        padding: 20
    }
});