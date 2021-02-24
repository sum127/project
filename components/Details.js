
import React, { useCallback, useEffect, useState } from 'react';
import { View} from 'react-native';
import { Card, Button,Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from '../redux/actions/tasks'
import api from '../api/list'
  const list = ({route}) => {
    console.log("--detail");
  console.log(route.params);  // navigate로 넘어온 매개변수

    const [count, setCount] = useState(0);
    const { id } = route.params;
    const [item, setItem] = useState({});
    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks);
    console.log("--tasks--");
    console.log(tasks);

    const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;
    console.log("--isExistedTask--");
    console.log(isExistedTask);

    const getDetails = useCallback(async () => {
        const result = await api.get(id);
        console.log(result.data);
        setItem(result.data);
      }, [])
    
      useEffect(()=>{
        getDetails();
      }, [])

    return (
      
        
        <View >
            <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Image source={{uri: item.image}}></Card.Image>
                <Text style={{textAlign:'right', fontSize:20, marginTop:10}}></Text>

                <View>
                    <View style={{flexDirection:'row', marginLeft:200}}>
                        <Button onPress={() => setCount(count-1)} title="D" buttonStyle={{width:25, height:25, marginRight:10}}></Button>
                        <Text>{count} 명</Text>
                        <Button onPress={() => setCount(count+1)} title="U" buttonStyle={{width:25, height:25, marginLeft:10}}></Button>
                    </View>
                    
                    <Text style={{marginLeft:250, marginTop:50}}>{count*100000}원</Text>
                </View>
                {
                    isExistedTask 
                        ?
                        <Button
                            onPress={()=>{dispatch(removeTask(id))}}
                            buttonStyle={{height:40, marginTop:10, backgroundColor:"black"}}
                            title='취소하기' 
                        /> 
                        :
                        <Button
                            onPress={()=>{dispatch(addTask(item))}}
                            buttonStyle={{height:40, marginTop:10, backgroundColor:"gray"}}
                            title='예약하기' 
                        />
                }
            </Card>
           
        </View>
    );
  }

  
  export default list;