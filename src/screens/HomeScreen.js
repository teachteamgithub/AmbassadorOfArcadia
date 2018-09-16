import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Dimensions,
    BackHandler,
    Text,
    Share,
    StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import PressButtonAnimationComponent from '../components/PressButtonAnimationComponent';

const { width, height } = Dimensions.get('window');

const BACKGROUND_IMAGE = require('../assets/images/bg.png');
const PLAY_BUTTON = require('../assets/images/play_button.png');
const EXIT_BUTTON = require('../assets/images/exit_game_button.png');
const SHARE_BUTTON = require('../assets/images/share_button.png');
const INFO_BUTTON = require('../assets/images/info_button.png');
const CONFIG_BUTTON = require('../assets/images/config_button.png');

export default class HomeScreen extends Component {

    onExit() {
        BackHandler.exitApp();
    }

    onShare() {
        Share.share({
            title: 'AutismAppGame',
            message: 'Jogue agora!'
        },
            {
                dialogTitle: 'Compartilhe com seus amigos'
            });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor='#1e203d' />
                <ImageBackground
                    source={BACKGROUND_IMAGE}
                    style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.nameStyle}>
                            AutismApp
                            GAME
                    </Text>
                    </View>
                    <View style={styles.playButton}>
                        <PressButtonAnimationComponent
                            image={PLAY_BUTTON}
                            width={120}
                            height={120}
                            actionPress={Actions.tabView.bind(this)}
                            vibrate={true}
                        />
                    </View>
                    <View style={styles.footer}>
                        <PressButtonAnimationComponent
                            image={CONFIG_BUTTON}
                            width={70}
                            height={70}
                            actionPress={_=>_}
                        />
                        <PressButtonAnimationComponent
                            image={SHARE_BUTTON}
                            width={70}
                            height={70}
                            actionPress={this.onShare.bind(this)}
                        />
                        <PressButtonAnimationComponent
                            image={INFO_BUTTON}
                            width={70}
                            height={70}
                            actionPress={_ => _}
                        />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        padding: 15
    },
    header: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    nameStyle: {
        fontFamily: 'GROBOLD',
        fontSize: 60,
        textAlign: 'center',
        color: '#fff'
    },
    playButton: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    }
});