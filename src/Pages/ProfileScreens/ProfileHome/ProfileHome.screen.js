import React, { Component } from 'react';
import { ScrollView, View, Text, Animated, FlatList } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import data, { profiles } from '../../../../res/data';
import { ProfileCard } from '../../../sections';
import styles from './ProfileHome.style';


class ProfileHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            profiles : [],
        }
    }

    componentDidMount(){
        const profiles = data;
        this.setState({profiles : profiles })
    }
    scrollEnded = (obj) => {
        this.scrolledDistance = obj.nativeEvent.contentOffset.y;
    }

    render(){
        return(
            <FlatList
                contentContainerStyle={styles.mainContainer}
                onScrollEndDrag={this.scrollEnded}
                data={profiles}
                renderItem={({ item, index }) => { 
                    {
                        return (
                            <View key={index}>
                                <ProfileCard profile={item} key={item.id} /> 
                            </View>
                        )
                    }
                }}
                keyExtractor={item => (item.id).toString()}
            />
        );
    }
}

export default ProfileHome;