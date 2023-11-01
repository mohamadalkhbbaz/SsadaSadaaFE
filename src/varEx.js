// 1.var , let, const
// var : globale scope > define before declare
// let : block scope  > reChange value 
// const = block scope > !reChange value 


import React from 'react'
var var1 = "test";

const fun1 = _ => {
  console.log(var1);
}
fun1();
cd

const varEx = () => {
  return (
    <div>varEx</div>
  )
}

export default varEx