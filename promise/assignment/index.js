

let image = document.getElementById("loading_img")

let p1 = document.getElementById("show");

function statuso(){
    return true;
}


function order(){
    //promise

   let order = document.getElementById("orderin").value; 

    let my_promise = new Promise(function(resolve,reject){

        let p1 = statuso();
       setTimeout(function(){
        if(p1 === true){
            resolve(order)
        }else{
            reject("sorry we can't deliver this order")
        }



       },1000)

       

               
    });

   my_promise.then(function(res,err){
       console.log(`your ${res} is ready`)
       image.src = 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=500'
      p1.innerText = `your ${res} is ready`
        
   });

   my_promise.catch(function(res,err){
    console.log(`your ${res} is ready`)
});



}