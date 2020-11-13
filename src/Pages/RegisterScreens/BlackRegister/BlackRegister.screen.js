import React, { Component } from 'react';
import { View , Text, ScrollView, CheckBox } from 'react-native';
import Input from './../../../components/Input/Input.component';
import ButtonComponent from './../../../components/Button/Button.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
//import styles from './BlackRegister.style'\

const onButtonPress = () => {
    Actions.pop()
}

class BlackRegister extends Component {

    render(){
        return (
            <ScrollView contentContainerStyle={{flex: 1, backgroundColor: 'white', justifyContent:'center', paddingHorizontal: 15, paddingVertical: 50}}>
                <Icon
                    name="download"
                    color="#1297a6"
                    size={90}
                    style={{alignSelf: 'center'}} 
                />
                <View style={{marginLeft: 13}}>
                    <Text style={{fontSize: 30, color: 'grey'}}>
                        Welcome,
                    </Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>
                        Create an Account to continue
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
               <Input 
                    secureTextEntry
                    lable="Confirm Password"
                    placeholder="Confirm password ..."
                    icon="lock"
                    passwordiconlocked="eye-outline"
                    passwordiconunlocked="eye-off-outline"
               />
                   <View style={{flexDirection: 'row'}}>
                        <CheckBox />
                        <Text style={{fontSize: 15, marginTop: 4, color: 'grey'}}>Remember me</Text>
                   </View>
               <ButtonComponent>
                   <Text style={{color: 'white', fontSize: 20}} onPress={onButtonPress}>
                       Register
                   </Text>
                </ButtonComponent>
                <Text style={{color: 'grey', fontSize: 16, alignSelf: 'center', marginBottom: 2}}>
                    Have an Account Already?
                </Text>
                <View style={{borderColor: '#14a9ba', borderWidth: 1, borderRadius: 3, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', height: 47, width: '92%'}}>
                    <Text style={{color: '#14a9ba', fontSize: 18}} onPress={onButtonPress} >
                        Sign In
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

export default BlackRegister;