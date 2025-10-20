console.log("Typescript learn and practice");
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
var name = "Pratik";
//console.log(name);
//if we reassign a value to name variable other than its datatype like a number or boolean it will produce a error
// name = true -> will give a error as name has datatype string
// union of types
// these is do we can have multiple datatypes to a variable
var id = "12";
id = 13;
//console.log(typeof id);
// here we can assign the id variable both number and string datatypes value we will not get any error
// ##### ARRAYS ####
var scores = [23, 54, 12, 67];
// console.log(scores);
// these is how arrays are defined in typescript 
// but javascript has heterogeous arrays how can i define them
var hetero = [12, "Pratik", false, null];
// console.log(hetero)
//we can use "any" datatype as we donnot know the datatype in the array
// we can also use "any" datatype in variable also
var userId = 13;
userId = true;
// console.log(userId);
//here we can assign any value of any datatype to userId as it has any datatype
// we can also define arrays in TS (union of types for arrays)
var data = [98, "yu", false];
// console.log(data);
// arrays in form of typed tuple
var data1 = [1, "Pratik", false];
var p1 = {
    name: "Iphone",
    price: 3000,
    "description": "A cellphone",
    display: function () {
        console.log("display");
    }
};
//console.log(p1)
// from the above example you can see that i have created a interface for the object and created a variable p1 using the interface Product
// const item = new Product() 
// above line is wrong as we cannot create a object using a interface
// ##### FUNCTIONS #####
function sum(a, b) {
    return a + b;
}
// we should give return type of the function
// if we pass sum(10,"Pratik")
// in JS there will be no error and it will return "10Pratik"
// but in TS it will return a type error
// lets say if we want b to be option which means i want to pass a only and not b but if we pass only a it will give error in TS but will work in JS
function sum1(a, b) {
    return a + (b || 0);
}
// we make b optional using b? but we get an error so make (b || 0) so that if b is there we return b or if not there we return 0 with the help of short circuiting(||)
// typescript doesnot exist at runtime everytime TS code is converted to JS and compiled and executed
// TS is a deveopnment tool it will check type at compile not runtime
// ##### DATES AND OTHER TYPES #####
var dob = new Date(1998, 11, 11);
// console.log(dob);
// console.log(dob.getDay())
// Date is similar to javascript Date
// #####  ANY #####
var x = 10;
// but what if we donnot want to write any so we do
var y;
y = "12";
y = false;
y = "Pratik";
console.log(y);
// these is how we can implement any datatype without using the any word
// if you want to define a variable of type any then either mention ":any" while declaring or donnot assign a value while declaring variable
// any -> used to get rid of TS type checking
// example -> if we donnot know the type of the varibale coming from a client or server
//            like if we have two clients i. web and ii. mobile one sends userId in number and other
//            sends in string so we can use any type to counter these
// void -> means it doesnt return anything mainly used in functions 
function car() {
    //return "10"
    // gives an error that return type is void
}
// the above func will not return anything so we give its type as void
function sim() {
    // return 10
    // return "100"
    // we can return either a string or a number here
    return 0;
}
// ##### ENUMS #####
// represents named constants and is often reffered as enums
// we have a Ticket status ["initialized","pending","resolved"]
// define these in TS see below
var ticketStatus;
(function (ticketStatus) {
    ticketStatus[ticketStatus["INITIALIZED"] = 0] = "INITIALIZED";
    ticketStatus[ticketStatus["PENDING"] = 1] = "PENDING";
    ticketStatus[ticketStatus["RESOLVED"] = 2] = "RESOLVED";
    ticketStatus[ticketStatus["CANCELLED"] = 3] = "CANCELLED";
})(ticketStatus || (ticketStatus = {}));
// JS converts these enum into iife
var Ticket = {
    id: 1,
    title: "new ticket",
    status: ticketStatus.INITIALIZED
};
//console.log(Ticket.status);
// here Ticket.status will be 0 as it will be mapped to enum ticketStatus where INITIALIZED is at 0 index
if (ticketStatus.INITIALIZED == Ticket.status) {
    // console.log(ticketStatus.INITIALIZED + "      " + Ticket.status);
}
// if we see logs both will have value 0 and it will be true
// now we will change the mapping of the index above the enums were mapped according to the index
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Created"] = 201] = "Created";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var response = {
    url: "https://example.com",
    method: "GET",
    data: [],
    status: StatusCodes.Success
};
// console.log(response.status);
// here it will ouput 200 as we have changed the mapping if we didnt change the mapping the console log would be 1(index)
// ##### TYPE INFERING #####
var result = {
    name: "Pratik",
    marks: 89
};
console.log(result);
// updating an existing key value pair
result.marks = 99;
// adding a new key value pair to an existing object
result.address = "Rose Lane";
// it infers types as {name : string, marks : number}
// so it does not contain any address key so it throws error
var result1 = {
    name: "Pratik1",
    marks: 99
};
result1.marks = 0;
// now it will not give any error as we have defined it and also its type
// and also we have used address? for optional key
result1.address = "Rose Lane 1";
console.log(result);
