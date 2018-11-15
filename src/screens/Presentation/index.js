import React, { PureComponent } from 'react';
import {
    ImageBackground,
    View,
    Text,
    AsyncStorage,
    Alert
} from 'react-native';

import PresentationQuestions from '../../data/levels/Presentation';
import styles from './styles';
import Button from '../../components/Button';
import ModalBox from '../../components/ModalBox';
import EtAnimation from '../../components/EtAnimation';

const BG = require('../../assets/images/bg-2.png');

export default class Presentation extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            onTheLevel: 0,
            showModalSuccess: false,
            hits: 0,
            showEt: false,
            showModalSuccess: false,
            childInfo: null,
            showModalFail: false,
            indexQuestion: 0,
            level: PresentationQuestions
        }
    }

    componentWillMount() {
        this.configData();
    }

    async configData() {
        let lvl = await AsyncStorage.getItem('levelOne');
        await this.setState({ onTheLevel: parseInt(lvl), showEt: true });
        await this.shuffleQuestions();
        let childInfo = await AsyncStorage.getItem('childInfo');
        let obj = await JSON.parse(childInfo);
        await this.setState({ child: obj });
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

    getEtPerLevel() {
        if (this.state.onTheLevel === 0 && this.state.showEt) {
            return (
                <EtAnimation
                    texts={[
                        { text: `Olá! Você poderia me ajudar a identificar o que as pessoas a seguir estão sentindo? ${this.state.onTheLevel}` },
                        { text: 'Vou te mostrar algumas imagens e você deverá selecionar a opção correta.' },
                        { text: 'Vamos lá!' }
                    ]}
                />
            );
        }
        if (this.state.onTheLevel === 1 && this.state.showEt) {
            return (
                <EtAnimation
                    texts={[
                        { text: 'et2' },
                    ]}
                />
            );
        }
        if (this.state.onTheLevel === 2 && this.state.showEt) {
            return (
                <EtAnimation
                    texts={[
                        { text: 'et3' },
                    ]}
                />
            );
        }
    }

    finalizedLevel(sizeQuestions) {
        if (this.state.hits === sizeQuestions) {
            AsyncStorage.getItem('levelOne')
                .then(res => {
                    let _newLevel = parseInt(res) + 1;
                    let newLevel = String(_newLevel);
                    AsyncStorage.setItem('levelOne', newLevel);
                    this.setState({ showModalSuccess: true });
                });
        } else {
            this.setState({ showModalFail: true })
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

    showOptions(options) {
        return this.shuffle(options);
    }

    showQuestions(questions) {
        return (
            <View>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>{questions[this.state.indexQuestion].question}</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {this.showOptions(questions[this.state.indexQuestion].options).map(option =>
                        <Button
                            key={option.id}
                            text={option.text}
                            textSize={'small'}
                            action={this.checkAnswer.bind(this, option.correct)}
                        />
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

    render() {
        return (
            <ImageBackground style={styles.container} source={BG}>
                {this.getSelectQuestions()}
                {this.getEtPerLevel()}
                {this.showModal()}
            </ImageBackground>
        );
    }
}
