

// console.log("hello")

// "https://swapi.dev/api/people/?search={query}"
let id;

 async function getData(){
   let query = document.getElementById("query").value;
  let url = `https://swapi.dev/api/people/?search=${query}`
  let res  = await fetch(url)
 

  let data = await res.json();
  console.log(data)
  // append(data.results)
  return data.results;

}

// append 

function append(data){
    let container = document.getElementById("resul");
    container.innerHTML = null;

    data.forEach(function(el){

   let div = document.createElement("div")

   let info = document.createElement("h2")
   info.innerText = "Personal Info";

   let ana = document.createElement("h2");
   ana.innerText = "Anatomy"

   let birth = document.createElement("p");
   birth.innerText = el.birth_year;

   let gender = document.createElement("p")
   gender.innerText = el.gender;

   let colorh = document.createElement("p");
   colorh.innerText = el.hair_color;

   let ecolor = document.createElement("p");
   ecolor.innerText = el.eye_color;


   let heigh = document.createElement("p");
   heigh.innerText = el.height;


   let mass = document.createElement("p");
   mass.innerText = el.mass;
  let name = document.createElement("p");
      name.innerText = el.name;
      div.append(name,info,birth,gender,heigh,ana,ecolor,mass,colorh);

      container.append(div)
    });
}


 async function main(){

  let data = await getData();
  append(data)
}

//debouncing

function debouncing(func,delay){
  
if(id){
  clearTimeout(id)
}

   id = setTimeout(function(){
    func();
  },delay);
}