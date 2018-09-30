import React, { Component } from "react";
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import HomeScreen from './screens/HomeScreen';
import LevelsScreen from './screens/LevelsScreen';
import BadgesScreen from './screens/BadgesScreen';
import EmotionalRecognitionScreen from './screens/EmotionalRecognitionScreen';
import EmotionalRecognition from './screens/EmotionalRecognition'
import EtAnimation from './components/EtAnimation'

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
                    <Scene key='etAnimation' component={EtAnimation} hideNavBar />
                    <Scene key='emotionalRecognition' component={EmotionalRecognition} hideNavBar/>
                    <Scene key='homeScreen' component={HomeScreen} hideNavBar />
                    <Scene key='emotionalRecognitionScreen' component={EmotionalRecognitionScreen} hideNavBar />
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
                </Stack>
            </Router >
        );
    }
}
