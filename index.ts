console.log("Typescript learn and practice")

/*

primitive types in TS
 -string -> text
 -number -> integer,real
 -boolean -> true,false
 -undefined
 -null
 -bigint
 -symbol 

*/

// define a variable in ts
// var <variable_name>:<data_type> = <value>

var name : string = "Pratik"
//console.log(name);

//if we reassign a value to name variable other than its datatype like a number or boolean it will produce a error
// name = true -> will give a error as name has datatype string

// union of types
// these is do we can have multiple datatypes to a variable
var id : number | string = "12"
id = 13
//console.log(typeof id);


// here we can assign the id variable both number and string datatypes value we will not get any error

// ##### ARRAYS ####

let scores:number[] = [23,54,12,67]
// console.log(scores);
// these is how arrays are defined in typescript 
// but javascript has heterogeous arrays how can i define them

let hetero:any[] = [12,"Pratik",false,null]
// console.log(hetero)

//we can use "any" datatype as we donnot know the datatype in the array
// we can also use "any" datatype in variable also
let userId:any = 13
userId = true
// console.log(userId);

//here we can assign any value of any datatype to userId as it has any datatype

// we can also define arrays in TS (union of types for arrays)
let data : (number | boolean | string)[] = [98,"yu",false]
// console.log(data);


// arrays in form of typed tuple

let data1:[number,string,boolean] = [1,"Pratik",false]
// console.log(data1);

// ##### INTERFACES #####
/* How to define types for objects
    - Classes
    - Interface -> it's a contract
 */

//interfaces sre used to define a complete actual existing object not to create one like we create a object using new keyword from classes

interface Product {
    name : string;
    price : number;
    description : string;
    display() : void // specify the return type of the function 
}

let p1 : Product = {
    name : "Iphone",
    price : 3000,
    "description" : "A cellphone",
    display: () => {
        console.log("display");
        
    }
}

//console.log(p1)
// from the above example you can see that i have created a interface for the object and created a variable p1 using the interface Product

// const item = new Product() 
// above line is wrong as we cannot create a object using a interface

// ##### FUNCTIONS #####
 function sum(a:number,b:number):number {
    return a + b;
 }

 // we should give return type of the function
 // if we pass sum(10,"Pratik")
 // in JS there will be no error and it will return "10Pratik"
 // but in TS it will return a type error

// lets say if we want b to be option which means i want to pass a only and not b but if we pass only a it will give error in TS but will work in JS

function sum1(a:number,b?:number):number {
    return a + (b || 0);
}

// we make b optional using b? but we get an error so make (b || 0) so that if b is there we return b or if not there we return 0 with the help of short circuiting(||)

// typescript doesnot exist at runtime everytime TS code is converted to JS and compiled and executed
// TS is a deveopnment tool it will check type at compile not runtime

// ##### DATES AND OTHER TYPES #####

const dob = new Date(1998,11,11);
// console.log(dob);
// console.log(dob.getDay())
// Date is similar to javascript Date

// #####  ANY #####
let x:any = 10

// but what if we donnot want to write any so we do

let y;
y = "12"
y = false
y = "Pratik"
console.log(y);
// these is how we can implement any datatype without using the any word
// if you want to define a variable of type any then either mention ":any" while declaring or donnot assign a value while declaring variable

// any -> used to get rid of TS type checking
// example -> if we donnot know the type of the varibale coming from a client or server
//            like if we have two clients i. web and ii. mobile one sends userId in number and other
//            sends in string so we can use any type to counter these

// void -> means it doesnt return anything mainly used in functions 
function car():void {
    //return "10"
    // gives an error that return type is void
}
// the above func will not return anything so we give its type as void

function sim() : (number | string){
    // return 10
    // return "100"
    // we can return either a string or a number here
    return 0
}
