import React, {Component} from 'react';
import {Router, Stack, Scene,} from 'react-native-router-flux'; 

import {
    AppHome,
    Example, 
    RentFlicker,
    SocialApp,
    MiniLogin,
    RoundLogin,
    SmartLogin,
    BlackLogin,
    TabLogin,
    DesignedLogin,
    ProfileScreens,
    LoginHome,
    RegisterScreens,
    RoundRegister,
    BlackRegister,
    SmartRegister,
    SettingsHome,
    CardsSetting,
    WhiteSetting,
    ProfileHome,
    PlainProfile,
    PurpleProfile,
} from './../Pages';
import {
    TabIcon 
} from './../components';


class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                <Scene key="rentflicker" component={ RentFlicker } hideNavBar />
                <Scene key="minilogin" component={ MiniLogin } hideNavBar />
                <Scene key="roundLogin" component={ RoundLogin } hideNavBar/>
                <Scene key="smartlogin" component={ SmartLogin } hideNavBar />
                <Scene key="blacklogin" component={ BlackLogin } hideNavBar />
                <Scene key="tablogin" component={ TabLogin } hideNavBar />
                <Scene key="roundregister" component={ RoundRegister } hideNavBar />
                <Scene key="blackregister" component={ BlackRegister } hideNavBar />
                <Scene key="socialapp" component={ SocialApp } hideNavBar />
                <Scene key="plainprofile" component={ PlainProfile } hideNavBar />
                <Scene key="smartregister" component={ SmartRegister } hideNavBar />
                <Scene key="cardsetting" component={ CardsSetting } hideNavBar />
                <Scene key="whitesetting" component={ WhiteSetting } hideNavBar />
                <Scene key="designedlogin" component={ DesignedLogin } hideNavBar />
                <Scene key="purpleprofile" component={ PurpleProfile } hideNavBar />
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
                        <Scene key="home" component={ AppHome } title="Homes" icon={ TabIcon } hideNavBar /> 
                        <Scene key="profile" component={ ProfileHome } title="Profiles" icon={ TabIcon } hideNavBar />
                        <Scene key="login" component={ LoginHome } title="Logins" icon={ TabIcon } hideNavBar />
                        <Scene key="settings" component={ SettingsHome } title="Settings" icon={ TabIcon } hideNavBar />
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

export default Navigation;