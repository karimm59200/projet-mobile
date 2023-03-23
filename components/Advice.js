import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function Advice({ navigation }) {
  return (
    <View>
      <Text>Advice</Text>
      <Button  title="Retour à votre solde" onPress={()=>navigation.navigate("Balance")}/> 
    </View> 
     )

}

const styles = StyleSheet.create({})