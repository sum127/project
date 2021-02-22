import React from 'react';
import { Text} from 'react-native';

import { LISTDATA } from '../share/list'

import {  Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달됨
const List = ({navigation}) => {

  const list = LISTDATA;
  
  return (
     <ScrollView>
        {
          list.map((item, i) => (
           <Card key={i} >
                <Card.Title>{item.title}</Card.Title>
                <Card.Image source={item.image} onPress={()=>{navigation.navigate("Details", {id: item.id})}}></Card.Image>
                <Text style={{textAlign:'right', fontSize:20, marginTop:10}}> 190,000,000원</Text>
            </Card>
          ))
        }
      </ScrollView>
    
  )
}
export default List;

