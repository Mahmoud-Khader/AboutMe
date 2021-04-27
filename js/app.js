/* eslint-disable no-unused-vars */
'use strict';
let score=0;
alert('Welcome to my AboutMe Page');
let userName = prompt('Could you enter your name please');
alert(' Hello Mr/Ms ' + userName);

// eslint-disable-next-line no-unused-vars
let userInput1 = prompt('Do you know my name ?');
switch (userInput1.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('yes my name is mahmoud');
        alert('yse my name is mahmoud');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('my name is mahmoud nice to meet you');
        alert('my name is mahmoud nice to meet you');
        break;
}

// eslint-disable-next-line no-unused-vars
let userInput2 = prompt('do i study programming ?');
switch (userInput2.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('yes i study programming ');
        alert('yes i study programming');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('you are wrong i study programming ');
        alert('you are wrong i study programming');
        break;
}


// eslint-disable-next-line no-unused-vars
let userInput3 = prompt('is my fav color is red ?');
switch (userInput3.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('you are right');
        alert('you are right');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('you are wrong');
        alert('you are wrong');
        break;
}


// eslint-disable-next-line no-unused-vars
let userInput4 = prompt('Do i live in Amman  ?');
switch (userInput4.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('you are right i live in amman ');
        alert('you are right i live in amman');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('you are wrong i live in amman');
        alert('you are wrong i live in amman');
        break;
}

// eslint-disable-next-line no-unused-vars
let userInput5 = prompt('Am i Civil Engineer ?');
switch (userInput5.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('you are right iam civil engineer ');
        alert('you are right iam civil engineer');
        score++;
        break;
    case 'no':
    case 'n':
        //console.log('you are wrong iam civil engineer');
        alert('you are wrong iam civil engineer');
        break;
}

 alert('For this question you only have 4 attempts only')

let userInput6;
for(let i = 1; i <= 4; i++){
    userInput6 = Number(prompt('How old Am I ?'));
    while(!userInput6){
        userInput6 = Number(prompt('Please Enter a Number Value'));
    }
    if(userInput6 == 26){
        alert('Correct Answar good job');
        score++;
        break;
    }else if(userInput6 <= 26){
        alert('Your answar too low');
    }else if(userInput6 >= 26){
        alert('your answar too high');
    }
}
alert('The Correct answar is 26');

alert('For this question you only have 6 attempts only');

let games = ['dota2','wourld of warcraft','hearthstone','warcraft 3'];
let userInput7;
for(let i = 1 ; i <=6 ;i++){
    userInput7 = prompt('Name one strategy game from my top 10 Video games');

    if(userInput7.toLowerCase() === games[0] || userInput7 === games[1] || userInput7 === games[2] || userInput7 === games[3]){
    alert('you are correct');
    score++;
    break;
}else {
    alert('wrong answar please try agian')
}
}
alert(games[0]+'/ '+ games[1] +'/ '+ games [2] +'/ '+ games[3]);

alert('your score is ' + score + ' out of 7')

alert(' YOU DID A GREAT JOB Mr/Ms ' + userName);