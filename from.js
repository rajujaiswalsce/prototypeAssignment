// console.log("heelo")



// function Product(name,brand,price){
//     this.name = name;
//     this.brand = brand;
//     this.price = price;

// }



// let arr = []

// function submitProduct(e){
//    e.preventDefault();
//     // console.log("raju");
//     let form = document.getElementById("products");

//     let name = form.name.value;
//     let brand = form.brand.value;
//     let price = form.price.value;
  
//     let p = new Product(name,brand,price)
//     arr.push(p)
//     console.log(arr)

// }


//-------CALL , APPLY,BIND ------->>>>>>>>>



let badroom = {
    name : "bedroom",
    purpose:"sleep",
};

let livingroom = {
    name : "livingroom",
    purpose:"Rest",
};


let soreroom = {
    name : "soreroom",
    purpose:"Store",
};


function food(f){
    console.log(`service ${f} in ${this.name} `);
}

// food.call(soreroom,'pizza')
// food.call(livingroom,'pizza')
// food.call(badroom,'pizza')


// food.apply(soreroom,["pizza"])

let p1 = food.bind(soreroom,"pizza");
 p1();
// console.log(p1)


