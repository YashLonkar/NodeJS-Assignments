// // function callback(){
// //     console.log("Yash is calling callback");
// // }

// const add =function(a,b, callback){
//     var result= a+b;
//     console.log(result);
//     callback();
// }

// add(3,99, ()=> console.log('add completed'));

const notes=require('./notes.js')
var age=notes.age;
var result=notes.addNum(age+18, 6);

console.log(age);
console.log(result);


// Using Lodash

var _=require('lodash') // We have given "underscore" as var name bcoz its a convention. You can give anything but it is followed along while using node
var data=["person","person",1,2,1,2,"name","age","2","4"]
var filter=_.uniq(data);
console.log(_.isString(3))
console.log(filter);