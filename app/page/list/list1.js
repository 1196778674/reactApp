import React, {Component} from "react";
import {StyleSheet, Image, View, TextInput, Text} from "react-native";

import {
    Container, 
    Header, 
    Title, 
    Content, 
    Icon, 
    Button, 
    Left, 
    Body
} from "native-base";

export default class SelectedList_1 extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
            account: '234',
            password: '',
            verifyString: '获取验证码',
            isCounting: false,
    	};
	}

	render () {
		return (
			 <Container>
			 	<Header style={{backgroundColor: 'white', height: 48}}>

                    <Left>
                        <Button transparent >
                        	<Text>button</Text>
                        </Button>
                    </Left>

                    <Body>
                    <Title style={{color: '#333'}}>登录</Title>

                    </Body>

                </Header>
		 	<Content style={{backgroundColor: 'white'}}>
                    <View style={{marginTop: 60}}>
                        <View style={TextInputStyle.view_account_input_container}>
                            <TextInput
                                style={TextInputStyle.input_account}
                                placeholder={'手机号'}
                                placeholderTextColor={'#b2b2b2'}
                                keyboardType={'numeric'}
                                maxLength={11}
                                returnKeyType={'next'}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(input)=> {
                                    this.setState({account: input})
                                }}
                            />
                        </View>
                        <View style={TextInputStyle.view_password_input_container}>
                            <TextInput
                                style={TextInputStyle.input_password}
                                placeholder={'验证码'}
                                placeholderTextColor={'#b2b2b2'}
                                keyboardType={'numeric'}
                                maxLength={6}
                                returnKeyType={'next'}
                                clearTextOnFocus={true}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(input)=> {
                                    this.setState({password: input})
                                }}
                            />

                            <Text
                                onPress={()=>this._fetchVerifyCode()}
                                style={TextInputStyle.tv_verify_code}>{this.state.verifyString}</Text>

                        </View>
                        <Button block
                                onPress={()=>this._onLoginButtonClick()}
                                style={TextInputStyle.btn_commit}>
                            <Text style={{fontSize: 18, color: 'white'}}>登录</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
		)
	}
}



const TextInputStyle = StyleSheet.create({
    view_account_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        marginBottom: 8,
        paddingTop: 10,
        paddingBottom: 10
    },
    view_password_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        paddingTop: 10,
        paddingBottom: 10

    },
    input_account: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 8,
        color: 'red'
    },
    input_password: {
        flexGrow: 4,
        fontSize: 14,
        paddingVertical: 8,
    },
    icon_account: {
        fontSize: 26,
        marginRight: 16,
        marginLeft: 8,
        color: '#b2b2b2'
    },
    tv_verify_code: {
        color: '#333',
        flexGrow: 1,
        textAlign: 'center'
    },
    btn_commit: {
        height: 48,
        backgroundColor: '#333',
        marginTop: 38,
        marginHorizontal: 14,
    }
})