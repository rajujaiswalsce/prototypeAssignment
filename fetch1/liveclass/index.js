

// API:- 

//1. Fulfiled //Give us the data;
//2. Pending // Delay/take time;
//3. Rejected // May reject our request;

// let x = fetch()
// console.log(x)

// youtub, google Map ,facebook

// const url = "https://reqres.in/api/users";


// fetch(url).then(function(res){

//   return res.json();  // res. collect() data 

// })
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log(err)
// })

// Readable + Stream (data in chunks)


// Async Await

// async function getDta(){

//     try{
//        let res = await fetch(url)  // await is response
//        let user = await res.json();
//        append(user.data)
//       console.log(user.data)
//     }catch(err){
//      console.log(err)
//     }
  
// }

// getDta();


// function append(data){
//    let container = document.getElementById("container")
//  data.forEach(function(el){
//      let image = document.createElement("img")
//      image.src = el.avatar;

//      let  name  = document.createElement("p");
//      name.innerText = el.first_name;

//      let emails = document.createElement("p")
//      emails.innerText = el.email;
//      let div = document .createElement("div")
//      div.append(image,name,emails)
//    container.append(div)

//  })
//  }

const url = "https://fakestoreapi.com/products"



async function productData(){
   try{

    let res = await fetch(url)
    let y = await res.json();
    append(y)
    console.log(y)

   }catch(err){
       console.log(err)
   }

   

}
productData()



function append(data){
   let container = document.getElementById("container")
 data.forEach(function(el){

    let catgori = document.createElement("p");
    catgori.innerText = el.category;
     let image = document.createElement("img")
     image.src = el.image;

     let  name  = document.createElement("p");
     name.innerText = el.description;

     let price = document.createElement("p")
     price.innerText = el.price;
     let div = document .createElement("div")
     div.append(catgori,image,name,price)
   container.append(div)

 })
 }



