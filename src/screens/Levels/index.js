import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    ImageBackground,
    StatusBar,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import PressButtonAnimationComponent from "../../components/PressButtonAnimationComponent";
import styles from './styles';

const BACKGROUND_IMAGE = require('../../assets/images/bg.png');

const levelsImages = {
    levelOne: [
        require('../../assets/images/levels/icons/level_1_0.png'),
        require('../../assets/images/levels/icons/level_1_1.png'),
        require('../../assets/images/levels/icons/level_1_2.png'),
        require('../../assets/images/levels/icons/level_1_3.png')
    ],
    levelTwo: [
        require('../../assets/images/levels/icons/level_2_0.png'),
        require('../../assets/images/levels/icons/level_2_1.png'),
        require('../../assets/images/levels/icons/level_2_2.png'),
        require('../../assets/images/levels/icons/level_2_3.png')
    ],
    levelThree: [
        require('../../assets/images/levels/icons/level_3_0.png'),
        require('../../assets/images/levels/icons/level_3_1.png'),
        require('../../assets/images/levels/icons/level_3_2.png'),
        require('../../assets/images/levels/icons/level_3_3.png')
    ],
    levelFour: [
        require('../../assets/images/levels/icons/level_4_0.png'),
        require('../../assets/images/levels/icons/level_4_1.png'),
        require('../../assets/images/levels/icons/level_4_2.png'),
        require('../../assets/images/levels/icons/level_4_3.png')
    ]
};

export default class LevelsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelOne: 0,
            levelTwo: 0,
            levelThree: 0,
            levelFour: 0
        };
    }

    componentWillMount() {
        this.configData();
    }

    componentDidUpdate() {
        AsyncStorage.getItem('levelOne')
            .then(res => this.state.levelOne !== parseInt(res) ? this.setState({ levelOne: parseInt(res) }) : undefined);

        AsyncStorage.getItem('levelTwo')
            .then(res => this.state.levelTwo !== parseInt(res) ? this.setState({ levelTwo: parseInt(res) }) : undefined);

        AsyncStorage.getItem('levelThree')
            .then(res => this.state.levelThree !== parseInt(res) ? this.setState({ levelThree: parseInt(res) }) : undefined);

        AsyncStorage.getItem('levelFour')
            .then(res => this.state.levelFour !== parseInt(res) ? this.setState({ levelFour: parseInt(res) }) : undefined);
    }

    configData() {
        AsyncStorage.getItem('levelOne')
            .then(res => this.setState({ levelOne: parseInt(res) }));

        AsyncStorage.getItem('levelTwo')
            .then(res => this.setState({ levelTwo: parseInt(res) }));

        AsyncStorage.getItem('levelThree')
            .then(res => this.setState({ levelThree: parseInt(res) }));

        AsyncStorage.getItem('levelFour')
            .then(res => this.setState({ levelFour: parseInt(res) }));
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
            <ImageBackground
                source={BACKGROUND_IMAGE}
                style={styles.backgroundImage}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <StatusBar backgroundColor='#1e203d' />

                    <View style={styles.container}>

                        <View style={styles.levelButton}>
                            <PressButtonAnimationComponent
                                image={this.getLevelImage(1)}
                                width={300 * .6}
                                height={200 * .6}
                                actionPress={() => _} />
                            <Text style={styles.phaseTextStyle}>Apresentação</Text>
                        </View>

                        <View style={styles.levelButton}>
                            <PressButtonAnimationComponent
                                image={this.getLevelImage(2)}
                                width={300 * .6}
                                height={200 * .6}
                                actionPress={Actions.emotionalRecognition.bind(this)} />
                            <Text style={styles.phaseTextStyle}>Reconhecimento de Emoções</Text>
                        </View>

                        <View style={styles.levelButton}>
                            <PressButtonAnimationComponent
                                image={this.getLevelImage(3)}
                                width={300 * .6}
                                height={200 * .6}
                                actionPress={() => _} />
                            <Text style={styles.phaseTextStyle}>Como se comportar</Text>
                        </View>

                        <View style={styles.levelButton}>
                            <PressButtonAnimationComponent
                                image={this.getLevelImage(4)}
                                width={300 * .6}
                                height={200 * .6}
                                actionPress={() => _} />
                            <Text style={styles.phaseTextStyle}>Reconhecimento de Emoções em grupo</Text>
                        </View>

                    </View>

                </ScrollView>
            </ImageBackground>
        );
    }
}