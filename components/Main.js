import React from 'react';
import { View, Image,StyleSheet} from 'react-native';


  const Main= () => {
    return (
      
        <View>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image
                        source={require('../image/europe.jpg')} style={styles.img}
                    />
                </View>
                <View >
                    <Image
                        source={require('../image/america.jpg')} style={styles.img}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', marginBottom:150}}>
                <View >
                    <Image
                        source={require('../image/ocean.jpg')} style={styles.img}
                    />
                </View>
                <View >
                    <Image
                        source={require('../image/sydney.jpg')} style={styles.img}
                    />
                </View>
            </View>
        </View>
        
    );
  }
  const styles = StyleSheet.create({
    img: {
        borderRadius:10,
        borderWidth:2,
        borderColor:'black', 
        marginLeft:18,
         marginTop:20
    }
  });
  
  export default Main;