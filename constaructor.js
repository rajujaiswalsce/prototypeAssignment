// console.dir("hello raju")


// object 
 
// const person = {
//     name: "raju",

//     age : 21,
//     run:function(m){
       
   
    
//     return  this.name   + " " + this.age ;
        
//     }
// }

// let x = person.run()

// console.log(x)

// console.log(this)

// function func(){
//     console.log(this)
// }

// func();



// let obj = {
//     team : "Csk",

//     print:function(){
//         console.log(this.team)
//     },
// }

// obj.print()

// normal function use object

function myObj (n,b,p){
    obj.name = n;
    obj.brand = b;
    obj.price = p;
}




//constaractor function

function nikeProduct(n,b,p){
    this.name = n;
    this.brand = b;
    this.price = p;

    this.print = function(){
      console.log(this)
    };
}

let x = new nikeProduct("shoe","nike",1000);
let y = new nikeProduct("shoe","nike",3000);

console.log(x.brand)

// x.print();
// y.print();
// console.log(x)




