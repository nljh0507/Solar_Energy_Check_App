import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Content, Grid, Col, Row,Center} from 'native-base';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
  
  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from 'react-native-chart-kit';
  const MyPieChart = () => {
    return (
      <>
        <Text style={styles.header}>Pie Chart</Text>
        <PieChart
          data={[
            {
              name: 'Test1',
              population: 20,
              color: 'rgba(131, 167, 234, 1)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Test2',
              population: 10,
              color: '#F00',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Test3',
              population: 15,
              color: 'rgb(0,0,0)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Test4',
              population: 20,
              color: 'rgb(0, 0, 255)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
          ]}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute //for the absolute number remove if you want percentage
        />
      </>
    );
  };
  const MyLineChart = () => {
    return (
      <>
        <Text style={styles.header}>Temperature</Text>
        <LineChart
          data={{
            labels: ['12', '13', '14', '15', '16', '17'],
            datasets: [
              {
                data: [21, 23, 23, 25, 23, 22],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          xAxisLabel={'시 '}
          //yAxisLabel //문장앞
          yAxisSuffix={'℃ '} //문장뒤
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 0, //소수점자리
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,//차트 내용 컬러
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,//x, y축 라벨컬러
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  };

class Temp extends Component {
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
                <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Title>Temperature                    </Title>
                </Body>
                </Header>
                <SafeAreaView style={{flex: 1}}>
                    <ScrollView>
                        <View style={styles.container}>
                        <View>
                            <MyLineChart />
                            <MyPieChart />
                        </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                
            </Container>
            
        );
    };
    
}

export default Temp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
  });