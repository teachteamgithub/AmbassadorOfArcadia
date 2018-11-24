import React, { PureComponent } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import styles from './styles';
const BUTTON_CLOSE = require('../../assets/images/buttons/close.png');

const badge = [
  { image: require('../../assets/images/bagdes/1.png'), text: 'Conlecionador de Badges' },
  { image: require('../../assets/images/bagdes/2.png'), text: 'Conlecionador de Badges' },
  { image: require('../../assets/images/bagdes/3.png'), text: 'O Colecionador de Badges' },
  { image: require('../../assets/images/bagdes/4.png'), text: 'O Embaixador de Arcadia' },
  { image: require('../../assets/images/bagdes/5.png'), text: 'O Guerreiro de Jupiter' },
  { image: require('../../assets/images/bagdes/6.png'), text: 'O amigo da vizinhaça' },
];

class ModalBadge extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          onRequestClose={_ => console.log('close')}
          visible={this.props.show}
        >
          <View style={styles.modalOuterView}>
            <View style={styles.containerModal}>
              <View style={styles.closeButtonContainer}>
                {!!this.props.title &&
                  <View style={styles.containerTitle}>
                    <Text style={styles.title}>{this.props.title}</Text>
                  </View>
                }
                <View style={styles.containerCloseButton}>
                  <TouchableWithoutFeedback onPress={_ => !!this.props.onClose && this.props.onClose()}>
                    <Image source={BUTTON_CLOSE} style={styles.closeButton} />
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Image source={badge[this.props.badge - 1].image} style={styles.badgeImage} />
                <Text style={styles.typeBadge}>{badge[this.props.badge - 1].text}</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
};

export default ModalBadge;