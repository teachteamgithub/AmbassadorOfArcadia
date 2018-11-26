import React, { Component } from "react";
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from './screens/Home';
import LevelsScreen from './screens/Levels';
import BadgesScreen from './screens/Badges';
import EmotionalRecognition from './screens/EmotionalRecognition';
import DragAndDrop from './screens/DragAndDrop';
import GetChildInfo from './screens/GetChildInfo';
import Presentation from './screens/Presentation';
import ERG from './screens/EmotionalRecognitionGroup';

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
                            title='JOGAR'
                            component={LevelsScreen}
                            iconName='gamepad-variant'
                            tabBarIcon={IconTab}
                            drawerIcon={IconTab}
                        />
                        <Scene
                            hideNavBar
                            key="badgeScreen"
                            title="CONQUISTAS"
                            iconName='trophy'
                            component={BadgesScreen}
                            icon={IconTab}
                        />
                    </Tabs>
                    <Scene key='erg' component={ERG} hideNavBar />
                    <Scene key='presentation' component={Presentation} hideNavBar />
                    <Scene key='emotionalRecognition' component={EmotionalRecognition} hideNavBar />
                    <Scene key='getChildInfo' component={GetChildInfo} hideNavBar />
                    <Scene key='dragAndDrop' component={DragAndDrop} hideNavBar />
                </Stack>
            </Router >
        );
    }
}
