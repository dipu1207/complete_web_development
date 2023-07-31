// function sayHello(){
//     console.log("hello");
// }

// //calling function
// sayHello();

// //function creation using function expression
// //this is anonymous function as we are assigning value to a variable
// var sayBye = function(){
//     console.log("BYE");
// }

// sayBye();

// function multiply(a,b){
//     return a*b
// }

// alert(multiply(4,10));


//objects
var user={
    name:'divyanshu',
    age:25,
    hobby: "basketball",
    isMarried:false,
    shout: function(){  //function inside object called method
        console.log("AHHHHHHHHHH");
    }
};


console.log("age of "+ user.name+" is "+user.age);
console.log(user.shout());
//array
var arr1=["apple","banana","mango"];
console.log(arr1[0]);
//an array is nothing but an object where key are 0,1,2,3,4,5..



var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username:"jess",
        password:"122"
    }
];

console.log(list[0].username+" has password "+ list[0].password);


