import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import {userConnected, setConnected} from '../store/store';
import usersBdd from './../store/bdd.json';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async () => await fetchUser();

  const fetchUser = async () => {
    //CODE POUR LA VRAIE BDD
    /*
    const userResponse = await fetch(
      `https://gestionperso-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    if (!userResponse.ok) {
      throw new Error('Erreur dans la base de données');
    }
    const userData = userResponse.json();
    */
    /*
        if(!userData) {
            console.log('Ce user n\'existe pas')
        }
    */

    /*
    userData.then(response => {
      Object.values(response).forEach(value => {
        if (value.email === email && value.password === password) {
          console.log('GOOD VALUE ',value)
          setConnected(value);
          console.log('USER ',user);
          return;
        }
      });
    });
  
    */

    //CODE A SUPPRIMER QUAND VRAIE BDD
    //Récupération de la liste des users sous format json
    const listOfUsers = JSON.parse(JSON.stringify(usersBdd));
    /*
    Boucle sur la liste transformé en objet JS.Si le user existe dans la liste , on set le userConnected dans le store avec les informations
    de ce user.
    */
    Object.values(listOfUsers).map(user => {
      if (user.email === email && user.password === password) {
        setConnected(user);
        return;
      }
    });

    //On log un message d'erreur si le user n'existe pas
    if (!userConnected.isConnected) {
      setErrorMessage('email ou mot de passe erroné !');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else {
      //Sinon on redirige vers la page des comptes
      navigation.navigate('Balance');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontFamily: 'Georgia', fontSize: 25}}>
        "Les cartes de crédit ne sont pas vos amies"
      </Text>
      <Text style={{fontWeight: 'bold', fontFamily: 'Georgia', fontSize: 25}}>
        {' '}
        Warren Buffett
      </Text>
      <Image
        style={styles.image}
        source={require('../assets/kiss.png')}
        resizeMode="contain"
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>Mail:</Text>
        <TextInput
          style={{borderWidth: 1, width: 300, margin: 6, borderRadius: 10}}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={{fontSize: 25}}>Mot de passe:</Text>
        <TextInput
          style={{borderWidth: 1, width: 300, margin: 6, borderRadius: 10}}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Text style={{fontSize: 15, color:'red'}}>{errorMessage}</Text>
        <View style={{marginVertical: 30}}>
          <Button title="valider" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
  },
});
