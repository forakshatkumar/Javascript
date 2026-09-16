## Synchronus Progrmming
 - Synchronus means the code runs in particular sequence of instruction in a given program.
    Each instruction wait for the previous instruction to complete the execution.
## Asynchronus Programming
 - Due to synchronus programming, sometimes important instructions gets blocked due to some previous    instructions, which causes delay in the UI.Asynchronus code execution allows to execute next instructions immediately and doesn't block the flow of code.

 `Callbacks` - A callback is an function passed as an argument to another function

## CallBack Hell
 - Nested Callbacks stacked below one another forming a pyramid structure. Difficult to understand. ``Promises`` are solution to it

## Promises
 - Promises is for `eventual` completion of task. it is an object in JS. it is a solution to callback hell.

    let promise = new Promise((resolve,reject) =>{...})

    ``Promise State`` -> Pending, Fulfilled, Reject.
    
    -`.then()` 
      promise.then((res)=>{...})
    - `.catch`
      promise.catch((err)=>{...})