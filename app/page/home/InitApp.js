import React, {Component} from "react";
import {
	StyleSheet,
    Platform,
    Text
} from "react-native";

import {Navigator} from 'react-native-deprecated-custom-components'

import MainPage from './MainPage'


export default class InitApp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	
	  };
	}

	render () {
		return (
			<Navigator
			style={InitPage.page_body}
			initialRoute = {{name: 'MainPage', component: MainPage}}
			configureScene={(route)=> {
                let config = Navigator.SceneConfigs.HorizontalSwipeJump;
                //禁用config中的手势返回，否则会导致页面可以左右滑动
                config.gestures = null;
                return config;
            }}

            //这里需要注意，Navigator一经初始化后，就可以多处使用，整个工程维持一个就好了
            renderScene={(route, navigator)=> {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
            }}
			/>
		)
	}
}

const InitPage = StyleSheet.create(
    {
        page_body: {
           	paddingTop: 30,
        },
    }
)
