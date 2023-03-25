import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useState} from 'react';

export default function Balance({navigation}) {
  const [earning, setEarning] = useState([
    {salary: 0},
    {deposit: 0},
    {other: 0},
  ]);
  const [expense, setExpense] = useState({
    travel: 0,
    home: 0,
    eTransfer: 0,
    cheque: 0,
    autoMoto: 0,
    various: 0,
    subscriptionPhoneandInternet: 0,
    subscriptionSport: 0,
    hobbies: 0,
    others: 0,
  });
  const [solde, setSolde] = useState(0);
  const [expenseHome, setExpenseHome] = useState([]);

  const [totalEarning, setTotalEarning] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)

  const setNewEarning = (index,key, earningValue) => {
    let earningTemp = earning;
    earningTemp[index][key] = earningTemp[value][key] + earningValue;
    setEarning(earningTemp);
  };

  const setNewExpense = (index,key, expenseValue) => {
    let expenseTemp = expense;
    expenseTemp[index] = expenseTemp[value][key] + expenseValue;
    setEarning(expenseTemp);
  };

  const allEarning = ()=>{
    let total = 0;
    Object.values(earning).map((val)=>total = total + val)
    return total;
  }

  const allExpense = ()=>{
    let total = 0;
    Object.values(expense).map((val)=>total = total + val)
    return total;
  }

  // const handleSubmit = ()=>{
  //     console.log("btn handleSubmit")
  //     console.log(earning)
  // }

  function AddMoney() {
    const enter = 0;
    setSolde(state => {
      return state + enter;
    });
    setEarning(state => {
      return state.push([...earning, enter]);
    });
  }

  function moneyOut() {
    const out = 0;
    setSolde(state => {
      return state - out;
    });
    setExpense(state => {
      return state.push(out);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>salaire et autres revenus:{earning}</Text>
      <TextInput
        placeholder="entrez vos revenus en euros"
        keyboardType="numeric"
        style={{borderWidth: 1, width: 300, margin: 12, borderRadius: 10}}
        onChangeText={(value)=>setNewEarning('salary',value)}
      />

      <Text style={{fontSize: 25}}>Dépenses:{earning}</Text>
      <TextInput
        placeholder="entrez vos dépenses en euros"
        keyboardType="numeric"
        style={{borderWidth: 1, width: 300, margin: 12, borderRadius: 10}}
        onChangeText={setExpense}
      />
      {/* <TextInput placeholder='entrez vos dépenses de logement' keyboardType='numeric' style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText={ }/> */}
      {/* {expense ? <Text> vos dépenses :{expense}€</Text> : ''} */}
      <Text>
        {earning.map((index, value) => {
          return (
            
            <View>
              <Text key={value}>hello</Text>
            </View>
          );
        })}
      </Text>

      {/* {earning && expense ? (
        <Text>votre nouveau solde:{totalEarning - totalExpense}€</Text>
      ) : (
        ''
      )} */}

      <View style={{marginVertical: 20}}>
        {/* <Button title="envoyer" onPress={handleSubmit}/> */}
        <Button title="Entrer d'argent " onPress={() => AddMoney()} />
      </View>
      <View style={{marginVertical: 20}}>
        {/* <Button title="envoyer" onPress={handleSubmit}/> */}
        <Button title="dépenses " onPress={moneyOut} />
      </View>

      <Button title="Conseils" onPress={() => navigation.navigate('Advice')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cef9f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
