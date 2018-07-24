import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, CheckBox, ListItem, Accordion } from 'native-base';


// async componentWillMount() {
//   await Expo.Font.loadAsync({
//     'Roboto': require('native-base/Fonts/Roboto.ttf'),
//     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//   });
// }


const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];


export default class SelectedList1 extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        account: '23'
      };
    }

    render () {
        return (
            <Container>
            <Header>
                <Text>title</Text>
            </Header>
            <Content padder>
              <Card>
                <CardItem header bordered>
                  <Text>NativeBase</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      NativeBase is a free and open source framework that enable
                      developers to build
                      high-quality mobile apps using React Native iOS and Android
                      apps
                      with a fusion of ES6.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Text>GeekyAnts</Text>
                </CardItem>
              </Card>
            </Content>

            <Content padder>
              <Card>
                <CardItem header button onPress={() => alert("This is Card Header")}>
                  <Text>NativeBase</Text>
                </CardItem>
                <CardItem button onPress={() => alert("This is Card Body")}>
                  <Body>
                    <Text>
                      Click on any carditem
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer button onPress={() => alert("This is Card Footer")}>
                  <Text>GeekyAnts</Text>
                </CardItem>
              </Card>
            </Content>

            

          </Container>
        )
    }

}