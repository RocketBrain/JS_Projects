var cars= {
  makes: [ 'Toyota',
          'BMW',
          'Honda',
  ],
  addCar: function(car) {
  	//The beautiful thing about this logical or statement is that it is terse and elegant.
    this.makes = this.makes || [];
    //avoiding mish-mash code, these logical operators get straight to the point, avoiding conditional operators when necessary.
    this.makes.push(car);
  }
}