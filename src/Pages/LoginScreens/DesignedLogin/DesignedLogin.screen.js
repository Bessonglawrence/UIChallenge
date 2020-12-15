import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './DesignedLogin.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DesignedLogin = () => {
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.headerText}> Sign In </Text>
            <Icon
                name="guitar-pick"
                color="white"
                size={100}
                style={{alignSelf: 'center', marginVertical: 30}} 
            />
            <View style={{ marginTop: 10, marginBottom: 8}}>
                <View style={styles.inputSections}>
                    <Icon
                        name='account-circle'
                        size={30}
                        color="white" 
                        style={{marginTop: 4, marginRight: 8, marginLeft: 6}}
                    />
                    <TextInput
                        placeholder="Name / Email"
                        placeholderTextColor="white" 
                        style={{fontSize: 18}}
                    />
                </View>
                <View style={styles.inputSections}>
                    <Icon
                        name='lock'
                        size={30}
                        color="white" 
                        style={{marginTop: 4, marginRight: 8, marginLeft: 6}}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="white" 
                        style={{fontSize: 18}}
                    />
                </View>


            </View>

            <View style={styles.signInButton}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}> Sign In </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.forgotPasswordText}> Forgot Password?</Text>

            <View style={styles.CreateAccountButton}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}> Create Account </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default DesignedLogin;