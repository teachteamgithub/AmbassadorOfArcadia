import React, { Component } from "react";
import { Router, Scene, Stack } from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';

export default class Routes extends Component {
    render() {
        return (
            <Router
                navigationBarStyle={{ backgroundColor: '#115e54' }}
                titleStyle={{ color: '#fff' }}
            >
                <Stack>
                    <Scene key='homeScreen' component={HomeScreen} hideNavBar />
                </Stack>
            </Router>
        );
    }
}
