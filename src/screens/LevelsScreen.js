import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    Text,
    ImageBackground,
    Dimensions,
    StatusBar
} from 'react-native';

import PressButtonAnimationComponent from "../components/PressButtonAnimationComponent";

const LEVEL_LOCKED = require('../assets/images/phase_blocked.png');
const LEVEL_UNLOCKED = require('../assets/images/phase_blocked.png');
const BACKGROUND_IMAGE = require('../assets/images/bg.png');

const { width, height } = Image.resolveAssetSource(LEVEL_LOCKED);

export default class LevelsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Reconhecimento de Emoções",
                    "category": "questionsAndAnswersWithImages",
                    "isAvailable": true,
                    "isLocked": true,
                    "percentageOfHits": 0,
                    "created_at": "2018-01-20T03:34:06.599Z"
                },
                {
                    "id": 2,
                    "name": "Como se comportar",
                    "category": "questionsAndAnswersWithImages",
                    "isAvailable": false,
                    "percentageOfHits": 0,
                    "created_at": "2018-01-20T03:34:06.599Z"
                },
                {
                    "id": 3,
                    "name": "Reconhecimento de Emoções",
                    "category": "questionsAndAnswersWithImages",
                    "isAvailable": true,
                    "isLocked": true,
                    "percentageOfHits": 0,
                    "created_at": "2018-01-20T03:34:06.599Z"
                },
                {
                    "id": 4,
                    "name": "Como se comportar",
                    "category": "questionsAndAnswersWithImages",
                    "isAvailable": false,
                    "percentageOfHits": 0,
                    "created_at": "2018-01-20T03:34:06.599Z"
                }
            ]
        };
    }

    render() {
        return (
            <ImageBackground
                source={BACKGROUND_IMAGE}
                style={styles.backgroundImage}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <StatusBar backgroundColor='#1e203d' />
                    <View style={styles.container}>
                        {this.state.data.map(data =>
                            <View style={styles.levelButton} key={data.name}>
                                <PressButtonAnimationComponent
                                    image={data.isLocked ? LEVEL_LOCKED : LEVEL_UNLOCKED}
                                    width={width}
                                    height={height}
                                    actionPress={_ => _} />
                                <Text style={styles.phaseTextStyle}>{data.name}</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    levelButton: {
        marginTop: 15,
        marginBottom: 5,
        alignItems: 'center'
    },
    phaseTextStyle: {
        fontFamily: 'GROBOLD',
        fontSize: 20,
        textAlign: 'center',
        color: '#bbb',
        marginTop: 0,
        marginBottom: 20
    }
});