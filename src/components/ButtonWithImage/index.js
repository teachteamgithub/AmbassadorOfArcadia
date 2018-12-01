import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import styles from './styles';

const BUTTON_IDLE = require('../../assets/images/buttons/button_square_normal/button_square_normal.png');

export default class ButtonWithImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatePress: new Animated.Value(1),
    };
  }

  animatePressIn() {
    Animated.timing(this.state.animatePress, {
      toValue: 0.9,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  animatePressOut() {
    Animated.timing(this.state.animatePress, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  sizeButton(size) {
    switch (size) {
      case 'small':
        return styles.smallButton;
      case 'regular':
        return styles.regularButton;
      case 'big':
        return styles.bigButton;
      default:
        return styles.regularButton;
    }
  }

  sizeFont(size) {
    switch (size) {
      case 'small':
        return styles.smallFont;
      case 'regular':
        return styles.regularFont;
      case 'big':
        return styles.bigFont;
      default:
        return styles.regularFont;
    }
  }

  renderButton(size, text, action) {
    return (
      <TouchableWithoutFeedback
        onPressIn={_ => this.animatePressIn()}
        onPressOut={_ => this.animatePressOut()}
        onPress={() => action()}
      >
        <Animated.View
          style={{
            transform: [
              {
                scale: this.state.animatePress,
              },
            ],
          }}
        >
          <ImageBackground
            source={BUTTON_IDLE}
            style={{ ...styles.button, ...this.sizeButton(size) }}
          >
            <Text style={{ ...styles.textStyle, ...this.sizeFont(size) }}>
              {text}
            </Text>
          </ImageBackground>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const { size, text, action } = this.props;
    return (
      <View>
        {size && text ? this.renderButton(size, text, action) : undefined}
      </View>
    );
  }
}
