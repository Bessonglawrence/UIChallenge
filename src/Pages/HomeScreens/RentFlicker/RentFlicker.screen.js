import React from 'react';
import { View , Text, TextInput,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';


import styles from './RentFlicker.style';
import { ScrollView } from 'react-native-gesture-handler';

const RentFlicker = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
            <LinearGradient 
                colors={['#68a7ed', '#4c97ea']} 
                style={{width: '100%', height: 180, paddingTop: 20}}
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                locations={[0.6,1]}
            >
                <Text style={{color: 'white', marginBottom: 3, fontSize: 22, fontWeight: 'bold', marginLeft: 30}}>
                    RENT FLICKER
                </Text>
                <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic', marginLeft: 30}}>
                    Main Categories
                </Text>
                <View  style={{backgroundColor:'white', flexDirection: 'row', width: 300, alignSelf: 'center', borderRadius: 4, marginTop: 30}}>
                    <Icon name="search" color="lightgrey" size={35} style={{marginTop: 6, marginLeft: 4}}/>
                    <TextInput
                        style={{width: 250, fontSize: 18, marginLeft: 5, paddingTop: 5}}
                        placeholder="Search ..."
                        underlineColorAndroid='transparent'
                    />
                </View>
            </LinearGradient>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: 20}}>
                <Text style={{color: '#12539c', fontSize: 20, marginTop: 10, fontWeight: 'bold', marginLeft: 2}}>
                    Our Categories
                </Text>
                <View style={{borderWidth: .5, borderColor: 'lightgrey', padding: 20, marginTop: 10, borderRadius: 5, shadowOffset: { width: 2, height: 5 }, shadowColor: 'lightgrey', shadowOpacity: 1, shadowRadius: 5, elevation: 2,}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image 
                            source={require('./../../../../res/Images/Avatar.png')}
                            style={{height: 80, width: 80, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Image 
                            source={require('./../../../../res/Images/Avatar.png')}
                            style={{height: 80, width: 80, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Image 
                            source={require('./../../../../res/Images/Avatar.png')}
                            style={{height: 80, width: 80, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image 
                            source={require('./../../../../res/Images/Avatar.png')}
                            style={{height: 80, width: 80, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Image 
                            source={require('./../../../../res/Images/Avatar.png')}
                            style={{height: 80, width: 80, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Image 
                            source={require('./../../../../res/Images/Avatar.png')}
                            style={{height: 80, width: 80, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                    </View>
                </View>
            </View>
            <View style={{marginTop: 15}}>
                <Text style={{fontSize: 17, color:'#12539c', fontWeight: 'bold', marginLeft: 20, marginBottom: 10}}>
                    Trending Products
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft: 17}}>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('./../../../../res/Images/office.jpeg')}
                            style={{height: 100, width: 120, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Text style={{color:'#4c97ea', fontSize: 14, fontWeight:'bold', marginLeft: 7,  marginTop: 5}}>
                            Drilling Table
                        </Text>
                        <Text style={{color:'#4c97ea', fontSize: 14, marginLeft: 7}}>
                            XAF2,000/Month
                        </Text>
                    </View>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('./../../../../res/Images/office.jpeg')}
                            style={{height: 100, width: 120, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Text style={{color:'#4c97ea', fontSize: 14, fontWeight:'bold', marginLeft: 7,  marginTop: 5}}>
                            Drilling Table
                        </Text>
                        <Text style={{color:'#4c97ea', fontSize: 14, marginLeft: 7}}>
                            XAF2,000/Month
                        </Text>
                    </View>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('./../../../../res/Images/office.jpeg')}
                            style={{height: 100, width: 120, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Text style={{color:'#4c97ea', fontSize: 14, fontWeight:'bold', marginLeft: 7,  marginTop: 5}}>
                            Drilling Table
                        </Text>
                        <Text style={{color:'#4c97ea', fontSize: 14, marginLeft: 7}}>
                            XAF2,000/Month
                        </Text>
                    </View>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('./../../../../res/Images/office.jpeg')}
                            style={{height: 100, width: 120, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Text style={{color:'#4c97ea', fontSize: 14, fontWeight:'bold', marginLeft: 7,  marginTop: 5}}>
                            Drilling Table
                        </Text>
                        <Text style={{color:'#4c97ea', fontSize: 14, marginLeft: 7}}>
                            XAF2,000/Month
                        </Text>
                    </View>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('./../../../../res/Images/office.jpeg')}
                            style={{height: 100, width: 120, marginHorizontal: 5, marginHorizontal: 5}}
                        />
                        <Text style={{color:'#4c97ea', fontSize: 14, fontWeight:'bold', marginLeft: 7,  marginTop: 5}}>
                            Drilling Table
                        </Text>
                        <Text style={{color:'#4c97ea', fontSize: 14, marginLeft: 7}}>
                            XAF2,000/Month
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <View>
                <Text style={{fontSize: 16, color:'#12539c', marginTop: 8, fontWeight: 'bold', marginLeft: 20}}>
                    Recently Viewed Products
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10, marginLeft: 19}}>
                    <Image
                        source={require('./../../../../res/Images/nature.jpeg')} 
                        style={{width: 100, height: 80, marginHorizontal: 5}}
                    />
                    <Image
                        source={require('./../../../../res/Images/nature.jpeg')} 
                        style={{width: 100, height: 80, marginHorizontal: 5}}
                    />
                    <Image
                        source={require('./../../../../res/Images/nature.jpeg')} 
                        style={{width: 100, height: 80, marginHorizontal: 5}}
                    />
                    <Image
                        source={require('./../../../../res/Images/nature.jpeg')} 
                        style={{width: 100, height: 80, marginHorizontal: 5}}
                    />
                    <Image
                        source={require('./../../../../res/Images/nature.jpeg')} 
                        style={{width: 100, height: 80, marginHorizontal: 5}}
                    />
                </ScrollView>
            </View>
            </ScrollView>
        </View>
    );
}

export default RentFlicker;