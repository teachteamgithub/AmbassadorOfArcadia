import React, { PureComponent } from 'react';
import {
    Modal,
    View,
    Text,
    Alert,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BUTTON_CLOSE = require('../../assets/images/buttons/close.png');

export default class ModalBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        }
    }


    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const {

        } = this.props;
        return (
            <View
                style={styles.container}
            >
                <Modal
                    animationType="slide"
                    transparent
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={styles.containerModal}>
                        <View style={styles.closeButtonContainer}>
                            <Image source={BUTTON_CLOSE} style={styles.closeButton} />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text>
                                vev
                                kk
                                fontFamily: 'ff
                                f',
                            </Text>
                        </View>
                        <View style={styles.buttonsBottomContainer}></View>
                    </View>
                </Modal>
            </View>
        );
    }
}

ModalBox.protoType = {

};
