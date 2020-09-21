import React, { Component } from 'react';
import {View, Text, ImageBackground} from 'react-native';

class HomeCard extends Component {
    render(){
        const {home, image}=this.props;
        return (
                <ImageBackground
                    source = {require('./../../../res/Images/image.jpeg')}
                    style = {{ height: 100, width: 150 }}
                >
                    <Text>
                        {home.name}
                    </Text>
                </ImageBackground>
        );
    }
}

export default HomeCard;