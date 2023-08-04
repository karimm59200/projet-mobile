import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

export default function Balance({navigation}) {
  const [selectedValueEarning, setSelectedValueEarning] = useState();
  const [selectedValueExpense, setSelectedValueExpense] = useState();
  const [earning, setEarning] = useState([
    {
      key: 'Salaire',
      value: 'Salaire',
      total: 0,
    },
    {key: 'Dépôt', value: 'Dépôt', total: 0},
    {key: 'Autre', value: 'Autre', total: 0},
  ]);

  const [expense, setExpense] = useState([
    {
      key: 'Voyages',
      value: 'Voyages',
      total: 0,
    },
    {
      key: 'Domestique',
      value: 'Domestique',
      total: 0,
    },
    {
      key: 'eTransfer',
      value: 'eTransfer',
      total: 0,
    },
    {
      key: 'Chèque',
      value: 'Chèque',
      total: 0,
    },
    {
      key: 'Transport',
      value: 'Transport',
      total: 0,
    },
    {
      key: 'Abonnements',
      value: 'Abonnements',
      total: 0,
    },
    {
      key: 'Loisirs',
      value: 'Loisirs',
      total: 0,
    },
    {
      key: 'Autres',
      value: 'Autres',
      total: 0,
    },
  ]);
  const [earningValueInput, setEarningValueInput] = useState();
  const [expenseValueInput, setExpenseValueInput] = useState();

  function addEarning() {
    const value = Number(earningValueInput);
    if (!selectedValueEarning || isNaN(value)) {
      return;
    }
    let earningTemp = earning;
    earningTemp.forEach(elt => {
      if (elt.key === selectedValueEarning) {
        elt.total = elt.total + value;
        return;
      }
    });

    setEarning(earningTemp);
    calculateTotal();
  }

  function addExpense() {
    const value = Number(expenseValueInput);
    if (!selectedValueExpense || isNaN(value)) {
      return;
    }
    let expenseTemp = expense;
    expenseTemp.forEach(elt => {
      if (elt.key === selectedValueExpense) {
        elt.total = elt.total + value;
        return;
      }
    });
    setExpense(expenseTemp);
    calculateTotal();
  }

  const [totalCount, setTotalCount] = useState(0);

  const calculateTotal = () => {
    let totalEarning = 0;
    let totalExpense = 0;
    earning.map(elt => {
      totalEarning = totalEarning + elt.total;
    });
    expense.map(elt => {
      totalExpense = totalExpense + elt.total;
    });
    setTotalCount(totalEarning - totalExpense);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Gains */}
        <Text style={{fontSize: 25}}>Salaires et autres revenus</Text>

        <SelectList
          maxHeight={120}
          setSelected={val => setSelectedValueEarning(val)}
          data={earning}
          save="key"
        />
        <Text style={{fontSize: 12}}>{selectedValueEarning}</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={value => setEarningValueInput(value)}
          style={{borderWidth: 1, width: 300, margin: 12, borderRadius: 10}}
        />
        <View>
          {earning.map((item, index) => {
            return (
              <Text key={index}>
                {item.value} : {item.total}
              </Text>
            );
          })}
        </View>
        <View style={{marginVertical: 20}}>
          <Button title="Enregistrer ce gain" onPress={addEarning} />
        </View>

        {/* Dépenses */}
        <Text style={{fontSize: 25}}>Dépenses</Text>
        <SelectList
          maxHeight={120}
          setSelected={val => setSelectedValueExpense(val)}
          data={expense}
          save="key"
        />
        <Text style={{fontSize: 12}}>{selectedValueExpense}</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={value => setExpenseValueInput(value)}
          style={{borderWidth: 1, width: 300, margin: 12, borderRadius: 10}}
        />
        {expense.map(item => {
          return (
            <Text key={item.id}>
              {item.value} : {item.total}
            </Text>
          );
        })}
        <View style={{marginVertical: 20}}>
          <Button title="Enregistrer cette dépense" onPress={addExpense} />
        </View>

        <Text style={{fontSize: 25}}>Solde total</Text>
        <Text style={{fontSize: 25}}>{totalCount} €</Text>
      </View>
    </ScrollView>
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
