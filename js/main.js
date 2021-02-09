'use strict';
let userName = prompt ('what\'s you\'re name?');
let letter = prompt ('Does your name starts with the letter\'R\'?');
switch (letter.toLowerCase()){
case ('yes'):
case ('y') :
  alert ('We have the same first letter!');
  break;
case ('no'):
case ('n'):
  alert ('It\'s ok, your first letter is pretty to<3');
  break;
}
let myAge = prompt('Are you 23 years old?');
switch ( myAge.toLowerCase()){
case ('yes'):
case ( 'y'):
  alert ('we\'re the same age!');
  break;
case ('no'):
case ('n'):
  alert ('We\'re not the same age :\'(');
  break;
}
let intrest = prompt('Are you intrested in programming?');
switch (intrest.toLowerCase()){
case ('yes'):
case ('y'):
  alert ('Great,me to!');
  break;
case ('no'):
case ('n'):
  alert ('sorry to hear that');
  break;
}
let anime = prompt ('Do you like anime?');
switch (anime.toLowerCase()){
case ('yes'):
case ('y'):
  alert ('OMG! me too,greeting anime lover fellow<3');
  break;
case ('no'):
case ('n'):
  alert ('It\'s ok, I\'m sure you have other intrests.');
  break;
}
let reading = prompt ('Do you like reading?');
switch (reading.toLowerCase()){
case ('yes'):
case ('y'):
  alert ('It\'s grat to meet another reader! we\'re rare those days');
  break;
case ('no'):
case ('n'):
  alert ('You should try to read more, it\'s a lot of fun and benifit');
  break;
}
alert ( userName + ' welcome here I wish you will enjoy this place');

let favouritNumber=['2','4','6','8'];
console.log(favouritNumber);
let tries=4;
alert('my favourit number is located between 1 & 6');
let userNumber=prompt('try to guess my favourit number, you\'ll have 4 attempts to git the right answer');
let right=false;
while(tries && !right){
  for(let n=0;n<favouritNumber.length;n++){
    if(userNumber === favouritNumber[0]){
      alert('Great!. You\'re right, my favourit number is 2');
      console.log(userNumber);
      right=true;
      break;
    }
    tries-=1;
    userNumber= prompt ('You\'re wrong:\'(, it\'s ok you can still try '+tries+' time/s');
  }
  if(right){
    break;
  }else{
    alert('so bad:\'(, my favourit number is 2');
  }
}
