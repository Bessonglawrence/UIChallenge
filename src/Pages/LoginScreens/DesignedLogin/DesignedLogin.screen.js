import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './DesignedLogin.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DesignedLogin = () => {
    return(
        <View style={styles.mainContainer}>
            <Text style={{alignSelf: 'center', fontSize: 27, color: 'white', marginTop: 15}}> Sign In </Text>
            <Icon
                name="guitar-pick"
                color="white"
                size={100}
                style={{alignSelf: 'center', marginVertical: 30}} 
            />
            <View style={{ marginTop: 10, marginBottom: 8}}>
                <View style={{flexDirection: 'row', padding: 8, borderColor: 'white', borderRadius: 30, marginVertical: 10, backgroundColor: 'rgba(238,238,238,0.3)'}}>
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
                <View style={{flexDirection: 'row', padding: 8, borderColor: 'white', borderRadius: 30, marginVertical: 10, backgroundColor: 'rgba(238,238,238,0.3)'}}>
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

            <View style={{flexDirection: 'row', borderWidth: .5, padding: 13, borderColor: 'white', borderRadius: 30, marginTop: 40, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity>
                    <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}> Sign In </Text>
                </TouchableOpacity>
            </View>

            <Text style={{alignSelf:"center", color: 'white', fontSize: 18, marginVertical: 8}}> Forgot Password?</Text>

            <View style={{flexDirection: 'row', borderWidth: .5, padding: 13, borderColor: 'white', borderRadius: 30, marginTop: 4, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity>
                    <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}> Create Account </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default DesignedLogin;