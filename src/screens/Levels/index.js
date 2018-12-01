import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-toast-native';

import Modal from '../../components/ModalBadge';
import PressButtonAnimationComponent from '../../components/PressButtonAnimationComponent';
import styles from './styles';
import { metrics, fonts, colors } from '../../styles';

const BACKGROUND_IMAGE = require('../../assets/images/bg.png');

const levelsImages = {
  levelOne: [
    require('../../assets/images/levels/icons/level_1_0.png'),
    require('../../assets/images/levels/icons/level_1_1.png'),
    require('../../assets/images/levels/icons/level_1_2.png'),
    require('../../assets/images/levels/icons/level_1_3.png'),
  ],
  levelTwo: [
    require('../../assets/images/levels/icons/level_2_0.png'),
    require('../../assets/images/levels/icons/level_2_1.png'),
    require('../../assets/images/levels/icons/level_2_2.png'),
    require('../../assets/images/levels/icons/level_2_3.png'),
  ],
  levelThree: [
    require('../../assets/images/levels/icons/level_3_0.png'),
    require('../../assets/images/levels/icons/level_3_1.png'),
    require('../../assets/images/levels/icons/level_3_2.png'),
    require('../../assets/images/levels/icons/level_3_3.png'),
  ],
  levelFour: [require('../../assets/images/levels/icons/level_4_3.png')],
};

const styleToast = {
  width: metrics.widthPercentageToDP('80%'),
  height: metrics.heightPercentageToDP('20%'),
  backgroundColor: colors.primary,
  color: colors.white,
  borderRadius: 10,
  fontFamily: fonts.fontPrimary,
  fontWeight: 'bold',
  lineHeight: 2,
  lines: 4,
  fontSize: fonts.big,
};

export default class LevelsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelOne: 0,
      levelTwo: 0,
      isModal: 1,
      modalVisible: false,
    };
  }

  showToast() {
    Toast.show('Fase concluida!', Toast.SHORT, Toast.CENTER, styleToast);
  }

  componentWillMount() {
    this.configData();
  }

  componentDidUpdate() {
    this.updateLevelsAndBadges();
  }

  setModalVisible(value) {
    this.setState({ modalVisible: !this.state.modalVisible, isModal: value });
  }
  async updateLevelsAndBadges() {
    let badges = await AsyncStorage.getItem('badges');
    let levelOne = await AsyncStorage.getItem('levelOne');
    levelOne = parseInt(levelOne);
    if (this.state.levelOne === 0 && levelOne === 1) {
      badges = JSON.parse(badges);
      badges.badgesOne = 'eneable';
      await AsyncStorage.setItem('badges', JSON.stringify(badges));
      await this.setModalVisible(1);
      await this.setState({ levelOne, isModal: 1 });
    } else if (this.state.levelOne === 1 && levelOne === 2) {
      badges = JSON.parse(badges);
      badges.badgesThree = 'eneable';
      await AsyncStorage.setItem('badges', JSON.stringify(badges));
      await this.setModalVisible(3);
      await this.setState({ levelOne, isModal: 3 });
    } else if (this.state.levelOne === 2 && levelOne === 3) {
      badges = JSON.parse(badges);
      badges.badgesFour = 'eneable';
      await AsyncStorage.setItem('badges', JSON.stringify(badges));
      await this.setModalVisible(4);
      await this.setState({ levelOne, isModal: 4 });
    }

    let levelTwo = await AsyncStorage.getItem('levelTwo');
    levelTwo = parseInt(levelTwo);
    if (this.state.levelTwo === 0 && levelTwo === 1) {
      badges = JSON.parse(badges);
      badges.badgesTwo = 'eneable';
      await AsyncStorage.setItem('badges', JSON.stringify(badges));
      await this.setModalVisible(2);
      await this.setState({ levelTwo, isModal: 2 });
    } else if (this.state.levelTwo === 1 && levelTwo === 2) {
      badges = JSON.parse(badges);
      badges.badgesFive = 'eneable';
      await AsyncStorage.setItem('badges', JSON.stringify(badges));
      await this.setModalVisible(5);
      await this.setState({ levelTwo, isModal: 5 });
    } else if (this.state.levelTwo === 2 && levelTwo === 3) {
      badges = JSON.parse(badges);
      badges.badgesSix = 'eneable';
      await AsyncStorage.setItem('badges', JSON.stringify(badges));
      await this.setModalVisible(6);
      await this.setState({ levelTwo, isModal: 6 });
    }
  }

  configData() {
    AsyncStorage.getItem('levelOne').then(res =>
      this.setState({ levelOne: parseInt(res) })
    );

    AsyncStorage.getItem('levelTwo').then(res =>
      this.setState({ levelTwo: parseInt(res) })
    );
  }

  getLevelImage(level) {
    switch (level) {
      case 1:
        return levelsImages.levelOne[this.state.levelOne];
      case 2:
        return levelsImages.levelTwo[this.state.levelTwo];
      case 3:
        return levelsImages.levelThree[this.state.levelThree];
      case 4:
        return levelsImages.levelFour[this.state.levelFour];
    }
  }

  render() {
    return (
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.backgroundImage}>
        <Modal
          badge={this.state.isModal}
          show={this.state.modalVisible}
          onClose={() => this.setModalVisible(this.state.isModal)}
          title={'Você Ganhou!'}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor="#1e203d" />

          <View style={styles.container}>
            <View style={styles.levelButton}>
              <PressButtonAnimationComponent
                image={this.getLevelImage(1)}
                width={300 * 0.6}
                height={200 * 0.6}
                actionPress={
                  this.state.levelOne === 3
                    ? this.showToast.bind(this)
                    : Actions.presentation.bind(this)
                }
              />
              <Text style={styles.phaseTextStyle}>Apresentação</Text>
            </View>

            <View style={styles.levelButton}>
              <PressButtonAnimationComponent
                image={this.getLevelImage(2)}
                width={300 * 0.6}
                height={200 * 0.6}
                actionPress={
                  this.state.levelTwo === 3
                    ? this.showToast.bind(this)
                    : Actions.emotionalRecognition.bind(this)
                }
              />
              <Text style={styles.phaseTextStyle}>
                Reconhecimento de Emoções
              </Text>
            </View>

            <View style={styles.levelButton}>
              <PressButtonAnimationComponent
                image={levelsImages.levelThree[0]}
                width={300 * 0.6}
                height={200 * 0.6}
                actionPress={Actions.erg.bind(this)}
              />
              <Text style={styles.phaseTextStyle}>Jogar em grupo</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
