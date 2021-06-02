import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Content, Grid, Col, Row,Center,Badge} from 'native-base';

class First extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Header>
                <Left>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <Text style = {{color:'white',fontSize: 40}}>{'←'}</Text>
                    </TouchableOpacity>
                </Left>
                    <Body style={{justifyContent: 'center'}}>
                        <Title>        SolarCheck</Title>
                    </Body>
                </Header>
                
                    <Grid style = {{justifyContent: 'center', alignItems: 'center',backgroundColor:'#f0fff0'}}>
                        <Row>
                        <Col style ={{justifyContent: 'center',alignItems:'center'}}>
                            <Button transparent block large light>
                                <TouchableOpacity onPress={()=> {navigation.navigate("Temp")}}>
                                    <Text style={{fontSize: 30}}>
                                    Temperature
                                    </Text>
                                </TouchableOpacity>
                            </Button>
                        </Col>
                        <Col style ={{justifyContent: 'center'}}>
                            <Button transparent block large light>
                                <TouchableOpacity
                                    onPress={()=> {navigation.navigate("Humi")}}
                                    >
                                    <Text style={{fontSize: 30}}>
                                    Humidity
                                    </Text>
                                </TouchableOpacity>
                            </Button>
                        </Col>
                        </Row>
                        <Row style={{alignItems: 'center'}}>
                        <Col style ={{justifyContent: 'center'}}>
                            <Button transparent block large light>
                            <TouchableOpacity
                                onPress={()=> {navigation.navigate("Solar")}}
                            >
                                <Text style={{fontSize: 30}}>
                                    Radiation
                                </Text>
                            </TouchableOpacity>
                            </Button>
                        </Col>
                        <Col style ={{justifyContent: 'center'}}>
                            <Button transparent block large light>
                            <TouchableOpacity
                                onPress={()=> {navigation.navigate("Gradi")}}
                            >
                                <Text style={{fontSize: 30}}>
                                Gradient
                                </Text>
                            </TouchableOpacity>
                            </Button>
                        </Col>
                        </Row>
                    </Grid>
                    {/* <View>
                        <Button block large light>
                            <TouchableOpacity onPress={()=> {navigation.navigate("Temp")}}>
                                <Text style={{fontSize: 30}}>
                                Temperature
                                </Text>
                            </TouchableOpacity>
                        </Button>

                        <Button block large warning>
                            <TouchableOpacity
                                onPress={()=> {navigation.navigate("Humi")}}
                                >
                                <Text style={{fontSize: 30}}>
                                Humidity
                                </Text>
                            </TouchableOpacity>
                        </Button>

                        <Button block large danger>
                        <TouchableOpacity
                            onPress={()=> {navigation.navigate("Solar")}}
                        >
                            <Text style={{fontSize: 30}}>
                                Radiation
                            </Text>
                        </TouchableOpacity>
                        </Button>

                        <Button block large info>
                        <TouchableOpacity
                            onPress={()=> {navigation.navigate("Gradi")}}
                        >
                            <Text style={{fontSize: 30}}>
                            Gradient
                            </Text>
                        </TouchableOpacity>
                        </Button>
                    </View> */}
                
            </Container>

        );
    };
}

export default First;


FileReader.prototype.readAsArrayBuffer = function (blob) {
    if (this.readyState === this.LOADING) throw new Error("InvalidStateError");
    this._setReadyState(this.LOADING);
    this._result = null;
    this._error = null;
    const fr = new FileReader();
    fr.onloadend = () => {
        const content = atob(fr.result.substr("data:application/octet-stream;base64,".length));
        const buffer = new ArrayBuffer(content.length);
        const view = new Uint8Array(buffer);
        view.set(Array.from(content).map(c => c.charCodeAt(0)));
        this._result = buffer;
        this._setReadyState(this.DONE);
    };
    fr.readAsDataURL(blob);
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const atob = (input = '') => {
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, buffer, i = 0;
        buffer = str.charAt(i++);

        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
        buffer = chars.indexOf(buffer);
    }

    return output;
}