import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import data, { settings } from '../../../../res/data';
import { SettingCard } from '../../../sections';
import styles from './SettingsHome.style';


class SettingsHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            settings : [],
        }
    }

    componentDidMount(){
        const settings = data;
        this.setState({settings : settings })
    }
    scrollEnded = (obj) => {
        this.scrolledDistance = obj.nativeEvent.contentOffset.y;
    }

    render(){
        return(
            <FlatList
                contentContainerStyle={styles.mainContainer}
                onScrollEndDrag={this.scrollEnded}
                numColumns={3}
                data={settings}
                renderItem={({ item, index }) => { 
                    {
                        return (
                            <View key={index}>
                                <SettingCard setting={item} key={item.id} /> 
                            </View>
                        )
                    }
                }}
                keyExtractor={item => (item.id).toString()}
            />
        );
    }
}

export default SettingsHome;