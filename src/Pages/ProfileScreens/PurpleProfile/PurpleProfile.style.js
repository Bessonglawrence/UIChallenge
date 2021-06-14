const styles = {
    mainContainer:{
        flex: 1,
        backgroundColor: '#f6f6f5'
    },
    navbar:{
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        height: 57,
        backgroundColor: 'purple',
    },
    navbarText:{
        fontSize: 25,
        color: 'white'
    },
    profileImage:{
        height: 80,
        width: 80,
        borderRadius: 60
    },
    imageSection: {
        flexDirection: 'row',
        marginLeft: 15
    },
    bodySection:{
        paddingVertical: 15,
    },
    imageTextSection: {
        marginLeft: 25,
        marginTop: 18
    },
    name:{
        fontSize: 22
    },
    number:{
        fontSize: 20,
        color: 'grey'
    },
    profileText:{
        fontSize: 17,
        color: 'grey',
        marginLeft: 18
    },
    profileSection:{
        borderBottomWidth: 0.2,
        borderColor: 'grey',
        paddingVertical: 10
    },
    editProfile:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 0.2,
        borderColor: 'grey',
        paddingHorizontal: 10

    },
    editProfileSection:{
        flexDirection: 'row',
    },
    sectionsText: {
        fontSize: 25,
        marginLeft: 15
    },
    share:{
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 0.2,
        borderColor: 'grey',
        paddingHorizontal: 10
    },
    logout:{
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 15

    },
    changePassword:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    }
}

export default styles;