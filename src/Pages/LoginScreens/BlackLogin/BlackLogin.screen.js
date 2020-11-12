import React, { Component } from 'react';
import { View , Text, ScrollView, CheckBox } from 'react-native';
import Input from './../../../components/Input/Input.component';
import ButtonComponent from './../../../components/Button/Button.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import styles from './BlackLogin.style'

class BlackLogin extends Component {
    render(){
        return (
            <ScrollView contentContainerStyle={{flex: 1, backgroundColor: 'white', justifyContent:'center', paddingHorizontal: 15, paddingVertical: 30,}}>
                <Icon
                    name="download"
                    color="lightblue"
                    size={90}
                    style={{alignSelf: 'center'}} 
                />
                <View style={{marginLeft: 13, marginBottom: 9}}>
                    <Text style={{fontSize: 30, color: 'grey'}}>
                        Welcome back,
                    </Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>
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
               <View style={{flexDirection: 'row'}}>
                   <View style={{flexDirection: 'row'}}>
                        <CheckBox />
                        <Text style={{fontSize: 15, marginTop: 3, color: 'grey'}}>Remember me</Text>
                   </View>
                   <Text style={{marginLeft: 51, marginTop: 2, fontSize: 16, color: 'lightblue'}}>Forgot Password?</Text>
               </View>
               <ButtonComponent>
                   <Text style={{color: 'white', fontSize: 20}}>
                       Sign In
                   </Text>
                </ButtonComponent>
                <Text style={{color: 'grey', fontSize: 16, alignSelf: 'center', marginVertical: 5}}>
                    Don't have an Account yet?
                </Text>
                <View style={{borderColor: 'lightblue', borderWidth: 1, borderRadius: 3, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', height: 47, width: '92%', marginVertical: 10}}>
                    <Text style={{color: 'lightblue', fontSize: 18}}>
                        Create Account
                    </Text>
                </View>
                <Text style={{fontSize: 18, textDecorationLine: 'underline', alignSelf: 'center', }}>
                    Terms and Conditions
                </Text>
            </ScrollView>
        );
    }
}

export default BlackLogin;