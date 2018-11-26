import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    Alert,
    AsyncStorage
} from 'react-native';

import recognitionOfEmotions from '../../data/levels/recognitionOfEmotions';
import ModalBox from '../../components/ModalBox';
import EtAnimation from '../../components/EtAnimation';
import Button from '../../components/Button';
import styles from './styles';

const BG = require('../../assets/images/bg-2.png');

export default class EmotionRecognition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indexQuestion: 0,
            hits: 0,
            onTheLevel: 0,
            level: recognitionOfEmotions,
            showModalSuccess: false,
            showModalFail: false,
            showEt: false,
        }
    }

    componentWillMount() {
        this.configData();
    }

    async configData() {
        let lvl = await AsyncStorage.getItem('levelTwo');
        await this.setState({ onTheLevel: parseInt(lvl), showEt: true });
        await this.shuffleQuestions();
    }

    shuffleQuestions() {
        let { onTheLevel, level } = this.state;
        if (onTheLevel === 0) {
            this.shuffle(level.questionsLevelOne);
        } else if (onTheLevel === 1) {
            this.shuffle(level.questionsLevelTwo);
        } else {
            this.shuffle(level.questionsLevelThree);
        }
    }

    addHit() {
        this.setState({
            hits: this.state.hits + 1,
        });
    }

    showModal() {
        if (this.state.showModalSuccess) {
            return (
                <ModalBox
                    title='Parabéns!'
                    content='Você concluiu este nível.'
                    sizeContent='big'
                    okButton={true}
                    sizeOkButton='small'
                    textOkButton='Ok'
                    showModal={this.state.showModalSuccess}
                />
            );
        } else if (this.state.showModalFail) {
            return (
                <ModalBox
                    title='Ops!'
                    content='Você não atingiu a pontuação suficiente para concluir este nível, tente novamente.'
                    sizeContent='big'
                    okButton={true}
                    sizeOkButton='small'
                    textOkButton='Ok'
                    showModal={this.state.showModalFail}
                />
            );
        }
    }

    finalizedLevel(sizeQuestions) {
        if (this.state.hits === sizeQuestions) {
            AsyncStorage.getItem('levelTwo')
                .then(res => {
                    let _newLevel = parseInt(res) + 1;
                    let newLevel = String(_newLevel);
                    AsyncStorage.setItem('levelTwo', newLevel);
                    this.setState({ showModalSuccess: true });
                });
        } else {
            this.setState({ showModalFail: true })
        }
    }

    nextQuestion() {
        let { indexQuestion, level, onTheLevel } = this.state;
        let questionsLen = 0;
        if (onTheLevel === 0) {
            questionsLen = level.questionsLevelOne.length - 1;
        } else if (onTheLevel === 1) {
            questionsLen = level.questionsLevelTwo.length - 1;
        } else {
            questionsLen = level.questionsLevelThree.length - 1;
        }
        if (indexQuestion >= questionsLen) {
            this.finalizedLevel(questionsLen + 1);
        } else {
            this.setState({
                indexQuestion: indexQuestion + 1
            });
        }
    }

    checkAnswer(isCorrect) {
        if (isCorrect) {
            Alert.alert(
                'Parabéns',
                'Sua resposta está correta.',
                [
                    {
                        text: 'Próxima', onPress: () => {
                            this.addHit();
                            this.nextQuestion()
                        }
                    },
                ],
                { cancelable: false }
            );
        } else {
            Alert.alert(
                'Ops!',
                'Sua resposta está incorreta.',
                [
                    { text: 'Próxima', onPress: () => this.nextQuestion() },
                ],
                { cancelable: false }
            )
        }
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    showOptions(options) {
        return this.shuffle(options);
    }

    getImage(question, level) {
        if (level === 0) {
            switch (question) {
                case 1:
                    return require('../../assets/images/levels/emotionalRecognition/levelOne/man-astonished.png');
                case 2:
                    return require('../../assets/images/levels/emotionalRecognition/levelOne/man-happy.png');
                case 3:
                    return require('../../assets/images/levels/emotionalRecognition/levelOne/man-rage.png');
                case 4:
                    return require('../../assets/images/levels/emotionalRecognition/levelOne/man-sad.png');
            }
        } else if (level === 1) {
            switch (question) {
                case 1:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/man-astonished.png');
                case 2:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/man-happy.png');
                case 3:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/man-rage.png');
                case 4:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/man-sad.png');
                case 5:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-astonished.png');
            }
        } else {
            switch (question) {
                case 6:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-happy-2.png');
                case 7:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-happy.png');
                case 8:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-rage.png');
                case 9:
                    return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-sad.png');
            }
        }
    }

    showQuestions(questions) {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={styles.image} source={this.getImage(questions[this.state.indexQuestion].image, this.state.onTheLevel)} />
                    <Text style={styles.question}>{questions[this.state.indexQuestion].question.toUpperCase()}</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {this.showOptions(questions[this.state.indexQuestion].options).map(option =>
                        <View key={option.id} style={styles.option}>
                            <Button text={option.text} action={this.checkAnswer.bind(this, option.correct)} />
                        </View>
                    )}
                </View>
            </View>
        );
    }

    getSelectQuestions() {
        if (this.state.onTheLevel === 0) {
            return this.showQuestions(this.state.level.questionsLevelOne);
        } else if (this.state.onTheLevel === 1) {
            return this.showQuestions(this.state.level.questionsLevelTwo);
        } else {
            return this.showQuestions(this.state.level.questionsLevelThree);
        }
    }

    getEtPerLevel() {
        if (this.state.onTheLevel === 0 && this.state.showEt) {
            return (
                <EtAnimation
                    et={1}
                    texts={[
                        { text: 'Olá! Você poderia me ajudar a identificar o que as pessoas a seguir estão sentindo?' },
                        { text: 'Vou te mostrar algumas imagens e você deverá selecionar a opção correta.' },
                        { text: 'Vamos lá!' }
                    ]
                    }
                />
            );
        }
        if (this.state.onTheLevel === 1 && this.state.showEt) {
            return (
                <EtAnimation
                    et={2}
                    texts={[
                        { text: 'Oi, meu irmão me contou que você o ajudou' },
                        { text: 'Você poderia me ajudar também?' },
                        { text: 'Preciso de ajuda pra entender as emoções que os humanos possuem' },
                        { text: 'Vamos lá!' },
                    ]}
                />
            );
        }
        if (this.state.onTheLevel === 2 && this.state.showEt) {
            return (
                <EtAnimation
                    et={3}
                    texts={[
                        { text: 'Olá, meus irmãos me contaram que você está sempre pronto a ajudar quando é preciso' },
                        { text: 'Você pode me ajudar também?' },
                        { text: 'Preciso de ajuda pra entender as emoções que os humanos possuem' },
                        { text: 'Vamos lá!' },
                    ]}
                />
            );
        }
    }

    render() {
        return (
            <ImageBackground style={styles.bgImage} source={BG}>
                {this.getSelectQuestions()}
                {this.getEtPerLevel()}
                {this.showModal()}
            </ImageBackground>
        )
    }
}