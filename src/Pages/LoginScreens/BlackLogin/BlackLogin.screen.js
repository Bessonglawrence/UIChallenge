import React, { Component } from 'react';
import { View , Text, ScrollView, CheckBox } from 'react-native';
import Input from './../../../components/Input/Input.component';
import ButtonComponent from './../../../components/Button/Button.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import styles from './BlackLogin.style';

const onButtonPress = () => {
    Actions.pop()
}

class BlackLogin extends Component {

    render(){
        return (
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <Icon
                    name="download"
                    color="#1297a6"
                    size={90}
                    style={{alignSelf: 'center'}} 
                />
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>
                        Welcome back,
                    </Text>
                    <Text style={styles.subHeaderText}>
                        Sign in to Continue
                    </Text>
                </View>
               <Input 
                    lable="Username"
                    placeholder="enter name ..."
                    icon="account"
               />
                <Input 
                    secureTextEntry
                    lable="Password"
                    placeholder="enter password ..."
                    icon="lock"
                    passwordiconlocked="eye-outline"
                    passwordiconunlocked="eye-off-outline"
               />
               <View style={styles.checkView}>
                   <View style={styles.checkBoxView}>
                        <CheckBox />
                        <Text style={styles.rememberText}>Remember me</Text>
                   </View>
                   <Text style={styles.forgotPassword}>Forgot Password?</Text>
               </View>
               <ButtonComponent>
                   <Text style={styles.signIn} onPress={onButtonPress}>
                       Sign In
                   </Text>
                </ButtonComponent>
                <Text style={styles.accountYet}>
                    Don't have an Account yet?
                </Text>
                <View style={styles.createButton}>
                    <Text style={styles.createText} onPress={() => Actions.blackregister()} >
                        Create Account
                    </Text>
                </View>
                <Text style={styles.terms}>
                    Terms and Conditions
                </Text>
            </ScrollView>
        );
    }
}

export default BlackLogin;