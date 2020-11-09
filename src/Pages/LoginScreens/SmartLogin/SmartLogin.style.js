const styles = {
        inputContainer:{
        backgroundColor: 'white', 
        height: 395, 
        width: 270, 
        position: 'absolute',  
        left: 48, 
        top: 145,
        borderColor: 'lightgrey',
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 15,
        borderRadius: 15,
        paddingHorizontal: 18,
        paddingVertical: 18
    },
    registerView:{
        alignSelf: 'center', 
        top: 563, 
        position: 'absolute'
    },
    registerText:{
        alignSelf: 'center', 
        color: '#187ae7', 
        fontWeight: 'bold', 
        fontSize: 18, 
        textDecorationLine: 'underline'
    },
    socialSymbols:{
        fontWeight: 'bold', 
        fontSize: 20, 
        color: 'white'
    },
    facebook:{
        backgroundColor:'#187ae7', 
        paddingHorizontal: 15, 
        paddingVertical: 6, 
        borderRadius: 25, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 8
    },
    google:{
        backgroundColor:'brown', 
        paddingHorizontal: 8.5, 
        paddingVertical: 6, 
        borderRadius: 25, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 8
    },
    loginText:{
        height: 47, 
        width: '90%', 
        backgroundColor: '#187ae7', 
        alignSelf: 'center', 
        borderRadius: 4, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 50
    },
    or:{
        fontSize: 18, 
        fontWeight: 'bold', 
        alignSelf: 'center', 
        marginVertical: 8
    },
    sectionHeader:{
        alignSelf: 'center', 
        marginVertical: 15, 
        fontSize: 18, 
        color: '#187ae7', 
        fontWeight: 'bold'
    },
    icon:{
        backgroundColor: '#1934e6', 
        height: 430, 
        width: '100%', 
        borderBottomLeftRadius: 65, 
        borderBottomRightRadius: 65
    }
}
export default styles;