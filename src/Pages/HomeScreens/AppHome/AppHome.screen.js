import React, { Component } from 'react';
import { ScrollView, View, Text, Animated, FlatList } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import data, { homes } from '../../../../res/data';
import { HomeCard } from '../../../sections';
import styles from './AppHome.style';


class AppHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            homes : [],
        }
    }

    componentDidMount(){
        const homes = data;
        this.setState({homes : homes })
    }
    scrollEnded = (obj) => {
        this.scrolledDistance = obj.nativeEvent.contentOffset.y;
    }

    render(){
        return(
            <FlatList
                contentContainerStyle={styles.mainContainer}
                onScrollEndDrag={this.scrollEnded}
                data={homes}
                renderItem={({ item, index }) => { 
                    {
                        return (
                            <View key={index}>
                                <HomeCard home={item} key={item.id} /> 
                            </View>
                        )
                    }
                }}
                keyExtractor={item => (item.id).toString()}
            />
        );
    }
}

export default AppHome;