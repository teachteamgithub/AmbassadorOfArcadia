import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = props => {
    const { action, text } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => action()}
        >
            <Text style={styles.text}>{text.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

export default Button;