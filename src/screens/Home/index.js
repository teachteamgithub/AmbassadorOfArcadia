import React, { Component } from 'react';
import {
    ImageBackground,
    View,
    Dimensions,
    BackHandler,
    Text,
    Share,
    StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from './styles';

import PressButtonAnimationComponent from '../../components/ButtonWithAnimation';
/*
import emotionalRecognitionRepository from '../db/emotionalRecognitionRepository';
import realm from '../db/allSchemas';
import recognitionOfEmotions from '../data/levels/recognitionOfEmotions.json';
import { initializeEmotionalRecognition } from '../actions/RealmAction';
*/
const { width, height } = Dimensions.get('window');

const BACKGROUND_IMAGE = require('../../assets/images/bg.png');
const PLAY_BUTTON = require('../../assets/images/play_button.png');
const EXIT_BUTTON = require('../../assets/images/exit_game_button.png');
const SHARE_BUTTON = require('../../assets/images/share_button.png');
const INFO_BUTTON = require('../../assets/images/info_button.png');
const CONFIG_BUTTON = require('../../assets/images/config_button.png');

class HomeScreen extends Component {

    componentWillMount() {
        const er = {
            id: 2,
            name: '',
            category: '',
            isLocked: '',
            onTheLevel: '',
            questionsLevelOne: [
                {
                    id: 1,
                    question: '',
                    image: '',
                    options: [
                        {
                            id: 1,
                            text: '',
                            isCorrect: false
                        }
                    ]
                }
            ]
        };

        //emotionalRecognitionRepository.insert(er);
        //const a = emotionalRecognitionRepository.queryAll();
        //alert(a);
    }

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
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor='#1e203d' />
                <ImageBackground
                    source={BACKGROUND_IMAGE}
                    style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.nameStyle}>
                            ã
                        </Text>
                    </View>
                    <View style={styles.playButton}>
                        <PressButtonAnimationComponent
                            image={PLAY_BUTTON}
                            width={150}
                            height={150}
                            actionPress={Actions.tabView.bind(this)}
                            vibrate={true}
                        />
                    </View>
                    <View style={styles.footer}>
                        <PressButtonAnimationComponent
                            image={CONFIG_BUTTON}
                            width={70}
                            height={70}
                            actionPress={_ => _}
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

export default HomeScreen;