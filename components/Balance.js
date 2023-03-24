import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState } from 'react'

export default function Balance({ navigation }) {

    const [earning, setEarning] = useState([])
    const [expense, setExpense] = useState([])
    const [solde, setSolde] = useState(0)
    const [expenseHome, setExpenseHome] = useState([])
    

    // const handleSubmit = ()=>{
    //     console.log("btn handleSubmit")
    //     console.log(earning)
    // }

    function AddMoney(){
        const enter = 0
        setSolde((state)=>{
            return state + enter
        })
        setEarning((state)=>{
            return state.push([...earning, enter])
        })
    }

    function moneyOut(){
        const out = 0
        setSolde((state)=>{
            return state - out
        })
        setExpense((state)=>{
            return state.push(out)
        })
    }


  return (
    <View style={styles.container}>
      

        <Text style={{fontSize: 25}}>salaire et autres revenus:{earning}</Text>
        <TextInput placeholder='entrez vos revenus en euros' keyboardType='numeric' style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText={setEarning}/>


        <Text style={{fontSize: 25}}>Dépenses:{earning}</Text>
        <TextInput placeholder='entrez vos dépenses en euros' keyboardType='numeric' style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText={setExpense}/>
        {/* <TextInput placeholder='entrez vos dépenses de logement' keyboardType='numeric' style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText={ }/> */}
        {expense ?<Text> vos dépenses :{expense}€</Text>:""}

        {earning && expense ?<Text>votre nouveau solde:{earning-expense}€</Text>:""}
        
        <View style={{marginVertical:20}}>
            {/* <Button title="envoyer" onPress={handleSubmit}/> */}
             <Button title="Entrer d'argent " onPress={()=>AddMoney()}/> 
        </View> 
        <View style={{marginVertical:20}}>
            {/* <Button title="envoyer" onPress={handleSubmit}/> */}
             <Button title="dépenses " onPress={moneyOut}/> 
        </View> 
        
        
      <Button title="Conseils" onPress={()=>navigation.navigate("Advice")}/> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#cef9f2',
    justifyContent:'center',
    alignItems:'center'
  }
})