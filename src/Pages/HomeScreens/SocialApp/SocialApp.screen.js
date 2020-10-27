import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import styles from './SocialApp.style'

class SocialApp extends Component {

	render(){
		return(
			<View style={styles.container}>


				<Text style={styles.Header}>
					Safeincloud
				</Text>

			
				<Text style={styles.subHeader}>
					Most forgot passwords
				</Text>
			


				<View style={{alignSelf: 'center'}}>
					<View style={styles.buttonView}>
                        <LinearGradient 
                            style={styles.button}
                            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0.6,1]}
                            colors={['#68a7ed', '#4c97ea']} 
                        >
							<Text>Gmail</Text>
						</LinearGradient>
						<TouchableOpacity
						style={[styles.button, {backgroundColor: '#44bd32'}]}>
							<Text>Dribble</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.buttonView}>
						<TouchableOpacity
							style={[styles.button, {backgroundColor: 'lightblue'}]}
						>
							<Text>Chase Bank</Text>	
						</TouchableOpacity>

						<TouchableOpacity
							style={[styles.button, {backgroundColor: '#f8c291'}]}
						>
							<Text>Facebook</Text>
						</TouchableOpacity>


					</View>
				</View>

						<Text style={styles.subHeader}>
							Categories
						</Text>

						<View style={{flexDirection:'row', alignSelf: 'center'}}>
                            
							<TouchableOpacity style={styles.card} onPress={() => Actions.pop()}>
                                <Icon name="lock" size={30} color="white" style={[styles.icon, {backgroundColor: '#44bd32'}]}/>
								<Text style={styles.cardText}>Password</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.card} onPress={() => Actions.pop()}>
								<Icon name="camera" size={30} color="white" style={[styles.icon, {backgroundColor: '#f8c291'}]}/>	
								<Text style={styles.cardText}>Images</Text>
							</TouchableOpacity>
						</View>

						<View style={{flexDirection:'row', alignSelf: 'center'}}>
							<TouchableOpacity style={styles.card} onPress={() => Actions.pop()}>
								<Icon name="file" size={30} color="white" style={[styles.icon, {backgroundColor: '#1abc9c'}]}/>
								<Text style={styles.cardText}>Document</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.card} onPress={() => Actions.pop()}>	
								<Icon name="inbox" size={30} color="white" style={[styles.icon, {backgroundColor:'#0ed2f7'}]}/>
								<Text style={styles.cardText}>chat</Text>
							</TouchableOpacity>
						</View>
			</View>
			);
	}
} 
export default SocialApp;