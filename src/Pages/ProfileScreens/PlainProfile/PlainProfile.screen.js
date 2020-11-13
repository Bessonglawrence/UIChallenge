import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './PlainProfile.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'

const PlainProfile = () =>{
    return(
        <View style={styles.mainContainer}>
            <View>
                <Image 
                    source={require('./../../../../res/Images/Michael.jpg')}
                    style={{height: 90, width: 90, borderRadius: 70, alignSelf: 'center'}}
                />
                <TouchableOpacity>
                    <Text style={styles.editPhoto}>
                        Edit Photo
                    </Text>
                </TouchableOpacity>

                <View>
                    <View style={styles.nameSubView}>
                        <Text style={styles.nameText}>
                            Michael
                        </Text>
                    </View>
                    <View style={styles.nameSubView}>
                        <Text style={styles.nameText}>
                            White
                        </Text>
                    </View>
                    <Text style={styles.InfoText}> Private Information </Text>
                    <View style={styles.infoViews}>
                        <Icon
                            name="email"
                            color="lightgrey"
                            size={25}
                            style={styles.icon}
                        />
                        <Text style={styles.nameText}>
                            michaelwhite@gmail.com
                        </Text>
                    </View>
                    <View style={styles.infoViews}>
                        <Icon
                            name="phone"
                            color="lightgrey"
                            size={25}
                            style={styles.icon}
                        />
                        <Text style={styles.nameText}>
                            (720)123-4567
                        </Text>
                    </View>
                    <View style={styles.infoViews}>
                        <Icon
                            name="lock"
                            color="lightgrey"
                            size={25}
                            style={styles.icon}
                        />
                        <Text style={styles.nameText}>
                            **********
                        </Text>
                    </View>
                    <Text style={styles.logOut} onPress={()=> Actions.pop()}>
                        LogOut
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default PlainProfile;