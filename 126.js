

const mainButton = document.querySelector("button");
// console.dir(mainButton)
const currentColor = document.querySelector(".current_color")
const body = document.body;
const name1 = document.querySelector(".name")
// console.log(name1)




function rendercolorGenretor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const renderCo = `rgb(${red},${green},${blue})`

    return renderCo;
}



mainButton.addEventListener("click",() =>{
    // console.log("hello raju")
    const renderColor = rendercolorGenretor() ;
   body.style.backgroundColor = renderColor;
   name1.style.color = "red";
    currentColor.textContent = renderColor;
   

    console.log(renderColor);
})