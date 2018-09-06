import React from 'React';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return (
			<Text style = {salon.Header}>
			{this.props.title}</Text>
			)
	}
}
const salon = {
	Header:{
		color:'#f00'
		,
		fontSize:50,
		backgroundColor: 'white'
	}
}

export default Judul;