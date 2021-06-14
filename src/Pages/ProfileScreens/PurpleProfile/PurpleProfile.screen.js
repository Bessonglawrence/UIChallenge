import React from 'react';
import { 
    View, 
    Text, 
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './PurpleProfile.style';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux';

const PurpleProfile = () =>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.navbar}>
                <Text style={styles.navbarText}>
                    Profile
                </Text>
            </View>

            <View style={styles.bodySection}>
                <View style={styles.imageSection}>
                    <Image 
                        source={require('../../../../res/Images/Avatar.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.imageTextSection}>
                        <Text style={styles.name}>Orock Lawrence</Text>
                        <Text style={styles.number}>674958974</Text>
                    </View>
                </View>

                <View style={styles.profileSection}>
                    <Text style={styles.profileText}>
                        PROFILE
                    </Text>
                </View>

                <View style={styles.editProfile}>
                    <View style={styles.editProfileSection}>
                        <Icon name="settings" color="purple" size={40} />
                        <Text style={styles.sectionsText}>Edit Profile</Text>
                    </View>
                    <Icon name="chevron-right" size={40}/>
                </View>

                <View style={styles.share}>
                    <Icon name="share" color="purple" size={40} />
                    <Text style={styles.sectionsText}>Share</Text>
                </View>

                <TouchableOpacity style={styles.logout} onPress={() => Actions.pop()}>
                    <Icon name="logout" color="purple" size={40} />
                    <Text style={styles.sectionsText}>Log out</Text>
                </TouchableOpacity>

                <View style={styles.profileSection}>
                    <Text style={styles.profileText}>
                        ACCOUNT
                    </Text>
                </View>

                <View style={styles.editProfile}>
                    <Text style={styles.sectionsText}>Change Email</Text>
                    <Icon name="chevron-right" size={40}/>
                </View>

                <View style={styles.changePassword}>
                    <Text style={styles.sectionsText}>Change Password</Text>
                    <Icon name="chevron-right" size={40}/>
                </View>

            </View>
        </View>
    );
}
export default PurpleProfile;