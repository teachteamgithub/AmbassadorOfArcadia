/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Text,
  Alert
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import ButtonSquare from '../../components/ButtonWithImage';
import recognitionOfEmotionsGroup from '../../data/levels/recognitionOfEmotionsGroup.json';
import Button from '../../components/Button';

const BACKGROUND = require('../../assets/images/bg-2.png');
const MASK = require('../../assets/images/crop_image.png');

class EmotionalRecognitionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: 1,
          image: MASK,
          punctuation: 0
        },
        {
          id: 2,
          image: MASK,
          punctuation: 0
        },
        {
          id: 3,
          image: MASK,
          punctuation: 0
        },
        {
          id: 4,
          image: MASK,
          punctuation: 0
        }
      ],
      emotionalRecognitionGroup: recognitionOfEmotionsGroup,
      takePicktureVisible: true,
      instructionVisible: false,
      questionVisible: false,
      finalRoundVisible: false,
      finalLevelVisible: false,
      indexQuestion: 0,
      isPlayer: 0,
    }
  }

  componentWillMount() {
    this.shuffleQuestions();
  }

  getImage(question) {
    switch (question) {
      case 1:
        return require('../../assets/images/levels/emotionalRecognition/levelOne/man-astonished.png');
      case 2:
        return require('../../assets/images/levels/emotionalRecognition/levelOne/man-happy.png');
      case 3:
        return require('../../assets/images/levels/emotionalRecognition/levelOne/man-rage.png');
      case 4:
        return require('../../assets/images/levels/emotionalRecognition/levelOne/man-sad.png');
      case 5:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/man-astonished.png');
      case 6:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/man-happy.png');
      case 7:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/man-rage.png');
      case 8:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/man-sad.png');
      case 9:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-astonished.png');
      case 10:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-happy-2.png');
      case 11:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-happy.png');
      case 12:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-rage.png');
      case 13:
        return require('../../assets/images/levels/emotionalRecognition/levelTwo/woman-sad.png');
    }
  }

  // eslint-disable-next-line no-undef
  takePicture = async id => {
    if (this.camera) {
      const options = {
        quality: 0.2,
        fixOrientation: true,
        mirrorImage: false,
      };
      const data = await this.camera.takePictureAsync(options);
      let players = await this.state.players.map(player =>
        player.id === id ? { ...player, image: { uri: `${data.uri}` } } : player
      );
      await this.setState({ players });
    }
  }

  getCorrectOption(options) {
    let c = '';
    for (let option of options) {
      if (option.correct) {
        c = option.text
      }
    }
    return c;
  }

  renderFinalRound() {
    if (this.state.finalRoundVisible) {
      let { emotionalRecognitionGroup, indexQuestion } = this.state;
      let questions = emotionalRecognitionGroup.questions;
      let questionsLen = emotionalRecognitionGroup.questions.length - 1;
      return (
        <View style={styles.container}>
          <View style={styles.containerImagePlayer}>
            <Image style={styles.imagePlayer} source={this.getImage(questions[indexQuestion].image, this.state.onTheLevel)} />
          </View>
          <View style={styles.containerTitleInstructions}>
            <Text style={styles.subtitleInstructions}>A emoção correta é:</Text>
            <Text style={styles.titleInstructions}>{this.getCorrectOption(questions[indexQuestion].options)}</Text>
            <Text style={styles.textInstruction}>(Mostre para seus amigos)</Text>
          </View>
          <View style={styles.containerButtonInstructions}>
            <ButtonSquare
              size={'big'}
              text={indexQuestion >= questionsLen ? 'Ver Pontuação' : 'Próximo Rodada'}
              action={this.finishRound.bind(this)}
            />
          </View>
        </View>
      );
    }
  }

  finishRound() {
    let { indexQuestion, emotionalRecognitionGroup } = this.state;
    let questionsLen = emotionalRecognitionGroup.questions.length - 1;
    if (indexQuestion >= questionsLen) {
      this.finalizedLevel();
    } else {
      this.nextQuestion();
      this.start();
    }
  }

  checkAnswer(isCorrect) {
    Alert.alert(
      'Parabéns',
      'Aguarde o final da rodada para saber a resposta correta.',
      [
        {
          text: 'Ok', onPress: () => {
            if (isCorrect) {
              this.addHit(this.state.players[this.state.isPlayer].id);
            }
            this.nextPlayer();
            if (this.state.isPlayer === 0) {
              this.setState({
                instructionVisible: false,
                questionVisible: false,
                finalRoundVisible: true
              });
            } else {
              this.start();
            }
          }
        },
      ],
      { cancelable: false }
    );
  }

  nextPlayer() {
    this.setState({ isPlayer: ((this.state.isPlayer + 1) % 4) });
  }

  addHit(id) {
    let players = this.state.players.map(player => player.id === id ? { ...player, punctuation: player.punctuation + 1 } : player);
    this.setState({ players });
  }

  finalizedLevel() {
    this.setState({
      questionVisible: false,
      finalRoundVisible: false,
      finalLevelVisible: true
    });
  }

  shuffleQuestions() {
    this.shuffle(this.state.emotionalRecognitionGroup.questions);
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
    let { indexQuestion } = this.state;
    this.setState({
      indexQuestion: indexQuestion + 1
    });
  }

  showOptions(options) {
    return this.shuffle(options);
  }

  start() {
    this.setState({
      takePicktureVisible: false,
      questionVisible: false,
      finalRoundVisible: false,
      instructionVisible: true
    });
  }

  showQuestion() {
    this.setState({ instructionVisible: false, questionVisible: true });
  }

  renderFinalLevel() {
    let { finalLevelVisible, players } = this.state;
    if (finalLevelVisible) {
      return (
        <View style={styles.container}>
          <View style={styles.containerTitleFinalLevel}>
            <Text style={styles.titleInstructions}>Pontuação Final</Text>
          </View>
          <View style={styles.containerPunctuation}>
            {players.map(player =>
              <View key={player.id} style={styles.containerPlayer}>
                <Image source={player.image} style={styles.imagePlayerPunctuation} />
                <Text style={styles.textPunctuation}>{player.punctuation} Pontos</Text>
              </View>
            )}
          </View>
          <View style={styles.buttonExit}>
            <ButtonSquare
              size={'big'}
              text={'Sair'}
              action={Actions.pop.bind(this)}
            />
          </View>
        </View>
      );
    }
  }

  renderInstruction() {
    if (this.state.instructionVisible) {
      let { players } = this.state;
      return (
        <View style={styles.container}>
          <View style={styles.containerImagePlayer}>
            <Image style={styles.imagePlayer} source={players[this.state.isPlayer].image} />
          </View>
          <View style={styles.containerTitleInstructions}>
            <Text style={styles.titleInstructions}>Agora é a sua vez!</Text>
            <Text style={styles.textInstruction}>(Passe o celular para a pessoa da foto)</Text>
          </View>
          <View style={styles.containerButtonInstructions}>
            <ButtonSquare
              size={'big'}
              text={'Iniciar'}
              action={this.showQuestion.bind(this)}
            />
          </View>
        </View>
      );
    }
  }

  renderTakePicture() {
    if (this.state.takePicktureVisible) {
      return (
        <View style={styles.container}>
          <View style={styles.containerPreview}>
            <RNCamera
              ref={camera => this.camera = camera}
              style={styles.camera}
              type={RNCamera.Constants.Type.back}
              ratio='4:3'
              autoFocus={RNCamera.Constants.AutoFocus.on}
              flashMode={RNCamera.Constants.FlashMode.auto}
              permissionDialogTitle={'Permissão para usar a câmera'}
              permissionDialogMessage={'É necessário sua permissão para usar a câmera'}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>Tire sua foto e dos seus amigos</Text>
          </View>
          <View style={styles.containerPhotos}>
            {this.state.players.map(player =>
              <TouchableWithoutFeedback
                key={player.id}
                onPress={() => this.takePicture(player.id)}>
                <Image
                  source={player.image}
                  style={styles.playerImage} />
              </TouchableWithoutFeedback>
            )}
          </View>
          <View style={styles.containerButton}>
            <ButtonSquare
              size={'big'}
              text={'Iniciar'}
              action={this.start.bind(this)}
            />
          </View>
        </View>
      );
    }
  }

  renderQuestions() {
    if (this.state.questionVisible) {
      let { emotionalRecognitionGroup, indexQuestion } = this.state;
      let questions = emotionalRecognitionGroup.questions;
      return (
        <View style={styles.container}>
          <View style={styles.headerContainerGame}>
            <Image style={styles.imageGame} resizeMode={'cover'} source={this.getImage(questions[indexQuestion].image, this.state.onTheLevel)} />
            <Text style={styles.questionGame}>{questions[indexQuestion].question.toUpperCase()}</Text>
          </View>
          <View style={styles.optionsContainerGame}>
            {this.showOptions(questions[indexQuestion].options).map(option =>
              <View key={option.id} style={styles.optionGame}>
                <Button text={option.text} action={this.checkAnswer.bind(this, option.correct)} />
              </View>
            )}
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <ImageBackground source={BACKGROUND} style={styles.imageBackground}>
        {this.renderTakePicture()}
        {this.renderInstruction()}
        {this.renderQuestions()}
        {this.renderFinalRound()}
        {this.renderFinalLevel()}
      </ImageBackground>
    );
  }
}

export default EmotionalRecognitionGroup;