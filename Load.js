import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Load extends Component {
    
    render() {
        const [animating, setAnimating] = useState(true);
        const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require('C:\Users\nljh0\expoTest\assets\saloris.PNG')}
          style={{width: wp(55), resizeMode: 'contain', margin: 30}}
        />
        <ActivityIndicator
          animating={animating}
          color="#6990F7"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    );
  };
}
  export default Load;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
  });