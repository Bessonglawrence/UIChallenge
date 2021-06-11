import React from "react";
import { View, Text, SafeAreaView, StatusBar, Switch} from "react-native";
import styles from "./WhiteSetting.style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const WhiteSetting = () => {
    return (
            <View style={styles.mainContainer}>
                <View style={styles.navBar}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="cancel" size={40} color="white"/>
                        <Text style={{fontSize: 25, color: 'white', marginLeft: 10}}>New Event</Text>
                    </View>
                    <Icon name="check" size={40} color="white"/>
                </View>

                <View style={{padding: 24}}>
                    <View style={{flexDirection: 'row', borderBottomWidth: 0.5, borderColor: 'grey', paddingBottom: 20, marginBottom: 22}}>
                        <View style={{backgroundColor: 'lightblue', height: 22, width: 22, borderRadius: 30, marginTop: 7}}></View>
                        <Text style={{fontSize: 20, marginLeft: 25}}>Title</Text>
                    </View>

                        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 15}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="clock" size={25} color="grey"/>
                                <Text style={{fontSize: 18, marginLeft: 25}}>ALL DAY EVENT</Text>
                            </View>
                            <Switch />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="logout" color="grey" size={30}/>
                            <View style={{ borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'grey',}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{borderRightWidth: 0.5, borderColor: 'grey', padding: 5}}>
                                        <Text>Date</Text>
                                        <Text>Sat, January 16</Text>
                                    </View>
                                    <View style={{padding: 5}}>
                                        <Text>Date</Text>
                                        <Text>Sat, January 16</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                </View>
            </View>
    );
}

export default WhiteSetting;