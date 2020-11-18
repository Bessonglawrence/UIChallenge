import * as React from 'react';
import { View, Text, Dimensions, ImageBackground } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from './TabLogin.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FirstRoute = () => (
    <View style={[styles.mainContainer, { backgroundColor: 'rgba(0,0,0,0.7)'}]} />
  );
   
const SecondRoute = () => (
    <View style={[styles.mainContainer, { backgroundColor: 'rgba(0,0,0,0.7)'}]}> 
        
    </View>
  );
   
const initialLayout = { width: Dimensions.get('window').width };


const TabLogin = () => {
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'SIGN IN' },
        { key: 'second', title: 'SIGN UP' },
    ]);
 
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
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