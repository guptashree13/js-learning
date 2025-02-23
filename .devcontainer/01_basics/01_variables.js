const accountId = 245678
let accountEmail = "shreegupta.bly@gmail.com"
var accoundPasswd = "12345"
accountCity = "Bangalore"
let accountState; //when its not initiate it will be undefined

//accountId = 2   //not allowed
accountEmail = "hc@.com"
accoundPasswd = "21212121"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
bcoz of issue in block scope(let) and functional scope(var)
*/

console.table([accountId,accountEmail,accoundPasswd,accountCity,accountState]);

