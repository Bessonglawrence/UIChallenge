const styles = {
    container:{
		flex:1,
        backgroundColor: '#dcdde1'/*'#f5f6fa'*/,
        paddingBottom: 40
	}, 
	buttonView:{
		flexDirection: 'row'
	},
	subHeader:{
		fontSize: 18,
		marginLeft: 25,
		marginVertical:10,
	},
	Header:{
		fontSize:30,
		fontWeight: 'bold',
		marginBottom: 5,
		marginHorizontal: 25,
		marginTop: 5
	},
	card:{
		height:160,
		width: 140,
		margin: 14,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 0.1,
        padding: 15,
        backgroundColor: '#f5f6fa',
        borderRadius: 3,
        justifyContent: 'center',
    },
    icon:{
        paddingLeft: 15, 
        paddingTop: 13, 
        width: 60, 
        height: 60, 
        borderRadius: 40,
        alignSelf: 'center',
        backgroundColor: 'lightblue'
    },
	text:{
		marginHorizontal: 30,
		marginVertical: 30
    },
    button:{
        height:40, 
        width:150,
        marginVertical:8, 
        marginHorizontal:8,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:3
    },
    cardText:{
        alignSelf:'center',
        marginLeft:3, 
        fontWeight:'bold', 
        marginTop: 4
    }
}
export default styles;