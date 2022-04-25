/*var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data =JSON.parse(request.response);
    console.log(data)
    for(var i=0;i<data.length;i++){
        console.log(`country Name:${data[i].name} capital:${data[i].capital} flag:${data[i].flag}`)
    }
     
}*/

//print the active cases,deaths,recovered
/*var request = new XMLHttpRequest();
request.open("GET","https://api.covid19api.com/total/country/india")
request.send();
request.onload=function(){
    var data =JSON.parse(request.response);
    console.log(data)
    for(let i=0;i<data.length;i++){

console.log(`Active :${data[i].Active} Deaths:${data[i].Deaths} Recovered:${data[i].Recovered}`)
    }
}*/

/*var userInput=[]
userInput=[1,2,3,4],5
function myfunc(n){
for(var i=0; i<userInput.length; i++){
return userInput[0]
}
}
console.log(myfunc(userInput[0]))*/

//normal function
/*function last(array,n){
if(n===undefined)
return array.slice(-1)

return array.slice(-n)
}

console.log(last([7,9,0,-2],3))*/
//anonymous function
/*var compute =function(a,b){
    return a+b;
    
}
console.log(compute(12,16))*/
//normal function
/*function cal(a,b){
    return a*b
}
console.log(cal(5,2))*/
/*Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.
addFive(5);
addFive(0);
addFive(-5);*/

/*function addFive(a){

return a+5
}
console.log(addFive(5))
console.log(addFive(0));
console.log(addFive(-5));*/

/*function toseconds(a){
return a*60

}
console.log(toseconds(5))*/

/*var array = [-500, 0, 50]

function first(array) {
  return array.slice(0,1)
}
console.log(first(array));*/


//var array =[1,2,3,4,5,6,7,8,9,10]
//var res=[]
/*for(let i = 0; i < array.length; i++) {
    if(array[i]%2!=0)
    console.log("odd");

        else{
            
        console.log(array[i])}
    
}*/
//normal function
/*function myfunc(array){
    for(let i = 0; i < array.length; i++) {
        if(array[i]%2!=0)
        res.push(array[i]); 
    }
return res;
}
console.log(myfunc(array))*/
//anonymous function
/*var odd = function(array){
    for(let i = 0; i < array.length; i++) {
        if(array[i]%2!=0)
        res.push(array[i]); 
    }
return res;
}
console.log(odd(array))*/
//sum of all the numbers in the array
//normal function
/*var array =[1,2,3,4,5,6,7,8,9,10]
let sum =0
for(let i=0; i<array.length; i++) {

     sum=sum+array[i]
     

}
console.log(sum)*/
//anonymous

/*var array =[1,2,3,4,5,6,7,8,9,10]
let sum =0
var sumof = function(array) {

    for (let i = 0; i < array.length; i++) {
        sum=sum + array[i]
    }
  
    return sum;
}
  console.log(sumof(array));

*/

//immediately invoked function execution

/*(function foo(a,b){
console.log(a*b)
})(3,2);*/

//arrow function --can reduce lines of codes 

/*var compute =()=>"helloworld";
console.log(compute());

var mul =(a,b)=>a*b;
console.log(mul(4,3));*/

/*function range(start, end) {
    var ans = [];
    for (let i = start; i <=end; i++) {
        ans.push(i);
    }
    return ans;
}
console.log(range(3,7));*/


/*var array=[3,"q","q","q",2,3,"q",3,"q","5"];

//most frequent

var minocu=1;
var count =0;
var ele;
for(let i = 0; i < array.length; i++){
for(let j = i; j <array.length; j++){
    if(array[i]==array[j]){
        count++;
    }
    if(minocu<count){
        minocu=count;
        ele=array[i]
    }
}
count=0;
}
console.log(`element ${ele} occurred ${minocu}`);*/


/*for(let i=0; i<10; i++){

console.log(i)
}

console.log(i)// is  not defined as let has block scope but var does nt have block scope*/


/*const num=1;
if(num===1){
const num=2
console.log(num)
}
console.log(num)*/

/*let course ="MERN"
if(course==="MERN"){

    var dept1="react developer";
    let dept2="full satck developer";
}

console.log(course)
console.log(dept1)
console.log(dept2)


*/

/*function myfun(){
    var num1=1;
    let  num2=2;
    const num3=3;
    {
        var num1=100;
        let num2=200;
        const num3=300;
        console.log(num1)
        console.log(num2)
        console.log(num3)
    }

console.log(num1)
console.log(num2)
console.log(num3)

}
console.log(num1)
myfun();*/

//array & object destructuring 

/*let array = [1,2,3,4]

let num1,num2,num3,num4;

[num1,num2,num3,num4]=array
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)*/
/*

let student ={

    name: 'Srilatha',
    age:23,
    course: 'mern',
    address: {
     city:'hyderabd',
     state:'telangana',
     country: 'India'

    }
}
//destructuring object
let{name,age,course}=student;

//template literal
let name1=`${name} is ${age} years old and studying ${course}`
console.log(name1)


//access city stateand country//nested object 

let {city,state,country}=student.address;
console.log(`city:${city} state:${state} country:${country}`)*/


//array
/*let array =["srilatha","reddy","female",20]
let firstName ,lastName,gender,age;
[firstName,lastName,gender,age] = array
console.log(array)*/

//object
/*
let details ={
firstName:"srilatha",
lastName:"reddy",
gender:"female",
age:20,
address:{
    city:"hyderabad",
    state:"telangana"
}

}
console.log(details)

//destructuring
let {firstName,lastName} = details
console.log(`my name is ${firstName  + lastName} `)*/


//object oriented programming oops concept

/*
//syntax class classname{} classname starting in capital not mandatory 
//creating object for the car 
//new: is a keyword will create object for theis particalar class called car 
//this is keyword for pointing freshly created objects 
//constructor: it is a special way of assigning values to the objects 
//constructors are written inside the objects 
//color and brand are constructor parameters
class Car{
constructor(color,brand){
this.color=color;
this.brand=brand;
}
color(){//method for extraction and updating 
    return this.color;
}


}
var c1= new Car("blue","rollsroys", "",  "");// inbuilt constructors call
var c2 =new Car("green","rollsroys", "", "");// inbuilt
console.log(c1.color)
//multiple references for single object
var c3=c1



//methods
console.log(c1.color);
//car is parent bmw is child 
//extends is the keyword for inheritence 
//in oops parentobjects  have upper hand
//when you create an object for child automatically it will be created for the parent also 
//super method :always refers to parent class
// when u call inside the child constructor get acces to all the parent properties
class BMW extends Car{
constructor(color,brand){
super(color,brand);

}
result(){


    return this.color
}
}

var b1= new BMW("black","series 2")
console.log(b1.result())*/

/*//spread operator and rest parameters
var arr=[1,2,3];


console.log(...arr)

//spread operator unpacked elements separated


//for string operation
var str="guvi"
console.log(...str)
console.log(str.split(""))

//combine the array using spread operator
let a =[2,4,5]
let b =[1,2,3]
a=b;

console.log(...a,...b)

//rest parameter==res=>user defined
function foo(...rest) {
//console.log(rest);
var sum =0
for(let i=0; i<rest.length; i++){

sum =sum+rest[i];

}
return sum;

}

console.log(foo(12,13,14))*/

/*var object={name:"srilatha"}

var object1={age :24}

let res ={...object,...object1};
console.log(res)
let res1={...object1}
console.log(res1)*/

/*function foo(a,b,c,...rest){

var res =a*9+" "+b*9+" "+c*9

return res;
}
console.log(foo(1,2,3,...rest))*/

/*
var userInput =3
var a =[]
for(let i=1; i<=userInput; i++){

var res= i*9
a.push(res)
    
    
}

console.log(...a)*/
/*const userInput =[]
var a =0;
let days =["",31,28,31,30,31,30,31,31,30,31,30,31];
let months=["","Jan", "Feb", "Mar", "Apr", "May","june","july","august","sep", "Oct","nov", "dec"];

const always =[months]=[days];

    if(a==0){
        console.log("Error");
    }

    else if(a>12){
        console.log("Error");
    }
    else{
console.log(months[a]);

    }*/




    //map filter ,reduce 



    //foreach
/*var employees =[
    {
        "id":101,
        "name":"Lavish",
      "yearsofexp":5,
        "Designation":"Senior FUll Stack Developer"
    },
    {
        "id":102,
        "name":"Shiva",
        "yearsofexp":50,
        "Designation":"Junior FUll Stack Developer"
    },
    {
        "id":103,
        "name":"Swapnil",
        "yearsofexp":51,
        "Designation":"Linux Administrator"
    },
    {
        "id":104,
        "name":"Sai",
        "yearsofexp":15,
        "Designation":"System Analyst"
    },
    {
        "id":105,
        "name":"Mohan",
        "yearsofexp":2,
        "Designation":"Mern Stack Developer"
    },
    {
        "id":106,
        "name":"Himanshu",
        "yearsofexp":25,
        "Designation":"Java Developer"
    }
    ]*/

    //for each loop
    //create any empty array 
    /*let employeeid=[];
    employees.forEach(function(employees){

employeeid.push(employees.id)


    })
    console.log(employeeid);*/

//map=>map all the items of array or object based on the index 

//uses callback function
//1.2 parameters
// 2.callback :
//it runs for each value in array & it returns a new value 
//used this keyword 
//get name using map===it will give new array 
/*let employeename=employees.map((employees)=>{
    return employees.name});
console.log(employeename);*/

//reduce=>whcih reduces your element an array into a single unit
//it runs call back for each value in array

//add all the parameters yearsofexp using reduce function 
/*let totalyearsofexp =employees.reduce(function(accum,empl){
return accum+empl.yearsofexp;},0)

console.log(totalyearsofexp);

*/
/*
let highyearsofexp =employees.reduce(function(accum,empl){

    if(accum.yearsofexp>empl.yearsofexp)
    {
        return accum
    }
    else{
        return empl
    }
    


},0)

console.log(highyearsofexp);
*/

//filter 

//we can filter the data based on the  logic or conidtion 
//get the data where yearsofexp is 5 years
/*let data =employees.filter(function(employee){

    

        return employee.yearsofexp===10;

   
});


console.log(data);
*/

//chaining over mrf
//.
/*const employees=[

    {
        name:"john",
        year:2014,
        rank:1
    },
    {
        name:"j",
        year:2015,
        rank:2
    },
    {
        name:"ohn",
        year:2010,
        rank:3
    },
    {
        name:"hn",
        year:2011,
        rank:4
    },
    {
        name:"jo",
        year:2020,
        rank:5
    },
    {
        name:"John",
        year:2022,
        rank:6
    },

]*/
//for each is an alternative to for loop
//foreach takes function as an argument ,applied only to array 
//return type of foreach is undefined 
//to apply specific functions as well as for the printing purpose
//for each loop 
/*var array=[1,2,3,4,5,6,7,8,9,10];
array.forEach((ele)=>console.log(ele))*/


//vcs==version control system==git















