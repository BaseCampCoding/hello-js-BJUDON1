
let stack = [1,2,3,4,5,6,7,8,9,10]
//task 1
let position = 5;
let getItemResult = stack [position];

//task
 position = 6
replacementCard = 17
stack[position] = replacementCard
console.log(stack[6])
//task
 let newCardTop = 25
 stack.unshift(newCardTop)
// console.log(stack)

//task 4
position = 8;

stack.splice(position, 1)
console.log(stack)

//task 5
stack.shift();
console.log(stack)

// task 6 
newCardBottom = 18;
stack.push(newCardBottom)
//console.log(stack)

//task 7
stack.pop();
console.log(stack)

//task 8
let stackSize = 9
let checkSizeOfStackResult = stack.length === stackSize

//if(stackSize == stack.length){
     //checkSizeOfStackResult = true;}
    //else{
        //checkSizeOfStackResult = false
   // }
    console.log(checkSizeOfStackResult)
