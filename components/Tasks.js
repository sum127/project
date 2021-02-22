import React from 'react';
import { ScrollView } from 'react-native';
import {  Card } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/actions/tasks'
import { Button } from 'react-native';
  const Tasks = ({ navigation }) => {
    
    const tasks = useSelector(state => state.tasks);
    console.log("--tasks state in Tasks Component");
    console.log(tasks);

    const dispatch = useDispatch();

    return (
      
      <ScrollView>
      {
        tasks.map((item, i) => (
          <Card key={i} >
                <Card.Title>{item.title}</Card.Title>
                
                      <Card.Image source={item.image} onPress={()=>{navigation.navigate("Details", {id: item.id})} }></Card.Image>
                
                <Button title="취소하기" onPress={()=>{dispatch(removeTask(item.id))}}></Button>
                </Card>
        ))
      }
      </ScrollView>
    
    );
  }
  
  export default Tasks;