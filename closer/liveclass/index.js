 
// accept the input;
// fetch the data
// accepted the data;

let movies_div = document.getElementById("movies")

let id;
  
async function searchMovies(q){

    // perepare url 

    try{
        let url = `http://www.omdbapi.com/?s=${q}&apikey=779dd5a`;

        let res = await fetch(url);
   
        let data = await res.json();
       //  console.log(data)
      return data.Search;

    }catch(error){
        console.log("error")
    }
    

}

// apenend



function appendMovies(movies){


   movies_div.innerHTML = null;

   if(movies === undefined){
       return false;
   }


    movies.forEach(function(el){

        let p = document.createElement("p")
        p.innerText = el.Title;
        movies_div.append(p) 

    })
  
}





 async function main(){

let query = document.getElementById("query").value;
let response = searchMovies(query);
   // searchmovies isreturning promise, ansyc function no matter
// console.log(query)

let data =  await response;

console.log(data)


appendMovies(data)



}
// main("a")  -> setTimeout(main,1000,'a') ->id ->data
// main("av") ->

function debounceFunction(func,delay){

  if(id){
      clearTimeout(id)
  }

 
    id =  setTimeout(function(){

    func()


    },delay)



}