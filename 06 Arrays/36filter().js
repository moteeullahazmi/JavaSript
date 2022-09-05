const prices= [200,300,450,400,500,600];

const newPriceTag = prices.filter((elem,index) =>  {
    return elem<400;
})
console.log(newPriceTag);

// empty array