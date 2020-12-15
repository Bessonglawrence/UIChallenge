const styles = {
    mainContainer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 14,
        paddingTop: 25
    },
    iconView:{
        backgroundColor: 'white', 
        padding: 15, 
        borderRadius: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        marginVertical: 60,
    },
    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8378ed',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 15,
        shadowColor: '#cccccc99',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 1,
        elevation: 2,
        position: 'relative',
        height: 57,
        width: '92%',
        alignSelf: 'center'
    },
    forgotText:{
        fontSize: 17, 
        fontStyle: 'italic', 
        fontWeight: 'bold', 
        alignSelf: 'center', 
        color: 'white', 
        textDecorationLine: 'underline',
        marginTop: 15
    },
    inputView:{
        flexDirection: 'row', 
        borderBottomColor: 'white',
        borderBottomWidth: .2, 
        width: '100%', 
        paddingBottom: 6, 
        marginTop: 15
    }
}
export default styles;