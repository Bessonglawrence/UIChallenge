import React from 'react';
import { View , Text } from 'react-native';
import styles from './MusicPlayer.style';

const MusicPlayer = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 18 }}>
                This is the MusicPlayer page
            </Text>
        </View>
    );
}

export default MusicPlayer;