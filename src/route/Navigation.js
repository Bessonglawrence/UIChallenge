import React, {Component} from 'react';
import {Router, Stack, Scene,} from 'react-native-router-flux'; 

import {
    AppHome,
    Example, 
    SplashScreens,
    ProfileScreens,
    LoginScreens,
    RegisterScreens,
    SettingScreens,
} from './../Pages';
import {
    TabIcon 
} from './../components';


class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene 
                        key="home"
                        tabs
                        tabBarPosition="bottom"
                        showLabel={ true }
                        activeTintColor="#000"
                        hideTabBar={ false }
                        hideNavBar={ true }
                        labelStyle={ { fontWeight: 'bold', } }
                        initial
                    >
                        <Scene key="home" component={ AppHome } title="Homes"  icon={ TabIcon } hideNavBar />
                        <Scene key="profile" component={ Example } title="Profiles" icon={ TabIcon } hideNavBar />
                        <Scene key="login" component={ Example } title="Logins" icon={ TabIcon } hideNavBar />
                        <Scene key="settings" component={ Example } title="Settings" icon={ TabIcon } hideNavBar />
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

export default Navigation;