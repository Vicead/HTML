"use strict"
console.log(`hello`);

const { default: test } = require("node:test");
// require process
// require(`./modules/module.js`)
// require(`./modules/module`)

// if file name index.js
// require(`./modules/`)
// const test=require(`./modules/module`)
// // console.log(test)
// test()

//? multi function
// with array
    // const [test1,test2,test3]=require(`./modules/module`)
    // test1()
    // test2()
    // test3()
    // test1(), test2(), test3()
// with object
    const {testFunctionA:testA,testFunctionB,testFunctionC,pi}=require(`./modules/module`)
    testA()
    testFunctionB()
    testFunctionC()
    console.log(pi);