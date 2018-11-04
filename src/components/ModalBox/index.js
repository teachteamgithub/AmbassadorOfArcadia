import React, { PureComponent } from 'react';
import {
    Modal,
    View,
    Text,
    Alert,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';

import ButtonWithImage from '../ButtonWithImage';
import styles from './styles';

const BUTTON_CLOSE = require('../../assets/images/buttons/close.png');

export default class ModalBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    setModalVisible() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    sizeContent(size) {
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
            visible
        } = this.props;
        return (
            <View>
                {visible ? this.setModalVisible : undefined}
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
                                {title ? <View style={styles.containerTitle}>
                                    <Text style={styles.title}>{title}</Text>
                                </View> : undefined}
                                <View style={styles.containerCloseButton}>
                                    {hasCloseButton ?
                                        <TouchableWithoutFeedback onPress={() => this.setModalVisible()}>
                                            <Image source={BUTTON_CLOSE} style={styles.closeButton} />
                                        </TouchableWithoutFeedback>
                                        : undefined}
                                </View>
                            </View>
                            {content ?
                                <View style={styles.contentContainer}>
                                    <Text style={{ ...styles.textContent, ...this.sizeContent(sizeContent) }}>
                                        {content}
                                    </Text>
                                    {okButton ?
                                        <View style={styles.okButton}>
                                            <TouchableWithoutFeedback>
                                                <ButtonWithImage
                                                    size={sizeOkButton}
                                                    text={textOkButton}
                                                    action={() => {
                                                        modalAction();
                                                        this.setModalVisible();
                                                    }} />
                                            </TouchableWithoutFeedback>
                                        </View>
                                        : undefined}
                                </View>
                                : undefined}
                            <View style={styles.buttonsBottomContainer}></View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}

ModalBox.protoType = {
    tile: PropTypes.string,
    hasCloseButton: PropTypes.bool
};
