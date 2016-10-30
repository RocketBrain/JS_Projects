//Printing a fibonacci sequence in javascript


function Fibonacci(){
    this.looping = function (n){
        var a = 0;
        var b = 1;
        var f = 1;

        for (var i = 2 ; i<=n; i++){
            f = a + b;
            a = b;
            b = f;
            console.log(i);
        }
        return f;

    };


this.recursive = function(n){

    if(n<=2){
        return 1;
    }
    else {
        return this.recursive(n-1) + this.recursive(n-2);
    }
  }
}
