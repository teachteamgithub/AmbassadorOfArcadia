import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

import styles from './styles';

const ET = require('../../assets/images/et.png');
const ET2 = require('../../assets/images/et-2.png');
const ET3 = require('../../assets/images/et-3.png');

export default class EtAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      actualText: 0,
      texts: this.props.texts,
      et: this.props.et,
    };
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

  getEt() {
    switch (this.state.et) {
      case 1:
        return ET;
      case 2:
        return ET2;
      case 3:
        return ET3;
      default:
        return ET;
    }
  }

  render() {
    return (
      <View>
        {this.state.modalVisible ? (
          <View style={styles.container}>
            <Modal
              animationType="slide"
              transparent
              visible={this.state.modalVisible}
              onRequestClose={() => console.log('Modal has been closed.')}
            >
              <View style={styles.bgModal}>
                <TouchableWithoutFeedback onPress={() => this.nextText()}>
                  <View style={styles.containerBalloon}>
                    <View style={styles.talkBalloonSquare}>
                      {this.showText()}
                    </View>
                    <View style={styles.talkBalloonTriangle} />
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.containerEt}>
                  <Image source={this.getEt()} style={styles.et} />
                </View>
              </View>
            </Modal>
          </View>
        ) : (
          undefined
        )}
      </View>
    );
  }
}
