import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import TodoDetails from './TodoDetails'

const Route = () => {

    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: "To Do App" , headerTitleAlign: "center"}} />
            <Stack.Screen name="TodoDetails" component={TodoDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route