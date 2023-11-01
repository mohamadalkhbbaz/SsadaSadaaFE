// 1.var , let, const
// var : globale scope > define before declare
// let : block scope  > reChange value 
// const = block scope > !reChange value 

import React from 'react'

const ss = 'ss';
const fun1 = _ => {
     var1 = "test";
     var var1;
console.log(var1);

}
fun1();


// 2. Arrow Function 
// const sayGo =  _  => c.l("go");
// const say=  _  =>  2;
// const sayMyName =  (name)  => c.l(name);

// 3. Export and Import
// //fileName.js
// export defult func;

// //mainApp.jc
// import func from './fileName.js'

// if export multi func 
// export func1
// export func2 
// or 
// export { func1, func2 }
// >> import {func1} from'./fileName.js'

// u can export func or variable
// u can export func or variable Or Image



const VarEx = () => {
  return (
    <div>varEx</div>
  )
}

export default VarEx