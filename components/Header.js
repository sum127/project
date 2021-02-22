import React from 'react';
import { View, Text, Image} from 'react-native';


  const Header = () => {
    return (
      
        
        <View>
            
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:50, marginLeft:100}}>여행 투어</Text>
            <Image
                source={require('../image/login.png')}  style={{marginLeft:70,marginTop:12}}
              />
            </View>
            
              
           
        </View>
    );
  }
  
  export default Header;