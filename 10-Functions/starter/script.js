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


const flight='KMN233';
const jhonas={
    name:'jhonas schamas',
    passport:231342234421,
};

const checkin=function(flightname,passenger){
    flightname='KJARFS123';
    passenger.name='Mr.' + passenger.name;
    if(passenger.passport===231342234421){
        alert('Checked in');
    }else{
        alert('Wrong passport');
    }
};
checkin(flight,jhonas);
console.log(flight);
console.log(jhonas);

const newpassport=function(person){
    person.passport=Math.trunc(Math.random*100000);
};
newpassport(jhonas);
checkin(flight,jhonas);