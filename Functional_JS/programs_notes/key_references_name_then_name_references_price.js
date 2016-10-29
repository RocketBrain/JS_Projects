var carMake = {
  BMW: {price: 50000, kg: 500, color: "black"},
  Toyota: {price: 20000, kg: 450, color: "white"},
  };

function listPrice(make) {
  for (var key in make) {
    // make is the object. Key references name. Name references price. 
    console.log("This is a " + key + ", with a price of " + make[key].price );
  }
}

listPrice(carMake);
