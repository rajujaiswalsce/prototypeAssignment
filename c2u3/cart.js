

let items = JSON.parse(localStorage.getItem("items"));

// console.log(items)

function gettotal(){
    let total = document.getElementById("cart_total");

    let x = 0;
    let price = items.reduce(function(sum,e,i){
      return sum + e.price;
    },0) 
    total.innerHTML = price;

}
gettotal()


let container = document.getElementById("cart");

items.map(function(e,i){
     
    let div = document.createElement("div")

    let pname = document.createElement("p");
    pname.innerText = e.name;

    let image = document.createElement("img");
    image.src = e.image;

    let price = document.createElement("p")
    price.innerText = e.price;

    let btn = document.createElement('button')
    btn.innerHTML = "Remove";

    btn.addEventListener("click",function(){
        removepro(e,i)
    })
    
   div.append(pname,image,price,btn)

   container.append(div)

  })

  function removepro(e,i){
      items.splice(i,1);
      localStorage.setItem("items",JSON.stringify(items));
      window.location.reload()
  }
