import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    Alert
} from 'react-native';

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
            level: {
                "id": 1,
                "name": "Reconhecimento de Emoções",
                "category": "questionsAndAnswersWithImages",
                "isAvailable": true,
                "isLocked": true,
                "percentageOfHits": 0,
                "created_at": "2018-01-20T03:34:06.599Z",
                "questions": [
                    {
                        "id": 1,
                        "level": "Reconhecimento de Emoções",
                        "question": "O que a criança está sentindo?",
                        "image": 1,
                        "answered": false,
                        "options": [
                            {
                                "id": 1,
                                "text": "Raiva",
                                "correct": false
                            },
                            {
                                "id": 2,
                                "text": "Alegria",
                                "correct": false
                            },
                            {
                                "id": 3,
                                "text": "Tristeza",
                                "correct": true
                            },
                            {
                                "id": 4,
                                "text": "Medo",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "level": "Reconhecimento de Emoções",
                        "question": "XXXXXXX",
                        "image": 1,
                        "answered": false,
                        "options": [
                            {
                                "id": 1,
                                "text": "Raiva",
                                "correct": false
                            },
                            {
                                "id": 2,
                                "text": "Alegria",
                                "correct": false
                            },
                            {
                                "id": 3,
                                "text": "xxxxxxxxxxxxxxxxxx",
                                "correct": true
                            },
                            {
                                "id": 4,
                                "text": "Medo",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "level": "Reconhecimento de Emoções",
                        "question": "O que a criança está sentindo?",
                        "image": 1,
                        "answered": false,
                        "options": [
                            {
                                "id": 1,
                                "text": "yyyyyy",
                                "correct": false
                            },
                            {
                                "id": 2,
                                "text": "Alegria",
                                "correct": false
                            },
                            {
                                "id": 3,
                                "text": "Tristeza",
                                "correct": true
                            },
                            {
                                "id": 4,
                                "text": "Medo",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "level": "Reconhecimento de Emoções",
                        "question": "XXXXXXX",
                        "image": 1,
                        "answered": false,
                        "options": [
                            {
                                "id": 1,
                                "text": "aaaaaaaaaaaaa",
                                "correct": false
                            },
                            {
                                "id": 2,
                                "text": "Alegria",
                                "correct": false
                            },
                            {
                                "id": 3,
                                "text": "xxxxxxxxxxxxxxxxxx",
                                "correct": true
                            },
                            {
                                "id": 4,
                                "text": "Medo",
                                "correct": false
                            }
                        ]
                    }
                ]
            }
        }
    }

    componentWillMount() {
        this.shuffle(this.state.level.questions);

    }

    componentDidMount() {

    }

    addHit() {
        this.setState({
            hits: this.state.hits + 1,
        });
    }

    nextQuestion() {
        const { indexQuestion, questions } = this.state;
        let questionsLen = questions.length - 1;
        if (indexQuestion === questionsLen) {
            this.setState({
                indexQuestion: indexQuestion + 1
            });
        } else {
            Alert.alert('última');
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

    getImage(question, onTheLevel) {
        switch (question) {
            case 1:
                return require('../../assets/images/menino-triste.jpg');
            default:
                break;
        }
    }

    render() {
        return (
            <ImageBackground style={styles.bgImage} source={BG}>
                <EtAnimation
                    texts={[
                        { text: 'Olá! Você poderia me ajudar a identificar o que as pessoas a seguir estão sentindo?' },
                        { text: 'Vou te mostrar algumas imagens e você deverá selecionar a opção correta.' },
                        { text: 'Vamos lá!'}
                    ]}
                />
                <View style={styles.headerContainer}>
                    <Image style={styles.image} source={this.getImage(this.state.level.questions[0].image)} />
                    <Text style={styles.question}>{this.state.level.questions[this.state.indexQuestion].question.toUpperCase()}</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {this.showOptions(this.state.level.questions[this.state.indexQuestion].options).map(option =>
                        <View key={option.id} style={styles.option}>
                            <Button text={option.text} action={this.checkAnswer.bind(this, option.correct)} />
                        </View>
                    )}
                </View>
            </ImageBackground>
        );
    }
}