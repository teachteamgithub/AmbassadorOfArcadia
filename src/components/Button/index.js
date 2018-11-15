import React, { PureComponent } from 'react';
import { TouchableOpacity, ImageBackground, Text } from 'react-native';

import styles from './styles';

const BUTTON = require('../../assets/images/buttons/button_long.png');

class Button extends PureComponent {

    getTextSize(size) {
        switch (size) {
            case 'small':
                return styles.fontSizeSmall;
            case 'regular':
                return styles.fontSizeRegular;
            case 'big':
                return styles.fontSizeBig;
            default:
                return styles.fontSizeRegular;
        }
    }

    render() {
        const { action, text, textSize } = this.props;
        return (
            <TouchableOpacity
                onPress={() => action()}
            >
                <ImageBackground style={styles.button} source={BUTTON}>
                    <Text style={{ ...styles.text, ...this.getTextSize(textSize) }}>{text.toUpperCase()}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

export default Button;