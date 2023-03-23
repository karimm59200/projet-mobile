import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from './components/Register.js'
import Balance from './components/Balance.js'
import Advice from './components/Advice.js'



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName='PageRegister'>
                <Stack.Screen name="Register" component={Register} options={{headerShown : false}}/>
                <Stack.Screen name="Balance" component={Balance} options={{title : "Solde"}}/>
                <Stack.Screen name="Advice" component={Advice} options={{title : "Conseils"}} />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})