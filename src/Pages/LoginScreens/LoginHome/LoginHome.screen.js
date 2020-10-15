import React, { Component } from 'react';
import { ScrollView, View, Text, Animated, FlatList } from 'react-native';

import data, { logins } from '../../../../res/data';
import { LoginCard } from '../../../sections';
import styles from './LoginHome.style';


class LoginHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            logins : [],
        }
    }

    componentDidMount(){
        const logins = data;
        this.setState({logins : logins })
    }
    scrollEnded = (obj) => {
        this.scrolledDistance = obj.nativeEvent.contentOffset.y;
    }

    render(){
        return(
            <FlatList
                contentContainerStyle={styles.mainContainer}
                onScrollEndDrag={this.scrollEnded}
                numColumns={2}
                data={logins}
                renderItem={({ item, index }) => { 
                    {
                        return (
                            <View key={index}>
                                <LoginCard login={item} key={item.id} /> 
                            </View>
                        )
                    }
                }}
                keyExtractor={item => (item.id).toString()}
            />
        );
    }
}

export default LoginHome;