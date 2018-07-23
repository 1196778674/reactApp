import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


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
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>

                <Content>
                    <Text>
                        This is Content Section
                    </Text>
                </Content>
                
            </Container>
        )
    }

}