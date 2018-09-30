import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';

import styles from './styles';

const ET = require('../../assets/images/et.png');

export default class EtAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            actualText: 0,
            texts: [
                {
                    id: 1,
                    text: 'texto 1 v3qv3r vb g43bt bjjlkav jilnjver nnvae nnverpve nprenvew nvaen'
                },
                {
                    id: 2,
                    text: 'texto 2'
                }
            ]
        }
    }

    nextText() {
        this.setState({ actualText: this.state.actualText + 1 });
    }

    showText() {
        let     { texts, actualText } = this.state;
        return <Text style={styles.textBalloon}>{actualText < texts.length ? texts[actualText].text : this.setModalVisible()}</Text>;
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