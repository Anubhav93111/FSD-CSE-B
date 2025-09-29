// array destructing
const num=[10,20,30,40,50];
const [a,b,c,d,e]=num;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// object destructing
const obj = { name:"abc", id:2, email:"abc@gmail.com"};
const {name,id,email}=obj;
console.log(name);
console.log(id);
console.log(email);

// with spread opreator
const [a1,b1,...rest]=num;
console.log(a, b, rest);

const { name:name2, ...other}= obj;
console.log(name2,other);

//----------------------------------------------
const arr1 = [12,32,342];
const arr2 = [54,1,32];

const arr= [ ...arr1, arr2];

console.log(arr1)
console.log(arr2)
console.log(arr)