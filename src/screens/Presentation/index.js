import React, { PureComponent } from 'react';
import {
    ImageBackground,
    View,
    Text,
    AsyncStorage,
    Alert
} from 'react-native';

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
            hits: 0,
            showEt: false,
            showModalSuccess: false,
            showModalFail: false,
            indexQuestion: 0,
            level: [],
            name: 'Carlos',
            age: '12',
            eyes: 'Preta',
            hairColor: 'Preto',
            hairSize: 'Curto'
        }
    }

    componentWillMount() {
        this.getLevel();
        this.configQuestions();
        this.setInfoChild();
    }

    async setInfoChild() {
        let childInfo = await AsyncStorage.getItem('childInfo');
        childInfo = await JSON.parse(childInfo);
        this.setState({
            name: childInfo.name + '',
            age: childInfo.age + '',
            eyes: childInfo.eyes + '',
            hairColor: childInfo.hairColor + '',
            hairSize: childInfo.hairColor + ''
        });
    }

    getPresentationQuestions() {
        const { name, age, eyes, hairColor, hairSize } = this.state;
        let level = [
            {
                id: 1,
                question: 'Como você deve dizer seu nome para outras crianças?',
                options: [
                    {
                        id: 1,
                        text: `Olá, meu nome é ${name}. É um prazer te conhecer`,
                        isCorrect: true
                    },
                    {
                        id: 2,
                        text: `Oi! Vamos brincar de bola?`,
                        isCorrect: false
                    }
                ]
            },
            {
                id: 2,
                question: 'Como você conta a sua idade para as outras crianças?',
                options: [
                    {
                        id: 1,
                        text: `Oi, meu nome é ${name} e eu tenho ${age} anos`,
                        isCorrect: true
                    },
                    {
                        id: 2,
                        text: `Oi! Eu tenho cabelos de cor ${hairColor}`,
                        isCorrect: false
                    }
                ]
            },
            {
                id: 3,
                question: 'Como você descreveria a cor dos seus olhos para outra criança?',
                options: [
                    {
                        id: 1,
                        text: `Eu tenho olhos de cor ${eyes}`,
                        isCorrect: true
                    },
                    {
                        id: 2,
                        text: `Oi! Eu tenho um cabelo ${hairSize}`,
                        isCorrect: false
                    }
                ]
            },
            {
                id: 4,
                question: 'Como você descreveria o seu cabelo para as outras crianças?',
                options: [
                    {
                        id: 1,
                        text: `Eu tenho um cabelo ${hairSize} e de cor ${hairColor}`,
                        isCorrect: true
                    },
                    {
                        id: 2,
                        text: `Oi! Eu tenho olhos de cor ${eyes}`,
                        isCorrect: false
                    }
                ]
            },
            {
                id: 5,
                question: 'Como você se apresentaria para as outras crianças?',
                options: [
                    {
                        id: 1,
                        text: `Oi, meu nome é ${name}, eu tenho ${age} anos e tenho um cabelo ${hairSize}`,
                        isCorrect: true
                    },
                    {
                        id: 2,
                        text: `Oi! Vamos fazer um desenho?`,
                        isCorrect: false
                    }
                ]
            }
        ];
        this.setState({ level });
    }

    async getLevel() {
        let lvl = await AsyncStorage.getItem('levelOne');
        await this.setState({ 
            onTheLevel: parseInt(lvl),
            showEt: true
        });
    }

    async configQuestions() {
        await this.getPresentationQuestions();
        await this.shuffleQuestions();
    }

    shuffleQuestions() {
        this.shuffle(this.state.level);
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
                    content='Aprendi muito, mas ainda tenho dúvidas. Jogue novamente!'
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
                    et={1}
                    texts={[
                        { text: `Oi, Preciso da sua ajuda!` },
                        { text: 'Aqui na Terra tem muitas pessoas que eu não conheço.' },
                        { text: 'Eu queria poder fazer amizade com essas pessoas' },
                        { text: 'Mas eu não sei como conversar com elas' },
                        { text: 'Você pode me ajudar a entender qual a melhor forma de me apresentar para elas?' },
                        { text: 'Vamos lá!' }
                    ]}
                />
            );
        }
        if (this.state.onTheLevel === 1 && this.state.showEt) {
            return (
                <EtAnimation
                    et={2}
                    texts={[
                        { text: 'Olá! Você pode me ajudar?' },
                        { text: 'Meu irmão me contou que você ajudou ele a conhecer novos amigos' },
                        { text: 'Eu também não sei como me apresentar para as outras pessoas' },
                        { text: 'Você pode me ajudar?' },
                    ]}
                />
            );
        }
        if (this.state.onTheLevel === 2 && this.state.showEt) {
            return (
                <EtAnimation
                    et={3}
                    texts={[
                        { text: 'Olá meu amigo! Tudo bem?' },
                        { text: 'Meus irmãos me contaram que você é uma pessoa muito legal' },
                        { text: 'Que você gosta de ajudar sempre quando pode' },
                        { text: 'E eu estou precisando de uma ajuda' },
                        { text: 'Você pode me ajudar a fazer novos amigos?' },
                        { text: 'Vamos lá!' },
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
        let { indexQuestion, level } = this.state;
        let questionsLen = level.length - 1;
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
                'Tenho a impressão que esta não é a resposta correta, tente novamente.',
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

    getSelectQuestions() {
        return (
            <View>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>{this.state.level[this.state.indexQuestion].question}</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {this.showOptions(this.state.level[this.state.indexQuestion].options).map(option =>
                        <Button
                            key={option.id}
                            text={option.text}
                            textSize={'small'}
                            action={this.checkAnswer.bind(this, option.isCorrect)}
                        />
                    )}
                </View>
            </View>
        );
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
