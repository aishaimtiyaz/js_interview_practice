// TODO: Implement this task
const counter = {
  let counter =0;
return {
  increament(){
    return ++counter;
  },
  decreament(){
    if(counter>0)
     return --counter;
    return 0;
  },
  reset(){
    counter = 0;
    return 0;
  }

}

const myCounter = counter();
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.decreament());
console.log(myCounter.reset());
