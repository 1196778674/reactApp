import React, {Component} from "react";
import {
	StyleSheet, 
	Image, 
	TextInput,
	View,
	FlatList,
	Text
} from "react-native";

import Banner from "react-native-banner";

export default class SelectedList extends Component {
	constructor(props) {
	  super(props);

	  this.banners = [
            {
                title: 'beauty 1',
                image: '../../image/home_page_header_cover.jpg',
            },
            {
                title: 'beauty 2',
                image: '../../image/ic_tab_strip_icon_feed_selected.png',
            },
            {
                title: 'The next banner has no title',
                image: '../../image/ic_tab_strip_icon_category.png',
            },
            {
                title: 'no title',
                image: '../../image/home_page_header_cover.jpg',
            },
        ];
	
	  this.state = {
            clickTitle: 'You can try clicking beauty',
            defaultIndex: 0,
        }
		this.defaultIndex = 0;	

	}


	render () {
		return (
			<View style={styles.container}>
                <Banner
                    banners={this.banners}
                    defaultIndex={this.defaultIndex}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                    intent={this.clickListener.bind(this)}
                />
                <Text>{this.state.clickTitle}</Text>
            </View>
		)
	}

	clickListener(index) {
        this.setState({
            clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
        })
    }

    onMomentumScrollEnd(event, state) {
        console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
        this.defaultIndex = state.index;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5FCFF',
    },
});