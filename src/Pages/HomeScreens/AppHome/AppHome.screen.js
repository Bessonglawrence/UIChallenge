import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import data, { homes } from './../../../../res/data';
import { HomeCard } from './../../../sections';

class AppHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            homes : [],

        }
    }

    componentDidMount(){
        const tHome = data;
        this.setState({homes : tHome })
    }

    render(){
        return(
            <ScrollView>
                {homes.map((home, key) => <HomeCard key={key} home={home}/>)}
            </ScrollView>
        );
    }
}

export default AppHome;