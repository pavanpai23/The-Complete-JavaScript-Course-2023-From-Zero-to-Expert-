'use strict';

// const Bookings=[];

// const createBooking=function(flightNum,passengernum=1,persons=10){

//     //ES5
//     // passengernum=passengernum||10;
//     // persons=persons||100;
    
//     const Booking={
//         flightNum,
//         passengernum,
//         persons,
//     };
//     console.log(Booking);
//     Bookings.push(Booking);
// };

// createBooking('NJ123',31,442);
// createBooking('NJ123',22);
// createBooking('NJ123',34,12);


// const flight='KMN233';
// const jhonas={
//     name:'jhonas schamas',
//     passport:231342234421,
// };

// const checkin=function(flightname,passenger){
//     flightname='KJARFS123';
//     passenger.name='Mr.' + passenger.name;
//     if(passenger.passport===231342234421){
//         alert('Checked in');
//     }else{
//         alert('Wrong passport');
//     }
// };
// checkin(flight,jhonas);
// console.log(flight);
// console.log(jhonas);

// const newpassport=function(person){
//     person.passport=Math.trunc(Math.random*100000);
// };
// newpassport(jhonas);
// checkin(flight,jhonas);


// const greet=function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greethey=greet('hey');
// greethey('jonas');
// greethey('pavan');

// greet('hello')('jhonsd'); 

// const greetArr=greeting=>name=>console.log(`${greeting} ${name}`);

// greetArr('hi')('heelo');

// const lufthansa={
//     airlines:'luftana',
//     iatacode:'LH',
//     booking:[],

// book(flightnum  , name){
//     console.log(`${name} booked a seat on ${this.airlines} flight ${this.iatacode} ${flightnum} `);
// },
// };

// lufthansa.book('234','jhonas');
// lufthansa.book('453','jhobsdf');

// const eurowings={
//     airline:'eurowings',
//     iataCode:'EW',
//     bookings:[],
// };

// const book=lufthansa.book;
// //does not work
// //book(23,'sarah williams);

// book.call(eurowings,23,'sarah ');
// console.log(eurowings);

// book.call(lufthansa,239,'marry cooper')
// console.log(lufthansa);


// //bind methods
// const bookew=book.bind(eurowings);
// bookew(23,'neon'); 

// //with event listener
// lufthansa.planes=400;
// lufthansa.buyPlane=function () {
// console.log(this);
// this.planes++;
// console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));


//Question 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer(){
//     const answer=Number(prompt(`${this.question}\n${this.options.join('\n')} \n('Write option num)`),
// );
// console.log(answer);

// //register answer
// typeof answer==='number'&& answer<this.answers.length && this.answers[answer]++;

//     this.displayresults();
//     this.displayresults('String');
//   },

// displayresults(type='array'){
//     if(type==='array'){
//         console.log(this.answers);
//     }else if(type==='string'){
//         console.log(`poll result are ${this.answers.join(',')}`);
//     }
//     },
// };

// // poll.registerNewAnswer();

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

// poll.displayresults.call({answer:[5,3,4]},'string');

// const runover=function(){
//     console.log("hi i am pavan");
// }
// runover();

// //itfe
// (function(){
//     console.log('hi i am pavan');
    
// })();

// (()=>console.log('this will also never run again'))();


// let f;
// const g=function(){
//     const a=23;
//     f=function(){
//         console.log(a*2);
        
//     };
// };

// const h=function(){
//     const b=777;
//     f=function(){
//         console.log(b*2);
        
//     };
// };

// g();
// f();
// console.dir(f);

// //reassinging
// h();
// f();
// console.dir(f);


// //ex 2
// const BoardPassenger=function(n,wait){

//     const pergroup=n/3;
//     setTimeout(function(){
//         console.log(`weare boarding all ${n} passengers`);
//         console.log(`there are 3 gropus each with ${pergroup} passnegers`);
//     },wait*1000);

//     console.log(`will start boading in ${wait} seconds`);
    
// };

// BoardPassenger(180,3); 

//challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click',function(){
    header.style.color='blue';
  })
})();