import React,{Component} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput, 
	ImageBackground,
	Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
//import Spinner from './Spinner';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import firebase from 'react-native-firebase';
 
export default class Login extends Component{


		constructor(props){
			super(props);
			this.state ={
				Email: '',
				Password: '',
				Error: '',
				loading: false
			}
		}

		handleSkipAction() {
		    Actions.home();
		}

		onButtonPress(){
			//console.log(this.state.Email && this.state.Password)
			const {Email, Password } = this.state;

			this.setState({Error: '', loading: true});

			firebase.auth().signInWithEmailAndPassword(Email, Password)
			.catch(() => {this.setState({Error: 'Authentication Failed.'});
			});

		}
		renderButton(){
			// if(this.state.loading){
			// 	return <Spinner size="small"/>
			// }
			return(
				<TouchableOpacity 
			 	style={styles.buttonStyle} 
			 	onPress={this.handleSkipAction}
			 	>
					<Text style={{fontSize:25, color: 'white'}}>
						Login
					</Text>
			 	</TouchableOpacity>
				);
		}

	render(){
		return(
			<ImageBackground
				style={{width:400, height:615,}}
				source={require('../../../../res/Images/hotel.jpg')}
				//blurRadius={0.3}
			>
				<View style={styles.inputCard}>

					<View style={styles.inputContainer}>
						<Icon name="mail" size={23} style={{marginLeft:4,}} color="white"/>
						<TextInput 
						style={styles.inputStyle}
						placeholder="user@gmail.com"
						underlineColorAndroid="transparent"
						fontSize={18}
						placeholderTextColor="grey"
						value={this.state.Email}
						onChangeText={Email => this.setState({Email})}
						/>
					</View>

					<View style={styles.inputContainer}>
						<Icon name="lock" size={23} style={{marginLeft:3}} color="white"/>
						<TextInput 
						style={styles.inputStyle}
						placeholder="Password"
						fontSize={18}
						underlineColorAndroid="transparent"
						placeholderTextColor="grey"
						secureTextEntry={true}
						value={this.state.Password}
						onChangeText={Password => this.setState({Password})}
						/>
					</View>

					<View>
						<Text style={styles.forgotPassword}>
							Forgot Password?
						</Text>
					</View>

					<View>
						{this.renderButton()}
					</View>

					<Text style={styles.withText}>
						Or Sign in with
					</Text>

					<View style={styles.socialView}>
						<TouchableOpacity style={styles.socialCircle}>
							<Image 
								style={styles.socialImage}
								source={require('../../../../res/Images/facebook.png')}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.socialCircle}>
							<Image 
								style={styles.socialImage}
								source={require('../../../../res/Images/ios.png')}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.socialCircle}>
							<Image 
								style={styles.socialImage}
								source={require('../../../../res/Images/google.png')}
							/>
						</TouchableOpacity>
					</View>

				</View>

			</ImageBackground>

			
			);
	}
}
const styles = StyleSheet.create({
	inputCard:{
		backgroundColor: '#ffbe76', 
		paddingVertical: 10, 
		alignItems: 'center', 
		marginTop: 20, 
		width:'90%', 
		borderTopLeftRadius: 80, 
		borderBottomLeftRadius: 40, 
		marginLeft: 20,
		position: 'absolute',
		bottom: 7,

	},
	inputContainer:{
		//backgroundColor: '#ffbe76',
		borderRadius: 5,
		marginTop: 10,
		flexDirection:'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: 'white',
		paddingVertical: 7,
	},
	inputStyle:{
		width: 200,
		paddingVertical: 5,
	},
	buttonStyle:{
		backgroundColor:'grey',
		borderRadius: 16,
		alignItems: 'center',
		width: 300,
		height: 45,
		marginTop: 10,
		alignSelf: 'center'

	},
	footerStyle:{
		alignItems: 'center',
		paddingTop: 9,
		marginLeft: 25

	},
	forgotPassword:{
		fontSize:19,
		alignSelf: 'center',
		color: 'grey',
		marginVertical: 8
	},
	withText:{
		color: 'white', 
		marginLeft: -200, 
		fontSize: 18, 
		fontWeight: 'bold', 
		marginVertical: 10
	},
	socialImage:{
		width: 30,
		height: 30
	},
	socialView:{
		marginLeft: 90,
		marginVertical: 8,
		flexDirection: 'row'
	},
	socialCircle:{
		padding: 5,
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 20,
		marginHorizontal: 8
	}
});