const styles = {
    mainContainer:{
        flex: 1,
        backgroundColor: 'grey',
        paddingHorizontal: 20
    },
    CreateAccountButton:{
        flexDirection: 'row', 
        borderWidth: .5, 
        padding: 13, 
        borderColor: 'white', 
        borderRadius: 30, 
        marginTop: 4, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 22, 
        color: 'white', 
        fontWeight: 'bold'
    },
    forgotPasswordText:{
        alignSelf:"center", 
        color: 'white', 
        fontSize: 18, 
        marginVertical: 8
    },
    signInButton:{
        flexDirection: 'row', 
        borderWidth: .5, 
        padding: 13, 
        borderColor: 'white', 
        borderRadius: 30, 
        marginTop: 40, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    inputSections:{
        flexDirection: 'row', 
        padding: 8, 
        borderColor: 'white', 
        borderRadius: 30, 
        marginVertical: 10, 
        backgroundColor: 'rgba(238,238,238,0.3)'
    },
    headerText:{
        alignSelf: 'center', 
        fontSize: 27, 
        color: 'white', 
        marginTop: 15
    }
}

export default styles;