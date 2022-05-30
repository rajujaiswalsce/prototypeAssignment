
let des = document.getElementById("title");
let poster = document.getElementById("poster");
let container = document.getElementById("container");
 async function SearchMovie(){

    try{
    let search = document.getElementById("search").value ;
    let res = await fetch(`https://www.omdbapi.com/?t=${search}&apikey=da10c819`)
   

    let data = await res.json();
    append(data);
    console.log(data);
    }catch(err){
    console.log(err);
     Errorfun();
    }

}

 function append(data){
    poster.innerHTML = null;
    des.innerHTML = null;
    container.innerHTML = null

    let image = document.createElement("img");
    image.src = data.Poster;

    let release = document.createElement("h3");
    release.innerText = "Released Date:"+" "+ data.Released;

    let title = document.createElement("h1");
    title.innerText = data.Title;

    let rating = document.createElement("h3");
    rating.innerText = "IMDB Rating :"+" "+data.Ratings[0].Value;

    let language = document.createElement("h3")
  language.innerText = "Language :"+" "+data.Language;

  let genre = document.createElement("h3")
  genre.innerText = "Genre :"+" "+data.Genre;

  let direct = document.createElement("h3")
  direct.innerText = "Director :"+" "+data.Director;

  des.append(title,release,rating,language,genre,direct)
    poster.append(image);

    container.append(poster,des);
     


 };

 function Errorfun(){

    container.innerHTML = null;
    let errImage = document.createElement("img")
    errImage.setAttribute("id","imgErr")
    errImage.src = "https://media2.giphy.com/media/XIahGhbK5A685fyr8D/200w.webp?cid=ecf05e471hzsqspvmf2ubpeyo31o6o5p2wp82wexmgbljhnn&rid=200w.webp&ct=g";
    container.append(errImage)
    }