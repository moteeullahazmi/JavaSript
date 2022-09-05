// var -> function scope
// let and cons-> Block Scope & If write in parent class then use only child.
// cons -> same only use constant type value

function bioData(){
    let myFirstName= "Moteeullah";
    console.log(myFirstName);
if(true){
    let myLastName= "Azmi";
    console.log('inner ' +myFirstName);
    console.log('outer ' +myLastName);
}
console.log('innerOuter' +LastName);
}

bioData();
