export let user = {
    firstName : null,
    lastName : null,
    email : null,
    isConnected : false,
    isRegistered :  false
};

export const setConnected = (user) => {
    user.firstName = user.firstName;
    user.lastName = user.lastName;
    user.email = user.email;
    user.isConnected = true;
    user.isRegistered = true;
}; 
