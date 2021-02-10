'use strict';
let score = 0;
let userName = prompt('what\'s you\'re name?');

function myName(userName) {
  alert('welcome her');
  console.log(userName);
}
myName(userName);


let letter = prompt('Does your name starts with the letter \'R\'?');

function myLetter(letter) {

  switch (letter.toLowerCase()) {
  case ('yes'):
  case ('y'):
    alert('We have the same first letter!');
    console.log(alert);
    score += 1;
    break;
  case ('no'):
  case ('n'):
    alert('It\'s ok, your first letter is pretty to<3');
    console.log(alert);
    break;
  }
}
myLetter(letter);


let myAge = prompt('Are you 23 years old?');

function tAge(myAge) {
  switch (myAge.toLowerCase()) {
  case ('yes'):
  case ('y'):
    alert('we\'re the same age!');
    console.log(alert);
    score += 1;
    break;
  case ('no'):
  case ('n'):
    alert('We\'re not the same age :\'(');
    console.log(alert);
    break;
  }
}
tAge(myAge);

let interest = prompt('Are you interested in programming?');

function yInterst(interest) {
  switch (interest.toLowerCase()) {
  case ('yes'):
  case ('y'):
    alert('Great,me to!');
    console.log(alert);
    score += 1;
    break;
  case ('no'):
  case ('n'):
    alert('sorry to hear that');
    console.log(alert);
    break;
  }
}
yInterst(interest);

let anime = prompt('Do you like anime?');

function iAnime(anime) {
  switch (anime.toLowerCase()) {
  case ('yes'):
  case ('y'):
    alert('OMG! me too,greeting anime lover fellow<3');
    console.log(alert);
    score += 1;
    break;
  case ('no'):
  case ('n'):
    alert('It\'s ok, I\'m sure you have other interest.');
    console.log(alert);
    break;
  }
}
iAnime(anime);

let reading = prompt('Do you like reading?');

function dReading(reading) {
  switch (reading.toLowerCase()) {
  case ('yes'):
  case ('y'):
    alert('It\'s great to meet another reader! we\'re rare those days');
    console.log(alert);
    score += 1;
    break;
  case ('no'):
  case ('n'):
    alert('You should try to read more, it\'s a lot of fun and benefits');
    console.log(alert);
    break;
  }
}
dReading(reading);
alert(userName + ' welcome here I wish you will enjoy this place');

let favouritNumber ='2';
console.log(favouritNumber);
let tries = 4;
alert('my favorite number is located between 1 & 6');
let userNumber = prompt('try to guess my favorite number, you\'ll have 4 attempts to git the right answer');
let right = false;
while (tries && !right) {
  for (let n = 0; n < 4; n++) {
    if (userNumber === favouritNumber) {
      alert('Great!. You\'re right, my favorite number is 2');
      console.log(userNumber);
      score += 1;
      right = true;
      break;
    }
    tries -= 1;
    userNumber = prompt('You\'re wrong:\'(, it\'s ok you can still try ' + tries + ' time/s');
  }
  if (right) {
    break;
  } else {
    alert('so bad:\'(, my favorite number is 2');
  }
}

let topTen = ['Bleach', 'FMAB', 'BNHA', 'Digimon Adventure', 'Dragon Quest', 'NARUTO', 'Fate series', 'Demon Slayer', 'JJK'];
let attempts = 6;
let favourit = false;
alert('try to guess my favourit 1 top anime, be aware that you have just 6 attempts!');
let userAnswer = prompt('my favorite anime name is the main character\'s name');
let character = ['Akame ga kill!', 'Koroku no basket', 'Dororo', 'Durarara!!'];
while (attempts && !favourit) {
  for (let f = 0; f < 6; f++) {
    if (userAnswer.toUpperCase() === topTen[5]) {
      alert('fantastic!. You guessed that right, my favourit Anime is Naruto');
      console.log(userAnswer);
      score += 1;
      favourit = true;
      break;
    }
    attempts -= 1;
    userAnswer = prompt('You\'re wrong:\'(, it\'s ok you can still try ' + attempts + ' time/s');
  }
  if (favourit) {
    break;
  } else {
    alert('you could\'nt figure it out and that made me sad:\'(, my favourit Anime is Naruto, but here another Animes I like have the name of it\'s main character: ' + character);
    break;
  }
}
alert('we have ' + score + ' similarities!');
