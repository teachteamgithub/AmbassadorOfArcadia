import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Vibration,
} from 'react-native';

const DURATION = 400;

export default class AnimationButtonPress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatePress: new Animated.Value(1),
    };
  }

  onVibrate(vibrate) {
    vibrate ? Vibration.vibrate(DURATION) : vibrate;
  }

  animatePressIn() {
    Animated.timing(this.state.animatePress, {
      toValue: 0.8,
      duration: 200,
    }).start();
  }

  animatePressOut() {
    Animated.timing(this.state.animatePress, {
      toValue: 1,
      duration: 200,
    }).start();
  }

  render() {
    const { image, width, height, actionPress, vibrate } = this.props;

    return (
      <View>
        <TouchableWithoutFeedback
          onPressIn={_ => {
            this.animatePressIn();
            this.onVibrate(vibrate);
          }}
          onPressOut={_ => this.animatePressOut()}
          onPress={_ => actionPress()}
          activeOpacity={0.7}
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
            <Image style={{ width, height }} source={image} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
