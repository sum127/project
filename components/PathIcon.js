import React from 'react';
import { View, Image, StyleSheet} from 'react-native';


  const Path= () => {
    return (
        
        
        <View style={{flexDirection:'row', paddingTop:40,paddingBottom:40, borderBottomWidth:2, borderBottomColor:'black'}}>
            
            <View style={styles.box}>
                <Image
                    source={require('../image/airplaneICON.png')} 
                />
            </View>
            <View style={styles.box}>
                <Image
                    source={require('../image/carICON.png')} 
                />
                
            </View>
            <View style={styles.box}>
                <Image
                    source={require('../image/hotelICON.png')} 
                />
            </View>
            
        </View>
        
        
    );
    
    
  }
  const styles = StyleSheet.create({
    box: {
        flex:1,
        marginLeft:38
    }
  });
  
  
  export default Path;