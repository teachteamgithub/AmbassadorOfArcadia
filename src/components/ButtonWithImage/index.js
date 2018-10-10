import React, { Component } from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';

import styles from './styles';

const BUTTON_IDLE = require('../../assets/images/button.png');
const BUTTON_PRESS = require('../../assets/images/button_press.png');

export default class ButtonWithImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animatePress: new Animated.Value(1)
        }
    }

    animatePressIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.9,
            duration: 200,
            useNativeDriver: true
        }).start();
    }

    animatePressOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start();
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPressIn={_ => this.animatePressIn()}
                onPressOut={_ => this.animatePressOut()}
            >
                <Animated.View
                    style={{
                        transform: [{
                            scale: this.state.animatePress
                        }]
                    }}>
                    <ImageBackground source={BUTTON_IDLE} style={styles.button}>
                        <Text style={styles.textStyle}>áéíì</Text>
                    </ImageBackground>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}



