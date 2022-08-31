//  ForEachLoops Only print Index all Number

// var myFriends=['Azmi', 'Adil', 'Emad', 'Saif'];
// myFriends.forEach(function(element,index,array){
//     console.log(element +" index:" +index+ " " +array);
// })

myFriends=['Azmi', 'Adil', 'Emad', 'Saif'];
myFriends.forEach((element,index,array) => {
    console.log(element +" index:" +index+ " " +array);
});

// OUTPUT

// Azmi index:0 Azmi,Adil,Emad,Saif
// Adil index:1 Azmi,Adil,Emad,Saif
// Emad index:2 Azmi,Adil,Emad,Saif
// Saif index:3 Azmi,Adil,Emad,Saif