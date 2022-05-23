



// const cat = {
//     name:"cat",
//     lags:4,
//     fur :true,
//     tail:true,
//     type:"animal"
// }
// console.log(cat)


// const tiger = {
//     name:"tiger",
//     lags:4,
//     fur :true,
//     tail:true,
//     type:"animal"
// }

// const tiger = Object.create(cat);
// tiger.name = "tiger"
// console.log(tiger.name);



//Example 2:

// const student = {
//     batch:"WEB_17",
//     institute:"Masai School",
//     unit:4,
//     course:"FSWD",
// }

// const s1 = Object.create(student)
// s1.name = "raju"
// console.log(s1.name)


// Nike product (brand,logo,seller)

// const product = {
//     seller:"flipkart",
//     logo:"url",
//     brand:"Nike",
    
// }

// // console.log(product)

// const s2 = Object.create(product)

// console.log(s2)


// Constructor Function 

function Product(type){
    this.type = type
    this.seller = "flipkart";
    this.logo="url";
    this.brand="Nike";
}

Product.prototype.discount = function(){
    console.log("50% Discount")
}
Product.prototype.changePro = function(type){
    this.type = this.type
}

const s1 = new Product("shoe");


let p2 = new Product("sleeper");
s1.changePro ("t-shirts");
s1.discount();
console.log(p2)

// console.log(s1.discount())
console.log(s1)

