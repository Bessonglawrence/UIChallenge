import React from "react";
import { View, Text, SafeAreaView, StatusBar,ScrollView, Switch} from "react-native";
import styles from "./WhiteSetting.style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const WhiteSetting = () => {
    return (
            <ScrollView style={styles.mainContainer}>
                <View style={styles.navBar}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="close" size={40} color="white"/>
                        <Text style={{fontSize: 25, color: 'white', marginLeft: 10}}>New Event</Text>
                    </View>
                    <Icon name="check" size={40} color="white"/>
                </View>

                <View style={{padding: 15}}>
                    <View style={{flexDirection: 'row', borderBottomWidth: 0.2, borderColor: 'grey', paddingBottom: 20, marginBottom: 18}}>
                        <View style={{backgroundColor: 'lightblue', height: 22, width: 22, borderRadius: 30, marginTop: 7}}></View>
                        <Text style={{fontSize: 20, marginLeft: 25, color: 'grey' }}>Title</Text>
                    </View>

                        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 15, }}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="clock-outline" size={25} color="grey"/>
                                <Text style={{fontSize: 18, marginLeft: 25}}>ALL DAY EVENT</Text>
                            </View>
                            <Switch />
                        </View>
                        <View style={{flexDirection: 'row', borderBottomWidth: 0.2, borderColor: 'grey', paddingBottom: 10}}>
                            <Icon name="logout" color="grey" size={30} style={{marginTop: 15}}/>
                            <View>
                                <View style={{ borderBottomWidth: 0.2, borderTopWidth: 0.2, borderColor: 'grey', marginLeft: 20, paddingVertical: 3}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{borderRightWidth: 0.2, borderColor: 'grey', padding: 5}}>
                                            <Text style={{color: 'grey'}}>Date</Text>
                                            <Text style={{fontSize: 18,}}>Sat, January 16</Text>
                                        </View>
                                        <View style={{padding: 5, marginLeft: 5}}>
                                            <Text style={{color: 'grey'}}>Time</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{fontSize: 18,}}>8:00</Text>
                                                <Text style={{color:'grey', fontSize: 18, marginLeft: 5}}>PM</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', paddingTop: 3}}>
                                        <Icon name="login" color="grey" size={30} style={{marginTop: 15, marginLeft: -29}}/>
                                        <View style={{borderRightWidth: 0.2, borderColor: 'grey', padding: 5, marginLeft: 19}}>
                                            <Text style={{color: 'grey'}}>Date</Text>
                                            <Text style={{fontSize: 18,}}>Sat, January 16</Text>
                                        </View>
                                        <View style={{padding: 5, marginLeft: 5}}>
                                            <Text style={{color: 'grey'}}>Time</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{fontSize: 18,}}>8:00</Text>
                                                <Text style={{color:'grey', fontSize: 18, marginLeft: 5}}>PM</Text>
                                            </View>
                                        </View>
                                </View>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', borderBottomWidth: 0.2, borderColor: 'grey', paddingBottom: 20, marginVertical: 15}}>
                            <Icon name="google-maps" size={30} color="grey"/>
                            <Text style={{fontSize: 20, marginLeft: 25, color: 'grey'}}>Location</Text>
                        </View>

                        <View style={{flexDirection: 'row',justifyContent:"space-between", borderBottomWidth: 0.2, borderColor: 'grey', paddingBottom: 20}}>
                            <View style={{flexDirection:"row"}}>
                                <Icon name="earth" size={30} color="grey"/>
                                <Text style={{fontSize: 20, color: 'grey', marginLeft: 20}}>Time Zone</Text>
                            </View>
                            <Text style={{color: 'black', fontSize: 19, fontWeight:"bold"}}>
                                EST
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row', borderBottomWidth: 0.2, borderColor: 'grey', paddingBottom: 20, marginVertical: 15}}>
                            <Icon name="account-group" size={30} color="grey"/>
                            <Text style={{fontSize: 20, marginLeft: 25, color: 'grey'}}>People</Text>
                        </View>

                        <View style={{flexDirection: 'row',justifyContent:"space-between", borderBottomWidth: 0.2, borderColor: 'grey', paddingBottom: 20}}>
                            <View style={{flexDirection:"row"}}>
                                <Icon name="calendar" size={30} color="grey"/>
                                <Text style={{fontSize: 20, color: 'grey', marginLeft: 20}}>Calender</Text>
                            </View>
                            <Text style={{color: 'black', fontSize: 14, fontWeight:"bold", marginTop: 5}}>
                                lawrence@gmail.com
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row',justifyContent:"space-between", borderBottomWidth: 0.2, borderColor: 'grey', paddingVertical: 15}}>
                            <View style={{flexDirection:"row"}}>
                                <Icon name="bell-outline" size={30} color="grey"/>
                                <Text style={{fontSize: 20, color: 'grey', marginLeft: 20}}>Alert</Text>
                            </View>
                            <Text style={{color: 'black', fontSize: 14, fontWeight:"bold", marginTop: 5}}>
                                15 minutes before
                            </Text>
                        </View>

                </View>
            </ScrollView>
    );
}

export default WhiteSetting;