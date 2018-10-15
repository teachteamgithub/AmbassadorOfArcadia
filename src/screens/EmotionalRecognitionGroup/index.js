import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Image,
    TouchableWithoutFeedback,
    Text
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';

import styles from './styles';
import Button from '../../components/ButtonWithImage';
import { changePlayers } from '../../actions/EmotionalRecognitionGroupAction';

const BACKGROUND = require('../../assets/images/bg-2.png');

class EmotionalRecognitionGroup extends Component {
    takePicture = async id => {
        if (this.camera) {
            const options = {
                quality: 0.5,
                base64: true,
                doNotSave: false,
                fixOrientation: true,
                mirrorImage: true
            };
            const data = await this.camera.takePictureAsync(options);
            let players = this.props.players.map(player => player.id === id ? { ...player, image: { uri: `data:image/jpeg;base64,${data.base64}` } } : player);
            this.props.changePlayers(players);
        }
    }

    verify() {

    }

    render() {
        return (
            <ImageBackground source={BACKGROUND} style={styles.imageBackground}>
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
                        <Text style={styles.text}>Tire sua foto e dos seus colegas</Text>
                    </View>
                    <View style={styles.containerPhotos}>
                        {this.props.players.map(player =>
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
                        <Button style={styles.button} text='Iniciar' />
                    </View>
                </View>
            </ImageBackground >
        );
    }
}

const mapStateToProps = state => ({
    players: state.EmotionalRecognitionGroupReducer.players
});

export default connect(
    mapStateToProps,
    {
        changePlayers
    }
)(EmotionalRecognitionGroup);