const styles = {
    mainContainer:{
        backgroundColor: 'lightgrey',
        flex: 1,
    },
    topTriangle: {
        backgroundColor:'purple',
        height: 500, 
        width: 250,
        transform: [ { rotate: '50deg'}],
        marginTop: -270,
        borderBottomRightRadius: 100
    },
    bottomTriangle: {
        backgroundColor:'purple',
        height: 550, 
        width: 250,
        transform: [ { rotate: '45deg'} ],
        alignSelf: 'flex-end',
        marginTop: 20,
        borderTopLeftRadius: 100
    },
    inputView:{
        backgroundColor: 'white',
        marginTop: 20,
        width: 290,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: 'purple',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 6,
        shadowRadius: 10,
        elevation: 5,
    },
    loginCircle:{
        backgroundColor: 'purple',
        borderRadius: 20,
        padding: 8,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 288,
        left: 269,
        shadowColor: 'purple',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 6,
        shadowRadius: 10,
        elevation: 5,
    },
    topInput:{
        shadowColor: 'purple',
        shadowOffset: { width: 5, height: 5 },
        flexDirection: 'row', 
        borderBottomWidth: .5, 
        borderColor: 'grey',
        width: '85%', 
        alignSelf: 'center'
    },
    registerView:{
        backgroundColor: 'white', 
        width: 120, 
        paddingVertical: 10, 
        justifyContent: 'center',
        position: 'absolute',
        bottom: 130,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    registerText:{
        fontSize: 20, 
        color: 'purple', 
        fontWeight: 'bold', 
        marginLeft: 15
    },
    loginText:{
        alignSelf: 'center', 
        fontSize: 28, 
        marginTop: -100, 
        color:'purple', 
        fontStyle:'italic', 
        fontWeight: 'bold', 
        marginBottom: 70
    }
}

export default styles;