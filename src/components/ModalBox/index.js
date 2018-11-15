import React, { PureComponent } from 'react';
import {
    Modal,
    View,
    Text,
    Alert,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import ButtonWithImage from '../ButtonWithImage';
import styles from './styles';

const BUTTON_CLOSE = require('../../assets/images/buttons/close.png');

export default class ModalBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        }
    }

    setModalVisible() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    sizeTextContent(size) {
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

    backLevelsScreen() {
        Actions.pop();
        setTimeout(() => Actions.refresh({ test: true }), 1000);
    }

    render() {
        const {
            title,
            hasCloseButton,
            content,
            sizeContent,
            okButton,
            sizeOkButton,
            textOkButton,
            modalAction,
            showModal
        } = this.props;
        return (
            <View>
                {showModal ?
                    <View style={styles.container}>
                        <Modal
                            animationType="slide"
                            transparent
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                console.log('Modal has been closed.');
                            }}
                        >
                            <View style={styles.modalOuterView}>
                                <View style={styles.containerModal}>
                                    <View style={styles.closeButtonContainer}>
                                        {title ?
                                            <View style={styles.containerTitle}>
                                                <Text style={styles.title}>{title}</Text>
                                            </View>
                                            : undefined}
                                        <View style={styles.containerCloseButton}>
                                            {hasCloseButton ?
                                                <TouchableWithoutFeedback onPress={() => { this.setModalVisible(); }}>
                                                    <Image source={BUTTON_CLOSE} style={styles.closeButton} />
                                                </TouchableWithoutFeedback>
                                                : undefined}
                                        </View>
                                    </View>
                                    <View style={styles.contentContainer}>
                                        <Text style={{ ...styles.textContent, ...this.sizeTextContent(sizeContent) }}>
                                            {content}
                                        </Text>
                                        {okButton ?
                                            <View style={styles.okButton}>
                                                <ButtonWithImage
                                                    size={sizeOkButton}
                                                    text={textOkButton}
                                                    action={() => {
                                                        this.backLevelsScreen();
                                                        this.setModalVisible();
                                                    }} />
                                            </View>
                                            : undefined}
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    : undefined}
            </View>
        );
    }
}
