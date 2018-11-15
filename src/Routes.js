import React, { Component } from "react";
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import HomeScreen from './screens/Home';
import LevelsScreen from './screens/Levels';
import BadgesScreen from './screens/BadgesScreen';
import EmotionalRecognitionScreen from './screens/EmotionalRecognitionScreen';
import EmotionalRecognition from './screens/EmotionalRecognition';
import EtAnimation from './components/EtAnimation';
import ButtonSquareWithPressEffect from './components/ButtonSquareWithPressEffect';
import ModalBox from './components/ModalBox';
import ButtonWithImage from './components/ButtonWithImage';
import DragAndDrop from './screens/DragAndDrop';
import GetChildInfo from './screens/GetChildInfo';
import Presentation from './screens/Presentation';
import Button from './components/Button';

const IconTab = ({ focused, iconName }) => {
    return (
        <Icon
            size={23}
            color={focused ? '#fff' : '#aaa'}
            name={iconName}
        />
    );
}

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack>
                    <Scene key='presentation' component={Presentation} hideNavBar />
                    <Scene key='emotionalRecognition' component={EmotionalRecognition} hideNavBar />
                    <Scene key='button' component={Button} hideNavBar />
                    <Scene key='homeScreen' component={HomeScreen} hideNavBar />
                    <Tabs
                        key='tabView'
                        hideNavBar
                        showLabel={true}
                        lazy={false}
                        showIcon={true}
                        activeTintColor={'#fff'}
                        tabBarStyle={{
                            backgroundColor: '#1e203d',
                            padding: 5
                        }}
                        labelStyle={{ fontSize: 12 }}
                        upperCaseLabel
                        tabBarPosition={'bottom'}>
                        <Scene
                            hideNavBar
                            key='levelScreen'
                            title='Aprenda'
                            component={LevelsScreen}
                            iconName='gamepad-variant'
                            tabBarIcon={IconTab}
                            drawerIcon={IconTab}
                        />
                        <Scene
                            hideNavBar
                            key="badgeScreen"
                            title="Conquistas"
                            iconName='trophy'
                            component={BadgesScreen}
                            icon={IconTab}
                        />
                    </Tabs>
                    <Scene key='getChildInfo' component={GetChildInfo} hideNavBar />
                    <Scene key='dragAndDrop' component={DragAndDrop} hideNavBar />
                    <Scene key='modalBox' component={ModalBox} hideNavBar />
                    <Scene key='etAnimation' component={EtAnimation} hideNavBar />
                    <Scene key='buttonWithImage' component={ButtonWithImage} hideNavBar />
                    <Scene key='buttonSquareWithPressEffect' component={ButtonSquareWithPressEffect} hideNavBar />
                    <Scene key='emotionalRecognitionScreen' component={EmotionalRecognitionScreen} hideNavBar />
                </Stack>
            </Router >
        );
    }
}
