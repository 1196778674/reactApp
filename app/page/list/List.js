import React, {Component} from "react";
import {
	StyleSheet, 
	Image, 
	TextInput,
	View,
	Text
} from "react-native";

export default class SelectedList extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	text: ''
	  };
	}

	render () {
		return (
			<View>
				<TextInput  style={{ borderColor: '#000000', borderWidth: 1, }}
		          style={{height: 40}}
		          placeholder="Type here to translate!"
		          onChangeText={(text) => this.setState({text})}
		        />
			</View>
		)
	}
}

const ListStyle = StyleSheet.create({
	border_box: {
		paddingLeft: 2,
		borderWidth: 1,
		// borderStyle: 'solid',
		borderColor: 'red'
	},

})