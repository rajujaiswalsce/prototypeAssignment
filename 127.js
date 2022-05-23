

function myStack(n,arr){
    let s = []
    let bag = ""
    for(let i=0;i<n;i++){
        while(s.length>0 && s[s.length-1]>=arr[i]){
            s.pop();
        }
       if(s.length == 0){
           bag += -1 + " "
       }else{
           bag += s[s.length-1] + " "
       }
      s.push(arr[i])

    }
    return bag;
}

//left side smalle
let arr = [39,29,27,11,4,24,32,32,1]

let n = arr.length;
let x = myStack(n,arr)

console.log(x)