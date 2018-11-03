import React, { Component } from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import PressButtonAnimationComponent from "../../components/PressButtonAnimationComponent";
import styles from './styles';

const LEVEL_UNLOCKED = require('../../assets/images/level_unlocked_1_0.png');

const LEVEL_LOCKED = require('../../assets/images/level_locked.png');
const BACKGROUND_IMAGE = require('../../assets/images/bg.png');

const { width, height } = Image.resolveAssetSource(LEVEL_LOCKED);

export default class LevelsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [
                
            ]
        };
    }

    componentWillMount() {

    }

    render() {
        const { levels } = this.state;
        return (
            <ImageBackground
                source={BACKGROUND_IMAGE}
                style={styles.backgroundImage}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <StatusBar backgroundColor='#1e203d' />
                    
                    <View style={styles.container}>
                        
                        {levels.map(level =>
                            <View style={styles.levelButton} key={level.id}>
                                <PressButtonAnimationComponent
                                    image={level.isLocked ? LEVEL_LOCKED : LEVEL_UNLOCKED}
                                    width={width}
                                    height={height}
                                    actionPress={Actions.emotionalRecognitionScreen.bind(this, { level })} />
                                    <Text style={styles.phaseTextStyle}>{level.name}</Text>
                            </View>
                        )}

                    </View>
                
                </ScrollView>
            </ImageBackground>
        );
    }
}