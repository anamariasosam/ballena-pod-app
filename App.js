import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import {
  Card,
  Text,
  Image
} from 'react-native-elements';

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
      <View>
        <Text>Ballena Pod 4dffgg3</Text>
        { 
          members.map(member => 
            <Card>
            <Card.Title>{member.name}</Card.Title>
            <Card.Divider/>
            <Image source={{ uri: member.avatar }} />
    
          
          </Card>
          )
        }
      </View>
    );
  }
}

