import React, { Component } from 'react';
import {
    Modal,
    TouchableWithoutFeedback,
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

const CLOSE_BUTTON = require('./../assets/images/close_button.png');

export default class ModalComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: true
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableWithoutFeedback
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Image source={CLOSE_BUTTON}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </Modal>

                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});