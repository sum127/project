
import React from 'react';
import { ScrollView } from 'react-native';
import Logo from './Logo';
import Header from './Header';
import Path from './PathIcon';
import Main from './Main';





const Home= ({navigation}) => {
    return (
    <ScrollView>
        <Header></Header>
        <Logo navigation={navigation}></Logo>
        <Path></Path>
        <Main></Main>
    </ScrollView>
    );
  }

  
  export default Home;