import * as React from 'react';
import { View, Text, Dimensions, ImageBackground, TextInput, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import ButtonComponent from './../../../components/Button/Button.component';
import styles from './TabLogin.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux';

const signIn = () => (
    <ScrollView style={styles.mainContainer}>
        <View style={styles.inputView}>
            <Icon
                name="account-circle"
                size={27}
                color="white" 
                style={{marginTop: 5, marginRight: 8}}
            />
            <TextInput
                placeholder="Username"
                placeholderTextColor="white"
                style={{color:"white", fontSize: 18}}
            />
        </View>
        <View style={styles.inputView}>
            <Icon
                name="lock"
                size={27}
                color="white" 
                style={{marginTop: 5, marginRight: 8}}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="white"
                style={{color:"white", fontSize: 18}}
            />
        </View>
        <View style={{marginTop: 105}}>
            <View 
                style={styles.buttonStyle}
            >
                <Text 
                    style={{fontSize: 18, color:'white'}}
                    onPress={() => Actions.pop()}
                >
                    SIGN IN
                </Text>
            </View>
            <Text style={styles.forgotText}>
                    Forgot Password
            </Text>
        </View>
    </ScrollView>
  );
   
const signUp = () => (
    <ScrollView style={styles.mainContainer}>
        <View style={styles.inputView}>
            <Icon
                name="account-circle"
                size={27}
                color="white" 
                style={{marginTop: 5, marginRight: 8}}
            />
            <TextInput
                placeholder="Username"
                placeholderTextColor="white"
                style={{color:"white", fontSize: 18}}
            />
        </View>
        <View style={styles.inputView}>
            <Icon
                name="lock"
                size={27}
                color="white" 
                style={{marginTop: 5, marginRight: 8}}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="white"
                style={{color:"white", fontSize: 18}}
            />
        </View>

        <View style={styles.inputView}>
            <Icon
                name="lock"
                size={27}
                color="white" 
                style={{marginTop: 5, marginRight: 8}}
            />
            <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="white"
                style={{color:"white", fontSize: 18}}
            />
        </View>

        <View style={{marginTop: 80}}>
            <View 
                style={styles.buttonStyle}
            >
                <Text 
                    style={{fontSize: 18, color:'white'}}
                    onPress={() => Actions.pop()}
                >
                    SIGN UP
                </Text>
            </View>
        </View>
    </ScrollView>
  );
   
const initialLayout = { width: Dimensions.get('window').width };


const TabLogin = () => {
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'SIGN IN' },
        { key: 'second', title: 'SIGN UP' },
    ]);
 
    const renderScene = SceneMap({
        first: signIn,
        second: signUp,
    });

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#8378ed' }}
          style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
        />
    );

    return(
        <ImageBackground 
            style={{flex: 1,}}
            blurRadius={3}
            source={require('./../../../../res/Images/back.jpeg')}
        >
            <View style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
                <View style={styles.iconView}>
                    <Icon
                        name="check"
                        color="#8378ed"
                        size={35}
                    />
                </View>
            </View>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
        />
        </ImageBackground>
    );
}
export default TabLogin;