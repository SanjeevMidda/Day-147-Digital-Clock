document.body.style.backgroundColor="blue"

let date = new Date();
console.log(date);

let day = date.toLocaleString('en-us', {  weekday: 'long' });
let month = date.toLocaleString('en-us', {  month: 'long' });
let year = date.getFullYear()


console.log(day);
console.log(month);
console.log(year);

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(hours);
console.log(minutes);
console.log(seconds);

//location

let h1Day = document.querySelector('.day');
let h1Month = document.querySelector('.month');
let h1Year = document.querySelector('.year');

h1Day.innerHTML=day;
h1Month.innerHTML= `${date.getDate()}th ${month}`;
h1Year.innerHTML=year;

let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

hour.innerHTML=hours;
minute.innerHTML=minutes;
second.innerHTML=seconds;