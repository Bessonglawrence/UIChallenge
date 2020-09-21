import React from 'react';
import { View , Text } from 'react-native';
import styles from './Example.style'

const Example = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 18 }}>
                This is an example of how screens will be structured, 
                Just copy and edit till you have what you need, 
                please don't delete.
            </Text>
        </View>
    );
}

export default Example;