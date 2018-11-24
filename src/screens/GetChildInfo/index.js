import React, { PureComponent } from 'react';
import {
    ImageBackground,
    View,
    Text,
    TextInput,
    Picker,
    AsyncStorage,
    Keyboard
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import Button from '../../components/ButtonWithImage';

const BG = require('../../assets/images/bg-2.png')

export default class GetChildInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            age: null,
            eyes: null,
            hairColor: null,
            hairSize: null
        }
    }

    componentWillMount() {
        this.configDatas();
    }

    async configDatas() {
        let info = await AsyncStorage.getItem('childInfo');
        if (info !== null) {
            let infoJson = await JSON.parse(info);
            await this.setState({ ...infoJson });
        }
    }

    async saveDatas() {
        let obj = {
            name: this.state.name,
            age: this.state.age,
            eyes: this.state.eyes,
            hairColor: this.state.hairColor,
            hairSize: this.state.hairSize
        }
        await AsyncStorage.setItem('childInfo', JSON.stringify(obj));
        Keyboard.dismiss();
        Actions.pop();
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={BG}>
                <View>
                    <Text style={styles.title}>Preencha algumas informações sobre a criança</Text>
                </View>
                <View style={styles.containerTextInputs}>
                    <Text style={styles.titleForTextInput}>Nome da criança:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                        keyboardShouldPersistTaps="handled"
                    />
                    <Text style={styles.titleForTextInput}>Idade da criança:</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={age => this.setState({ age })}
                        value={this.state.age}
                        keyboardShouldPersistTaps="handled"
                    />
                    <Text style={styles.titleForTextInput}>Cor dos olhos:</Text>
                    <View style={styles.selectInput}>
                        <Picker
                            mode={'dialog'}
                            selectedValue={this.state.eyes}
                            itemStyle={styles.textInput}
                            onValueChange={(itemValue, itemIndex) => this.setState({ eyes: itemValue })}>
                            <Picker.Item label="Preto" value="Preto" />
                            <Picker.Item label="Castanho" value="Castanho" />
                            <Picker.Item label="Azul" value="Azul" />
                            <Picker.Item label="Verde" value="Verde" />
                        </Picker>
                    </View>
                    <Text style={styles.titleForTextInput}>Cor dos cabelos:</Text>
                    <View style={styles.selectInput}>
                        <Picker
                            mode={'dialog'}
                            selectedValue={this.state.hairColor}
                            itemStyle={styles.textInput}
                            onValueChange={(itemValue, itemIndex) => this.setState({ hairColor: itemValue })}>
                            <Picker.Item label="Preto" value="Preto" />
                            <Picker.Item label="Loiro" value="Loiro" />
                            <Picker.Item label="Ruivo" value="Ruivo" />
                            <Picker.Item label="Castanhos" value="Castanhos" />
                        </Picker>
                    </View>
                    <Text style={styles.titleForTextInput}>Tamanho do cabelo:</Text>
                    <View style={styles.selectInput}>
                        <Picker
                            mode={'dialog'}
                            selectedValue={this.state.hairSize}
                            itemStyle={styles.textInput}
                            onValueChange={(itemValue, itemIndex) => this.setState({ hairSize: itemValue })}>
                            <Picker.Item label="Longo" value="Longo" />
                            <Picker.Item label="Curto" value="Curto" />
                        </Picker>
                    </View>
                    <View style={styles.buttons}>
                        <Button
                            size={'regular'}
                            text={'Cancelar'}
                            action={Actions.pop.bind(this)}
                        />
                        <Button
                            size={'regular'}
                            text={'Salvar'}
                            action={this.saveDatas.bind(this)}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}