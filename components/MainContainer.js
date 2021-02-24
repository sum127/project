import React,{ useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Details from './Details'
import Home from './Home'
import List from './List'
import Tasks from './Tasks'

import { Alert } from 'react-native'

import { useDispatch, useSelector  } from 'react-redux';

const TaskStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"
             
           }} />
           <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
      </HomeStack.Navigator>
    )
  }
  
  const ListStackScreen = () => {
    return (
      <ListStack.Navigator>
        <ListStack.Screen name="List" component={List} options={{title:"List", headerTitleAlign:"center"}} />
        <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
      </ListStack.Navigator>
    )
  }
  const TaskStackScreen = () => {
    return (
      <TaskStack.Navigator>
        <TaskStack.Screen name="Tasks" component={Tasks} options={{title:"Tasks", headerTitleAlign:"center"}} />
      </TaskStack.Navigator>
    )
  }

  const tabBarOptions= {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    activeBackgroundColor:'black',
    labelStyle:{
      fontSize:20,
      marginBottom : 10
    }
  }
  export default function Main(){
    const dispatch = useDispatch();
    useEffect(()=>{
      console.log("-- main is mounted--")
      // back-end에서 tasks 데이터를 가져오고, global state를 갱신
      dispatch({type:"FETCH_TASKS"})
    }, [])

    const alert = useSelector(state => state.alert)
  console.log('--alert--')
  console.log(alert)

  if(alert.isShow) {
    Alert.alert(
      "Errors",
      alert.msg,
      [
        { text: "OK", onPress: () => dispatch({type:"CLOSE_ALERT"}) }
      ],
      { cancelable: false }
    );
  } 
    return(
        <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator  tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Tasks" component={TaskStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }