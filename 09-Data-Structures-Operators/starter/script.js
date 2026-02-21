'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  

  orderpasta:function(ing1,ing2,ing3){
    console.log(`Here is your delecious pasta with ${ing1}, 
      ${ing2} and ${ing3}`);
  }
},

  orderpizza:function(mainingredient,...otheringradient){
   console.log(mainingredient);
   console.log(otheringradient );
   
   
  }
};

// const{name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);

// const{name:restaurantName,openingHours:hours,categories:tags}=restaurant;
// console.log(restaurantName,hours,tags);

// const arr=[2,3,4];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];

// const[x,y,z]=arr;
// console.log(x,y,z);

// const[first ,second,third]=restaurant.starterMenu;
// console.log(first,second,third);

// //neseted destructuring
// const nested=[2,3,[5,6]];
// const[i, ,[j,k]]=nested;
// console.log(i,j,k);

// mutating variables
// let a = 999;
// let b = 111;
// const obj = { a: 12, b: 34, c: 23 };
// ({ a, b } = obj);
// console.log(a, b);


// // //nested obj
// // const {
// //    sat: {open:o , close:c},
// //     } = openingHours;
// // console.log(o,c);


// // restaurant.orderDelivery({
// //   time:'23:30',
// //   address:'sirsi',
// //   mainindex:'3',
// //   starterindex:'3',
// // });

// const arr=[5,6,7];
// const badNewArr=[1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr );

// const newArr=[1,2,...arr];  //...arr isused to print next element
// console.log(newArr);

// const newmenu=[...restaurant.mainMenu,'Dosa'];
// console.log(newmenu);

// //copy arr
// const mainAraymenu=[...restaurant.mainMenu];

// //join to array
// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);

// //iterables:arrays , string ,maps,sets .not object

// const str='pavan';
// const letters=[...str,'','s.'];
// console.log(letters);
// console.log(...str);

// //real world ex
// const incrediant=[
//   prompt("let's make a pasta ,incrediant 1"),
//   prompt("incrediant 2"),
//   prompt("incrediant 3"),
// ];
// console.log(incrediant);

// restaurant.orderpasta(incrediant[0],incrediant[1],incrediant[2]);

// restaurant.orderpasta(...incrediant);

 //spread,because on right side of=
 const arr=[1,2,...[3,4]];

 //rest,because on left side
 const[a,b,...others]=[1,2,3,4,5];
console.log(a,b,others);

const [pizza,risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);


const{sat,...weekdays}=restaurant.openingHours;
console.log(weekdays);
  
//function
const add=function(... number){
  let sum=0;
  for(let i=0;i<number.length;i++) sum+=number[i];
  console.log(sum);
  
}
add(2,3)
add(3,4,6,7);
add(8,4,3,6,7,5,4,3,2); 

const x=[3,67,4];
add(...x); 

restaurant.orderpizza('Mushrom','spanish','olive','ginger'); 

//use any data type ,return any data type,short-circuting

console.log(3 ||'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || 0|| ''||'jonas' || 23 || 'hello');


restaurant.numguest=23;
const guest1=restaurant.numguest?restaurant.numguest:10;
console.log(guest1);

const guest2=restaurant.numguest || 10;
console.log(guest2);


console.log('---AND---');

console.log(0 && 'jonas');
console.log(7 && 'jonus');
console.log('jonus' && 3 );









