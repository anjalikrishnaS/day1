 a=5;
 var a=9;
console.log(a)
 let b=90;
 console.log(b);
 //let b=100;
 {
    let b=100     // inside a block let value can be changed
    console.log( 'bvalue is ',b);
    const t=10
 }
console.log(typeof(b));       //number
var arr1=['orange','apple',10]
console.log(arr1.length)
console.log(arr1[0])

function add(x,y){
    var sum=x+y;
    console.log(sum)
}
add(11,30);
// with return

function add(x,y){
    var sum=x+y;
    return sum;
}
var p=add(20,30);
console.log(p)
// operators
let m=1
let n=++m
console.log(m)
console.log(n)


// if else
var e=10;
var s='10';
if (e>s) {
    console.log('e is greater')
    
} 
else if (e==s){
    console.log('e is equal')
    
} 
else {
    console.log('e is less than s');

}
 // logical operators : and or
 //looping
 var array=[1,2,3,4,5]
for (let i = 0; i < array.length; i++) {                    //forloop
    console.log(array[i]);
   
}
//for (const key in person) {   //forinloop
    // console.log(key)                   // will print all keys values inside it ie, name age location
   // console.log(person[key])               // print values ie,maya 20 tvm
//}
for (const i of array) {                //forof
    console.log(i)
}