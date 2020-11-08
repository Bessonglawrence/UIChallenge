import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import styles from './SmartLogin.style'

const SmartLogin = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
            <View style={{backgroundColor: '#1934e6', height: 430, width: '100%', borderBottomLeftRadius: 65, borderBottomRightRadius: 65}}>
                <Icon
                    name="bento" 
                    color="white"
                    size={100} 
                    style={{alignSelf: 'center', marginTop: 25}}
                />
                <Text style={{color: 'white', fontSize: 18, alignSelf: 'center'}}>
                    Fill the below information to login
                </Text>
                <View style={styles.inputContainer}>
                    <Text style={{alignSelf: 'center', marginVertical: 15, fontSize: 18, color: '#187ae7', fontWeight: 'bold'}}>
                        Login Account
                    </Text>
                    <TextInput 
                        placeholder="Email or Username"
                        style={{paddingVertical: 20}}
                        placeholderTextColor="#09c1f6"
                    />
                    <TextInput 
                        placeholder="Password"
                        style={{paddingVertical: 20}}
                        placeholderTextColor="#09c1f6"
                    />
                    <TouchableOpacity style={{ height: 47, width: '90%', backgroundColor: '#187ae7', alignSelf: 'center', borderRadius: 4, alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
                        <Text style={{color: 'white', fontSize: 18}}>
                            LOG IN
                        </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginVertical: 8}}>
                        OR
                    </Text>
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 5}}>
                        <TouchableOpacity style={{backgroundColor:'#187ae7', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white'}}>
                                f
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'brown', paddingHorizontal: 8.5, paddingVertical: 6, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white'}}>
                                G+
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignSelf: 'center', top: 563, position: 'absolute'}}>
                    <Text style={{fontSize: 16, alignSelf: 'center'}}>
                        Don't have an Account ?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{alignSelf: 'center', color: '#187ae7', fontWeight: 'bold', fontSize: 18, textDecorationLine: 'underline'}}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default SmartLogin;

const styles =  StyleSheet.create({
    inputContainer:{
        backgroundColor: 'white', 
        height: 395, 
        width: 270, 
        position: 'absolute',  
        left: 48, 
        top: 145,
        borderColor: 'lightgrey',
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 15,
        borderRadius: 15,
        paddingHorizontal: 18,
        paddingVertical: 18
    }
})