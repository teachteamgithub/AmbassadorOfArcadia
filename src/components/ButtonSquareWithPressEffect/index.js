import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BUTTON_SQUARE = require('../../assets/images/buttons/button_square_normal/button_square_normal.png');

export default class ButtonSquareWithPressEffect extends PureComponent {
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
            <View>
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
                        <ImageBackground source={BUTTON_SQUARE} style={styles.bgImage}>
                            <Text style={styles.textStyle}>Example</Text>
                        </ImageBackground>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}