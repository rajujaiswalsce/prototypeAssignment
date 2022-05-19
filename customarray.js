

class Stack {
    constructor(){
        this.item = []
    }

    //add the element
    push(element){
        return this.item.push(element)
    }
    //pop the element (remove the element)
    pop(){
        if(this.item.length>0){
        return this.item.pop()
        }
    }
    //top ya peek()
    peek(){
        return this.item[this.item.length-1]
    }
  // size (length)
    size(){
        return this.item.length;
    }
    // reverse the stack
    reverse(){
        return this.item.reverse();
    }
    
}



let x = new Stack()

x.push(1)
x.push(2)
x.push(3)
x.push(4)
x.push(6)
//print() 
console.log(x.item)

x.pop()
console.log(x.item)

x.peek()
console.log(x.peek())

x.size()
console.log("size:",x.size())

//printReverse()
console.log(x.reverse())


