import React, { Component } from 'react';
import axios from 'axios';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Title, Thumbnail, Text, Icon, Left, Body, Right, Subtitle, H3 } from 'native-base';

export default class App extends Component {
  state = {
    members: []
  }

  componentDidMount() {
    axios.get('http://ballena-pod-api.herokuapp.com/members.json')
      .then(res => {
        const members = res.data;
        this.setState({ members });
      })
  }
  render() {
    const {members} = this.state;
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Ballena Pod</Title>
            <Subtitle>Members</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          { 
            members.map(member => 
              <Card key={member.name}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: member.corporate_value.avatar}} />
                    <Body>
                      <H3>{member.corporate_value.name}</H3>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: member.avatar}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Icon style={{fontSize: 20, color: 'brown'}} ios='birthday-cake' android="birthday-cake" type="FontAwesome5" />
                    <Text>{member.date_of_birth}</Text>
                  </Left>
                  <Body>
                  </Body>
                  <Right>
                    <H3 style={{color: '#357EDD'}}>{member.role}</H3>
                  </Right>
                </CardItem>
              </Card>
            )
          }
        </Content>
      </Container>
    );
  }
}

