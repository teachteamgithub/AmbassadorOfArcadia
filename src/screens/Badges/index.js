import React, { PureComponent } from 'react';
import { ImageBackground, View, AsyncStorage } from 'react-native';

import Button from '../../components/PressButtonAnimationComponent';
import Modal from '../../components/ModalBadge';
import styles from './styles';

const BG = require('../../assets/images/bg-2.png');

const badges = {
    disable: [
        require('../../assets/images/bagdes/1-disable.png'),
        require('../../assets/images/bagdes/2-disable.png'),
        require('../../assets/images/bagdes/3-disable.png'),
        require('../../assets/images/bagdes/4-disable.png'),
        require('../../assets/images/bagdes/5-disable.png'),
        require('../../assets/images/bagdes/6-disable.png'),
    ],
    eneable: [
        require('../../assets/images/bagdes/1.png'),
        require('../../assets/images/bagdes/2.png'),
        require('../../assets/images/bagdes/3.png'),
        require('../../assets/images/bagdes/4.png'),
        require('../../assets/images/bagdes/5.png'),
        require('../../assets/images/bagdes/6.png'),
    ]
};

export default class BadgesScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isModal: 1,
            badges: {},
            title: ''
        };
    }

    componentDidMount() {
        this.configData();
    }

    async configData() {
        let str = await AsyncStorage.getItem('badges');
        await this.setState({ badges: JSON.parse(str)})
    }

    setModalVisible(value, title) {
        this.setState({ modalVisible: !this.state.modalVisible, isModal: value, title });
    }

    setTitle(isEneable) {
        isEneable === 'eneable' ? this.setState({ title: 'Conquistado' }) : '';
    }

    render() {
        return (
            <ImageBackground source={BG} style={styles.imageBackground}>
                <Modal
                    badge={this.state.isModal}
                    show={this.state.modalVisible}
                    onClose={() => this.setModalVisible(this.state.isModal)}
                    title={this.state.title}/>
                <View style={styles.container}>
                    <View style={styles.badges}>
                        <Button
                            image={this.state.badges.badgesOne === 'disable' ? badges.disable[0] : badges.eneable[0]}
                            width={100}
                            height={100}
                            actionPress={
                                this.setModalVisible.bind(
                                    this,
                                    1,
                                    this.setTitle(this.state.badges.badgesOne))}
                        />
                    </View>
                    <View style={styles.badges}>
                        <Button
                            image={this.state.badges.badgesTwo === 'disable' ? badges.disable[1] : badges.eneable[1]}
                            width={100}
                            height={100}
                            actionPress={this.setModalVisible.bind(this, 2, this.setTitle(this.state.badges.badgesTwo))}
                        />
                    </View>
                    <View style={styles.badges}>
                        <Button
                            image={this.state.badges.badgesThree === 'disable' ? badges.disable[2] : badges.eneable[2]}
                            width={100}
                            height={100}
                            actionPress={this.setModalVisible.bind(this, 3, this.setTitle(this.state.badges.badgesThree))}
                        />
                    </View>
                    <View style={styles.badges}>
                        <Button
                            image={this.state.badges.badgesFour === 'disable' ? badges.disable[3] : badges.eneable[3]}
                            width={100}
                            height={100}
                            actionPress={this.setModalVisible.bind(this, 4, this.setTitle(this.state.badges.badgesFour))}
                        />
                    </View>
                    <View style={styles.badges}>
                        <Button
                            image={this.state.badges.badgesFive === 'disable' ? badges.disable[4] : badges.eneable[4]}
                            width={100}
                            height={100}
                            actionPress={this.setModalVisible.bind(this, 5, this.setTitle(this.state.badges.badgesFive))}
                        />
                    </View>
                    <View style={styles.badges}>
                        <Button
                            image={this.state.badges.badgesSix === 'disable' ? badges.disable[5] : badges.eneable[5]}
                            width={100}
                            height={100}
                            actionPress={this.setModalVisible.bind(this, 6, this.setTitle(this.state.badges.badgesSix))}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
