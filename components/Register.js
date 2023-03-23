import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import urlBdd from './../env';



export default function Register({ navigation } ) {
   // console.log('clique sur solde')

   // ici un formulaire d'inscription à notre application

   const [firstName, setFirstName]= useState('');
   const [lastName, setLastName]=useState('');
   const [email,setEmail]=useState('');
   const [password, setPassword]=useState('');
   const [isRegistred, setIsRegistred] = useState(false)


   const handleSubmit= async () =>{
        console.log(firstName, lastName, email,password, isRegistred)

    // if(lastName.length>0 && firstName.length>0 && email.length>0 && password.length>0){
       
    // }

   

    // firebase BDD
   const firebaseResponse = await fetch(`${urlBdd}`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            //les infos que je vais enregistrer en bdd
            body:JSON.stringify({
                // id va nous être generer par firebase
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
            })
            
    })

    if(!firebaseResponse.ok){
        throw new Error('problème lors de la récupération des données utilisateurs !')
    }

    const userData = firebaseResponse.json()
    console.log(userData); // objet utilisateur
    setIsRegistred(true);
    
   }



  return (
    <View style={{flex:1}}>
      <Text>Inscription</Text>
    <View style={{justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:25}}>Nom:</Text><TextInput  style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText ={text=>setLastName(text)} value={lastName}/>
        <Text style={{fontSize:25}}>Prenom:</Text><TextInput style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText ={text=>setFirstName(text)} value={firstName}/>
        <Text style={{fontSize:25}}>Mail:</Text><TextInput style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} keyboardType='email-address' onChangeText={text=>setEmail(text)} value={email}/>
        <Text style={{fontSize:25}}>Mot de passe:</Text><TextInput style={{ borderWidth:1, width:300, margin:12, borderRadius: 10}} onChangeText={text=>setPassword(text)} value={password}/>
        <View style={{marginVertical:10}}><Button  title="valider" onPress={handleSubmit}/></View>
    </View>
        { isRegistred && <View><Button  title="Solde" onPress={()=>navigation.navigate("Balance")}/></View>  }
    </View>
  )
}

const styles = StyleSheet.create({
    
})