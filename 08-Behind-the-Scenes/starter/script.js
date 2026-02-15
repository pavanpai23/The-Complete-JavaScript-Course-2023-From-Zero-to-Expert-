'use strict';

// // 
// function calcage(birthyear){
//     const age=2078-birthyear;

//     function  printage(){
//         const out=`${name},you are ${age},born in ${birthyear}`
//         console.log(out);
//     }
//     printage();
//     return age;
// }

// const name='jonas';
// calcage(2004);


// console.log(me);
// console.log(job);
// console.log(year);

// var me='pavan';
// let job='teacher';
// const year='2006';

// console.log(addDecl(2,3));
// console.log(addexp(2,3));
// // console.log(addarrow(2,3));

// function addDecl(a,b){
//     return a+b;
// }

// const addexp=function(a,b){
//     return a+b;
// }

// var addarrow=(a,b)=>a+b;  

/*
  only function decoration works when we declare the console before only
not works if we use const and var
*/

//this keyword

// console.log(this);

// const calcage=function(birthyear){
//    console.log(2074-birthyear);
//    console.log(this);   
// }
// calcage(2006); 


// const calcageArrow=birthyear=>{
//    console.log(2074-birthyear);
//    console.log(this);   
// }
// calcageArrow(2016); 

const jonas={
    year:1991,
    calcage:function(){
        console.log(this);
        console.log(2026-this.year);
    }
}

jonas.calcage();

const matlina={
    year:2018,
};
matlina.calcage=jonas.calcage;