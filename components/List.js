import React, { useCallback, useEffect, useState } from 'react';
import { Text} from 'react-native';

import { LISTDATA } from '../share/list'

import {  Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import api from '../api/list'
// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달됨
const List = ({navigation}) => {


    // 백엔드에 API요청후 응답받은 데이터를 화면에 다시렌터딩
    // state 처리
    const [list, setList] = useState([]);
    
    
    // 특정조건에만 함수가 생성되도록 하는것이 usecallback
    // , [] 함수가 재생성될 조건
    // ex [data]  <- data라는 객체변수가 생성되거나 바뀔때 함수가 재생성
    // [] 안에가 빈값이면 컴포넌트가 처음 마운트 됐을때만 함수생성
    // []빼면 항상생성됨
    const getList =useCallback(async () => {
      // 해당컴포넌트에 async 가있어야 await사용가능
      const result = await api.list();
      console.log(result.data);
      setList(result.data);
    }, [])
  
    // useEffect는 특정조건에 맞게 실행되는 함수를 정의
    // , [] 컴포넌트가 처음 마운트 됐을때만 함수생성
    // ex [data]  <- data라는 객체변수가 생성되거나 바뀔때 함수가 실행됨
    // useEffect에는 async 정의가 안돼서 usecallback과 함께사용(event hook)
    // []빼면 항상실행됨
    // useEffect(()=>{
    //   getList();
    // }, [])
  
    // 텝화면 이동시 새로 갱신하는법
    
    useEffect(()=>{
      // navigation 이벤트 리스너를 생성
      // 반환값이 이벤트 리스너 해제 함수
      const  unsubscribe = navigation.addListener(
        'focus',
        () => {
          console.log('focus')
          getList();
        }
      )
      // clean-up function(객체소멸) (업데이트를 위한 이전함수 소멸)
      // useEffect(()=>{ ... return 함수명 },[])
  
      // component가 unmount 되는 시점에 clean up 함수가 실행됨
      return unsubscribe;
    },[navigation])
  
  return (
     <ScrollView>
        {
          list.map((item, i) => (
           <Card key={i} >
                <Card.Title>{item.title}</Card.Title>
                <Card.Image source={{uri: item.image}} onPress={()=>{navigation.navigate("Details", {id: item.id})}}></Card.Image>
                <Text style={{textAlign:'right', fontSize:20, marginTop:10}}> 190,000,000원</Text>
            </Card>
          ))
        }
      </ScrollView>
    
  )
}
export default List;

