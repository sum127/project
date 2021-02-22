import React from 'react';
import { View, Image,StyleSheet} from 'react-native';
import Touchable from 'react-native-platform-touchable';

  const Logo= ({navigation}) => {

    console.log(navigation)

    return (
      
        <View>
          <Touchable onPress={ () => { navigation.navigate("Details", {id: 1}) }}>
            <Image
              source={require('../image/mainBox2.jpg')} style={styles.ground} 
            />
          </Touchable>
          <Touchable onPress={ () => {  navigation.navigate("Details", {id: 7}) }}>
            <Image
              source={require('../image/mainBox3.jpg')} style={styles.ground}
            />
          </Touchable>
          
        </View>
    );
  }

  const styles = StyleSheet.create({
    ground: {
      borderWidth:2,
      borderColor:'black'
    }
  });
  
  export default Logo;