import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Modal,
    Alert
} from 'react-native';

import styles from './styles';

const ET = require('../../assets/images/et.png');

export default class EtAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            actualText: 0,
            texts: this.props.texts
        }
    }

    nextText() {
        let { texts, actualText } = this.state;
        let textLen = texts.length - 1;
        if (actualText === textLen) {
            this.setModalVisible();
        } else {
            this.setState({ actualText: this.state.actualText + 1 });
        }
    }

    showText() {
        let { texts, actualText } = this.state;
        return <Text style={styles.textBalloon}>{texts[actualText].text}</Text>;
    }

    setModalVisible() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }
    
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                style={styles.container}
                onRequestClose={() => Alert.alert('Modal has been closed.')}>
                <TouchableWithoutFeedback onPress={() => this.nextText()}>
                    <View style={styles.containerBalloon}>
                        <View style={styles.talkBalloonSquare}>
                            {this.showText()}
                        </View>
                        <View style={styles.talkBalloonTriangle} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.containerEt}>
                    <Image source={ET} style={styles.et} />
                </View>
            </Modal>
        );
    }
}