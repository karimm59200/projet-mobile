export let userConnected = {
    user : {
        firstName : null,
        lastName : null,
        email : null,
    },
    isConnected : false,
};

export const setConnected = (user) => {
    userConnected.user.firstName = user.firstName;
    userConnected.user.lastName = user.lastName;
    userConnected.user.email = user.email;
    userConnected.isConnected = true;
}; 

export const earning = [
    {salary: 0},
    {deposit: 0},
    {other: 0},
  ]

export const expense = {
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
  }