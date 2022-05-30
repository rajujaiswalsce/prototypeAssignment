

function fuc(event){
  event.preventDefault();
   
  let name  = document.getElementById("name")
  let number = document.getElementById("number")
  let address = document.getElementById("address")


  if((name.value !==0) && (number.value !==0) && (address.value !==0)){


  setTimeout(function(){
    alert("your oder is accepted")
  },0000);



  setTimeout(function(){
    alert("your oder is being packed")
  },3000);


  setTimeout(function(){
    alert("your oder is transit")
  },8000)



  setTimeout(function(){
    alert("your oder is out of  delivery")
  },10000)


  setTimeout(function(){
    alert("your oder delivery")
  },12000)

  }else{
      alert("Invalid")
  }


}