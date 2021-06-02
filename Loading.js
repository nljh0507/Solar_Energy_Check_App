import React, {useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    Button,
    TouchableOpacity
} from 'react-native';
let imagePath = require('./assets/saloris.png');
//import CustomButton from 'C:\\Users\\nljh0\\expoTest\\utils\\CustomButton';
import AsyncStorage from '@react-native-community/async-storage'

import CustomButton from './utils/CustomButton.js';

export default function Login({ navigation }) {

    const [name, setName] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('First');
                        //Alert.alert('Welecome!', 'GetItem')
                    }
                    else
                    {
                      Alert.alert('No!', 'GetItem')
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
                navigation.navigate('First');
                Alert.alert('Welecome!','Hi' + name+'!')
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={imagePath}
            />
            <Text style={styles.text}>
                SolarEnergyCheck{"\n          "}
                Saloris
            </Text>
            
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your password'
                onChangeText={(value) => setpassword(value)}
            />
            <Text>
              {"\n"}
            </Text>
            <CustomButton
                title='sign  in'
                color='#1eb900'
                onPressFunction={setData}
            />
            <Text>
              {"\n"}
            </Text>
            <Button
                title='sign up'
                color='#1eb900'
                //onPressFunction={setData}
                onPress={()=>{{navigation.navigate("SignUp")}}}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})