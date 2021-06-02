//import React, {Component} from 'react';
import {Text, Alert, TouchableOpacity,Button} from 'react-native';
import React, {useState, useEffect } from 'react';
import { Container, Header, Left, Body, Title , Content, Form,Item,Input} from 'native-base';

import AsyncStorage from '@react-native-community/async-storage'
import CustomButton from './utils/CustomButton.js';

export default function SignUp({ navigation }) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('Loading');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || password.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name,
                    Password: password
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('Loading');
                Alert.alert('Success!', 'Your data has been updated.');
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    
    //const {navigation} = this.props;
    return (
      <Container>
        <Header>
            <Left>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Text style = {{color:'white',fontSize: 40}}>{'←'}</Text>
                    </TouchableOpacity>
            </Left>
            <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                <Title>Sign Up                    </Title>
            </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input 
              onChangeText={(value) => setName(value)}
              placeholder="Username" 
              />
            </Item>
            <Item last>
              <Input 
              onChangeText={(value) => setPassword(value)}
              placeholder="Password" />
            </Item>
          </Form>
          <CustomButton
                title='sign up'
                color='#1eb900'
                onPressFunction={setData}
                //onPress={()=>{{navigation.navigate("SignUp")}}}
            />
        </Content>
      </Container>
    );
  }
