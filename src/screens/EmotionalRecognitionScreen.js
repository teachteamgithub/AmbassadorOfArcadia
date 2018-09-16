import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class EmotionalRecognitionScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            questions: [this.props.data.questions]
        }
    }
    
    render() {
        return (
            <View>
                <Text></Text>
            </View>
        );
    }
}

EmotionalRecognitionScreen.PropTypes = {
    data: PropTypes.node.isRequired
};