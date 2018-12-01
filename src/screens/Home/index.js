import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  BackHandler,
  Text,
  Share,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Tooltip from 'react-native-walkthrough-tooltip';

import styles from './styles';
import PressButtonAnimationComponent from '../../components/ButtonWithAnimation';

const BACKGROUND_IMAGE = require('../../assets/images/bg.png');
const PLAY_BUTTON = require('../../assets/images/play_button.png');
const EXIT_BUTTON = require('../../assets/images/exit_game_button.png');
const SHARE_BUTTON = require('../../assets/images/share_button.png');
const INFO_BUTTON = require('../../assets/images/info_button.png');

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolTipVisible: false,
    };
  }

  componentWillMount() {
    this.configData();
  }

  configData() {
    //AsyncStorage.clear();

    AsyncStorage.getItem('levelOne').then(res =>
      res !== null ? '' : AsyncStorage.setItem('levelOne', '0')
    );

    AsyncStorage.getItem('levelTwo').then(res =>
      res !== null ? '' : AsyncStorage.setItem('levelTwo', '0')
    );

    /*AsyncStorage.getItem('levelThree')
            .then(res => res !== null ?
                '' : AsyncStorage.setItem('levelThree', '0'));

        AsyncStorage.getItem('levelFour')
            .then(res => res !== null ?
                '' : AsyncStorage.setItem('levelFour', '0'));*/

    const badges = {
      badgesOne: 'disable',
      badgesTwo: 'disable',
      badgesThree: 'disable',
      badgesFour: 'disable',
      badgesFive: 'disable',
      badgesSix: 'disable',
    };

    AsyncStorage.getItem('badges').then(res =>
      res !== null ? '' : AsyncStorage.setItem('badges', JSON.stringify(badges))
    );
  }

  onExit() {
    BackHandler.exitApp();
  }

  onShare() {
    Share.share(
      {
        title: 'Embaixador de Arcádia',
        message: 'Jogue agora!',
      },
      {
        dialogTitle: 'Compartilhe com seus amigos',
      }
    );
  }

  async checkClick() {
    let info = await AsyncStorage.getItem('childInfo');
    (await info) !== null
      ? Actions.tabView()
      : this.setState({ toolTipVisible: true });
  }

  checkClickInfo() {
    this.state.toolTipVisible
      ? this.setState({ toolTipVisible: false })
      : Actions.getChildInfo();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#1e203d" />
        <ImageBackground source={BACKGROUND_IMAGE} style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.nameStyle}>Embaixador de Arcádia</Text>
          </View>
          <View style={styles.playButton}>
            <PressButtonAnimationComponent
              image={PLAY_BUTTON}
              width={150}
              height={150}
              actionPress={this.checkClick.bind(this)}
            />
          </View>
          <View style={styles.footer}>
            <PressButtonAnimationComponent
              image={SHARE_BUTTON}
              width={70}
              height={70}
              actionPress={this.onShare.bind(this)}
            />
            <Tooltip
              animated
              isVisible={this.state.toolTipVisible}
              content={
                <Text>Preencha algumas informações antes de continuar</Text>
              }
              placement="top"
              onClose={() => this.setState({ toolTipVisible: false })}
            >
              <PressButtonAnimationComponent
                image={INFO_BUTTON}
                width={70}
                height={70}
                actionPress={this.checkClickInfo.bind(this)}
              />
            </Tooltip>
            <PressButtonAnimationComponent
              image={EXIT_BUTTON}
              width={70}
              height={70}
              actionPress={this.onExit.bind(this)}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
