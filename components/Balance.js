import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState } from 'react'

export default function Balance({ navigation }) {

    const [earning, setEarning] = useState('')
    const [expense, setExpense] = useState('')

    // const handleSubmit = ()=>{
    //     console.log("btn handleSubmit")
    //     console.log(earning)
    // }


  return (
    <View>
      <Text>Balance</Text>

        <Text>salaire et autres revenus:{earning}</Text>
        <TextInput placeholder='entrez vos revenus en euros' keyboardType='numeric' style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText={setEarning}/>
        <TextInput placeholder='entrez vos dépenses en euros' keyboardType='numeric' style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText={setExpense}/>
        {expense ?<Text> vos dépenses :{expense}€</Text>:""}

        {earning && expense ?<Text>votre nouveau solde:{parseInt(earning)-parseInt(expense)}€</Text>:""}
        
        <View style={{marginVertical:20}}>
            {/* <Button title="envoyer" onPress={handleSubmit}/> */}
        </View> 
        
        
      <Button title="Conseils" onPress={()=>navigation.navigate("Advice")}/> 
    </View>
  )
}

const styles = StyleSheet.create({})