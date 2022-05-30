
//`https://grocery-masai.herokuapp.com/items`


let url = `https://grocery-masai.herokuapp.com/items`;

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
   console.log(res.data)
   itemData(res.data)
})


let container = document.getElementById("items");

function itemData(data){

  data.map(function(e,i){
     
    let div = document.createElement("div")

    let pname = document.createElement("p");
    pname.innerText = e.name;

    let image = document.createElement("img");
    image.src = e.image;

    let price = document.createElement("p")
    price.innerText = e.price;

    let btn = document.createElement('button')
    btn.innerHTML = "Add to cart";

    btn.setAttribute("class","btn2")

    btn.addEventListener("click",function(){
        addproduct(e,i)
    })
    
   div.append(pname,image,price,btn)

   container.append(div)

  })
  
  function addproduct(e,i){
      let index_array = JSON.parse(localStorage.getItem("items")) || []

      index_array.push(e);
      console.log(index_array)
      localStorage.setItem("items",JSON.stringify(index_array))



      //count

      let count = document.querySelector("#item_count");
      count.innerHTML = null;
      count.innerHTML = JSON.parse(localStorage.getItem("items")).length;
  }



}

