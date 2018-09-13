import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';

import PropTypes from 'prop-types'; 

export default class AnimationButtonPress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            animatePress: new Animated.Value(1)
        }
    }

    animatePressIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 200
        }).start();
    }

    animatePressOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200
        }).start();
    }

    render() {
        return (
            <View>
                <TouchableWithoutFeedback
                    onPressIn={_ => this.animatePressIn()}
                    onPressOut={_ => this.animatePressOut()}
                    onPress={_ => this.props.actionPress()}
                    activeOpacity={0.7}>
                    <Animated.View style={{
                        transform: [{
                            scale: this.state.animatePress
                        }]
                    }}>
                        <Image
                            style={{ width: this.props.width, height: this.props.height }}
                            source={this.props.image} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

AnimationButtonPress.propTypes = {
    image: PropTypes.node.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    actionPress: PropTypes.func,
};
