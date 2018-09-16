import React, { Component } from "react";
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';
import LevelsScreen from './screens/LevelsScreen';
import BadgesScreen from './screens/BadgesScreen';

const IconTab = ({ focused, iconName }) => {
    return (
        <Icon
            size={23}
            color={focused ? 'red' : 'blue'}
            name={iconName}/>
    );
}

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack>
                    <Scene key='homeScreen' component={HomeScreen} hideNavBar/>
                    <Tabs
                        key="tabView"
                        hideNavBar
                        inactiveTintColor={'red'}
                        showLabel={true}
                        lazy={false}
                        showIcon={true}
                        indicatorStyle={'green'}
                        activeTintColor={'green'}
                        tabStyle={{backgroundColor: '#ffd'}}
                        tabBarStyle={{backgroundColor: '#ECF0F1', height: 54}}
                        labelStyle={{ fontSize: 12, padding: 0, marginTop: 0, marginBottom: 0 }}
                        tabBarPosition={'top'}>
                        <Scene
                            hideNavBar
                            key='levelScreen'
                            title='Aprenda'
                            component={LevelsScreen}
                            iconName='gamepad'
                            tabBarIcon={IconTab}
                            drawerIcon={IconTab}                            
                        />
                        <Scene
                            hideNavBar
                            key="badgeScreen"
                            title="Conquistas"
                            iconName='star'
                            component={BadgesScreen}
                            icon={IconTab}
                        />
                    </Tabs>
                </Stack>
            </Router >
        );
    }
}
