
// console.log("hello")
// setTimeout - once
//setIntervel - multiple

let h1 = document.getElementById("counter")
function counter(){

    let i=60;
    let id = setInterval(function(){

        i = i-1;
        h1.innerText = i;
        
        if(i===0){
          clearInterval(id)
          alert('Timeout!!')
        }
        
       
        // console.log(i);
    },100);

}

counter();