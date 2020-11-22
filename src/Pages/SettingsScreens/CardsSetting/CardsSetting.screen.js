import React,{ useState } from 'react';
import { Text, View, Switch, ScrollView } from 'react-native';
import styles from './CardsSetting.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';



const CardsSetting = () => {
    const [ SwitchValue, setSwitchValue ] = useState(false);

    const toggleSwitch = (value) =>{
        setSwitchValue(!value);
    }

 return (
     <View style={styles.mainContainer}>

         <View style={styles.headerComponentView}>
             <TouchableOpacity>
                <Icon name="arrow-left" size={28} color="white" />
             </TouchableOpacity>
            <Text style={styles.headerText}>Settings</Text>
         </View>

         <ScrollView>
            <View style={{paddingBottom: 10, borderBottomWidth: .2, borderColor: 'white', }}>
                <View style={{backgroundColor: 'rgba(238,238,238,0.4)', paddingVertical: 15,paddingHorizontal:8, borderRadius: 10, justifyContent: 'center', marginBottom: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="longitude" color="white" size={24} style={{marginTop: 2, marginRight: 4}}/>
                        <Text style={{color: 'white', fontSize: 18, marginLeft: 8 }}>Language</Text>
                        <Text style={{color: '#1de25b', fontSize: 15, marginLeft: 8, marginLeft: 145, marginTop: 5}}>English</Text>
                    </View>
                </View>
                <View style={{backgroundColor: 'rgba(238,238,238,0.4)', paddingVertical: 15,paddingHorizontal:8, borderRadius: 10, justifyContent: 'center', marginBottom: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="circle-half-full" color="white" size={24} style={{marginTop: 2, marginRight: 4}}/>
                        <Text style={{color: 'white', fontSize: 18, marginLeft: 8 }}>Application Theme</Text>
                        <Text style={{color: '#1de25b', fontSize: 15, marginLeft: 8, marginLeft: 75, marginTop: 5}}>light</Text>
                    </View>
                </View>
            </View>

            <View style={{ paddingBottom: 10, borderBottomWidth: .2, borderColor: 'white',}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: "bold", marginVertical: 12}}>
                    Notifications
                </Text>
                <View style={{backgroundColor: 'rgba(238,238,238,0.4)', paddingVertical: 15,paddingHorizontal:8, borderRadius: 10, justifyContent: 'center', marginBottom: 10}}>
                        <View style={{flexDirection: 'row', paddingVertical: 13, borderBottomWidth: .2, borderColor: 'white', }}>
                            <Icon name="bell" color="white" size={24} style={{marginTop: 2, marginRight: 4}}/>
                            <Text style={{color: 'white', fontSize: 18, marginLeft: 8 }}>Push Notification</Text>
                            <Switch style={{marginLeft: 80}}/>
                        </View>
                        <View style={{flexDirection: 'row', paddingVertical: 13}}>
                            <Icon name="email" color="white" size={24} style={{marginTop: 2, marginRight: 4}}/>
                            <Text style={{color: 'white', fontSize: 18, marginLeft: 8 }}>Email Notification</Text>
                            <Switch 
                                style={{marginLeft: 73}}
                                onValueChange={toggleSwitch}
                                value={SwitchValue}
                            />
                        </View>
                </View>
            </View>

            <View style={{ paddingBottom: 10, marginBottom:15}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: "bold", marginVertical: 12}}>
                    App Permissions
                </Text>
                <View style={{backgroundColor: 'rgba(238,238,238,0.4)', paddingVertical: 15,paddingHorizontal:8, borderRadius: 10, justifyContent: 'center', marginBottom: 10}}>
                        <View style={{flexDirection: 'row', paddingVertical: 13, borderBottomWidth: .2, borderColor: 'white', }}>
                            <Icon name="camera" color="white" size={24} style={{marginTop: 2, marginRight: 4}}/>
                            <Text style={{color: 'white', fontSize: 18, marginLeft: 8 }}>Camera</Text>
                            <Switch style={{marginLeft: 160}}/>
                        </View>
                        <View style={{flexDirection: 'row', paddingVertical: 13}}>
                            <Icon name="crosshairs-gps" color="white" size={24} style={{marginTop: 2, marginRight: 4}}/>
                            <Text style={{color: 'white', fontSize: 18, marginLeft: 8 }}>Location</Text>
                            <Switch 
                                style={{marginLeft: 150}}
                                onValueChange={toggleSwitch}
                                value={SwitchValue}
                            />
                        </View>
                </View>
            </View>
         </ScrollView>

     </View>
 );
}

export default CardsSetting;