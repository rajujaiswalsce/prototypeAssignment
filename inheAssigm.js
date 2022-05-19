// object.create() Methode

const car  = {
    color:"red",
    model: "Kia Seltos",
    price : "RS 18L",
    airconditon:true,
    sheetbelt:"yes"
    
}

const s1 = Object.create(car)
s1.name = "KIA Motors"

console.log(s1)


//constructor functions() Methods

function Cars(type){
    this.type = type,
    this.color="red",
    this.model= "Kia Seltos",
    this.price = "RS 18L",
    this.airconditon=true,
    this.sheetbelt="yes";
    
}

Cars.prototype.discount = function(){
    console.log("20% discount")
}

const p1 = new Cars("SydenCar");
console.log(p1)
p1.discount()
