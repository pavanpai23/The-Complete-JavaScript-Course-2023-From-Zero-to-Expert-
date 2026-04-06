'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const calcdisplaysummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest=movements.filter(mov => mov > 0).map(deposit=>(deposit*1.2)/100).filter((int ,i,arr)=>{
    console.log(arr);
    return int>=1;
    
  })
  .reduce((acc,int)=>acc+int,0);
  labelSumInterest.textContent=`${interest}`;


};
calcdisplaysummary(account1.movements);
 








/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr=['a','b','c','d','e'];
// console.log(arr.slice(2));
// arr.splice(-1);
// console.log(arr);

// //reverse
// const arr2=['j','i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //concat
// const letters=arr.concat(arr2);
// console.log(letters);
// console.log([...arr,...arr2]);

// //join
// console.log(letters.join("-"));

// const arr=[23,43,232];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last element
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('pavsn'.at(0));
// console.log('pavsn'.at(3));
// console.log('pavsn'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const movement of movements){
//   if(movement>0){
//     console.log(`you deposited ${movement} `);
//   }else{
//     console.log(`you withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log("-------------------------");
// movements.forEach(function(movement){
//   if(movement>0){
//     console.log(`you deposited ${movement} `);
//   }else{
//     console.log(`you withdraw ${Math.abs(movement)}`);
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value,key,map){
//   console.log(`${key} : ${value}`);

// })

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //text to zero
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
          </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//challenge 1
// const checkdog=function(dogjulia,dogkate){
//   const dogjuliacorrected=dogjulia.slice();
//   dogjuliacorrected.splice(0,1);
//   dogjuliacorrected.splice(-2);

//   const dog=dogjuliacorrected.concat(dogkate);
//   console.log(dog);

//   dog.forEach(function(dog,i){
//     if(dog>=3){
//       console.log(`dog num ${i+1} is an adult , and is ${dog} year old`);
//     }else{
//       console.log(`dog age is ${i+1} and is still a puppy`);

//     }
//   })

// }

// checkdog([3,4,5,2,14,34],[43,53,1,35,64,5]);

//map

// const eurtoUsd=1.1;

// const movement=movements.map(function(mov){
//   return eurtoUsd*mov;
// })

// console.log(movements);
// // console.log(movement);

// const user='Jonas Pavan Pai';
// const username=user.toLowerCase().split(' ').map(function(name){
//   return name[0];
// });
// console.log(username);

//filter
// const deposite=movements.filter(function(mov){
//   return mov>0;
// });
// console.log(movements);
// console.log(deposite);

// const withdrawals=movements.filter(function(mov){
//   return mov<0;
// });
// console.log(movements);
// console.log(withdrawals);

//accumalator  is as snownball
// const balance=movements.reduce(function(acc,cur,i,arr){
//   console.log(`iteration ${i} : ${acc}`);
//   return acc+cur;
// },0);
// console.log(balance);

// let balance2=0;
// for(const mov of movements) balance2+=mov;
// console.log(balance2);

// const max=movements.reduce((acc,mov)=>{
//   if(acc>mov){
// return acc;
//   }else{
// return mov;
//   }
// },movements[0]);
// console.log(max);

//challenge

// const calcAverageHumanage=function(ages){
//   const humanages=ages.map(age=>age<=2 ?2 *age : 16+age*4);

//   const adults=humanages.filter(age=>age>=18);
//   console.log(humanages);
//   console.log(adults);

//   const avg=adults.reduce((acc,age)=>acc+age,0)/adults.length;

//   return avg;
// };
// const avg1=calcAverageHumanage([5,2,4,1,15,8,3]);
// const avg2=calcAverageHumanage([16,6,10,5,6,1,4]);

// console.log(avg1);
// console.log(avg2);

// const eurtoUsd = 1.1;
// const totalDEposite = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurtoUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDEposite);


// challenge 3


const calcAverageHumanage=function(ages){
  const humanages=ages.map(age=>age<=2 ?2 *age : 16+age*4);

  const adults=humanages.filter(age=>age>=18);

  const avg=adults.reduce((acc,age)=>acc+age,0)/adults.length;

  return avg;
};


const calcAverageHumanage2=ages=>ages.map(age=>age<=2 ?2 *age : 16+age*4).filter(age=>age>=18).reduce((acc,age,i,arr)=>acc+age/arr.length,0);



const avg1=calcAverageHumanage([5,2,4,1,15,8,3]);
const avg2=calcAverageHumanage([16,6,10,5,6,1,4]);

console.log(avg1);
console.log(avg2);
