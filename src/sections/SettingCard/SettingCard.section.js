import React, { Component } from 'react';
import {View, Text,TouchableOpacity, ImageBackground, Image, ActionSheetIOS} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './SettingCard.style';

class SettingsCard extends Component {
    render(){
        const {setting}=this.props;
        return (

            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {
                    switch(login.id){
                        case 1:
                            Actions.minilogin();
                            break;
                }}}>
                    <ImageBackground
                    source = {setting.image}
                    style = {styles.image}
                    imageStyle={{ borderRadius: 10}}
                    >
                        <View style={styles.mainTextView}>
                            <View style={[{backgroundColor: setting.color},styles.ratingView]}>
                                <Text style={styles.rating}>
                                    {setting.id}
                                </Text>
                            </View>
                            <Text style={styles.name}>
                                {setting.name}
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default SettingsCard;