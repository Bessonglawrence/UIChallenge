import React, { Component } from 'react';
import {View, Text,TouchableOpacity, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomeCard extends Component {
    render(){
        const {home}=this.props;
        return (

            <View style={{borderWidth: 1,
                borderColor: 'lightgrey',
                borderBottomWidth: 1,
                shadowColor: 'grey',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 2,
                shadowRadius: 2,
                elevation: 3,
                marginVertical: 5
                }}>
                <TouchableOpacity onPress={() => Actions.home.key()}>
                    <ImageBackground
                    source = {home.image}
                    style = {{ height: 240, width: 190, padding: 10, borderRadius: 10}}
                    >
                        <View style={{flexDirection: 'row', marginTop: 165}}>
                            <View style={{backgroundColor: home.color, paddingVertical: 10, paddingHorizontal: 18, borderRadius: 60 }}>
                                <Text style={{color: 'grey', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic'}}>
                                    {home.rating}
                                </Text>
                            </View>
                            <Text style={{marginLeft: 5, marginTop: 8, fontSize: 18, fontWeight: 'bold',}}>
                                {home.name}
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default HomeCard;