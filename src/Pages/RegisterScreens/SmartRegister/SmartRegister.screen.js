import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SmartRegister.style'
import { Actions } from 'react-native-router-flux';

const SmartRegister = () => {
    return (
        <ScrollView contentContainerStyle={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
            <View style={styles.icon}>
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
                    <Text style={styles.sectionHeader}>
                        Create Account
                    </Text>
                    <TextInput 
                        placeholder="Email or Username"
                        style={{paddingVertical: 20, fontSize: 17}}
                        placeholderTextColor="#09c1f6"
                    />
                    <TextInput 
                        placeholder="Password"
                        style={{paddingVertical: 20, fontSize: 17}}
                        placeholderTextColor="#09c1f6"
                        
                    />
                    <TextInput 
                        placeholder="Confirm Password"
                        style={{paddingVertical: 20, fontSize: 17}}
                        placeholderTextColor="#09c1f6"
                        
                    />
                    <TouchableOpacity 
                        style={styles.loginText}
                        onPress={() => Actions.pop()}
                    >
                        <Text style={{color: 'white', fontSize: 18}}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.or}>
                        OR
                    </Text>
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 5}}>
                        <TouchableOpacity style={styles.facebook}>
                            <Text style={styles.socialSymbols}>
                                f
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.google}>
                            <Text style={styles.socialSymbols}>
                                G+
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default SmartRegister;
