import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather'
import styles from './RoundRegister.style'

export default class RoundRegister extends Component {

    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.topTriangle}>

                </View>

                <Text style={styles.loginText}>
                    Register
                </Text>

                <View style={styles.inputView}>
                    <View style={styles.topInput}>
                        <Icon name="user" size={25} color="purple" style={{marginTop: 10, marginLeft: 15}} />
                        <TextInput
                            placeholder="john doe" 
                            style={{marginLeft: 10}}
                        />
                    </View>
                    <View style={styles.topInput}>
                        <Icon name="mail" size={25} color="purple" style={{marginTop: 10, marginLeft: 15}} />
                        <TextInput
                            placeholder="user@gmail.com" 
                            style={{marginLeft: 10}}
                        />
                    </View>
                    <View style={{flexDirection: 'row', alignSelf: 'center', width: '85%'}}>
                        <Icon name="lock" size={25} color="purple" style={{marginTop: 10,  marginLeft: 15}} />
                        <TextInput
                            placeholder="*******" 
                            style={{marginLeft: 10,}}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.loginCircle} onPress={() => Actions.pop()}>
                    <Icon name="arrow-right" color="white" size={24}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerView} onPress={() => Actions.roundLogin()}>
                    <Text style={styles.registerText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <View style={styles.bottomTriangle}>

                </View>
            </View>
        );
    }
}
