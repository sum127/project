
import React, { useState } from 'react';
import { View} from 'react-native';
import { Card, Button,Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from '../redux/actions/tasks'
import { LISTDATA } from '../share/list'

  const list = ({route}) => {


    const [count, setCount] = useState(0);
    const { id } = route.params;
    const item = LISTDATA.filter(item => item.id == id)[0];

    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks);
    console.log("--tasks--");
    console.log(tasks);

    const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;
    console.log("--isExistedTask--");
    console.log(isExistedTask);


    console.log(item);
    return (
      
        
        <View >
            <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Image source={item.image}></Card.Image>
                <Text style={{textAlign:'right', fontSize:20, marginTop:10}}> {act}</Text>

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

  const act =() => {
      return(
        <Text>HI</Text>
      )
      
  }
  
  export default list;