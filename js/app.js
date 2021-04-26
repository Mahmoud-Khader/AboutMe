'use strict';

alert('Welcome to my AboutMe Page');
let userName = prompt('Could you enter your name please');
alert(' Hello Mr/Ms ' + userName);

// eslint-disable-next-line no-unused-vars
let userInput1 = prompt('Do you know my name ?');
switch(userInput1.toLowerCase()){
    case 'yes':
    case 'y':   
        //console.log('yes my name is mahmoud');
        alert('yse my name is mahmoud');
        break;
        case 'no':
        case 'n':    
        //console.log('my name is mahmoud nice to meet you');
        alert('my name is mahmoud nice to meet you');
        break;
}

// eslint-disable-next-line no-unused-vars
let userInput2 = prompt('do i study programming ?');
switch(userInput2.toLowerCase()){
    case 'yes':
    case 'y':    
       // console.log('yes i study programming ');
        alert('yes i study programming');
        break;
        case 'no':
        case 'n':    
        //console.log('you are wrong i study programming ');
        alert('you are wrong i study programming');
        break;
}


// eslint-disable-next-line no-unused-vars
let userInput3 = prompt('is my fav color is red ?');
switch(userInput3.toLowerCase()){
    case 'yes':
    case 'y':    
        //console.log('you are right');
        alert('you are right');
        break;
        case 'no':
        case 'n':    
        //console.log('you are wrong');
        alert('you are wrong');
        break;
}


// eslint-disable-next-line no-unused-vars
let userInput4 = prompt('Do i live in Amman  ?');
switch(userInput4.toLowerCase()){
    case 'yes':
    case 'y':    
        //console.log('you are right i live in amman ');
        alert('you are right i live in amman');
        break;
        case 'no':
        case 'n':    
        //console.log('you are wrong i live in amman');
        alert('you are wrong i live in amman');
        break;
}

// eslint-disable-next-line no-unused-vars
let userInput5 = prompt('Am i Civil Engineer ?');
switch(userInput5.toLowerCase()){
    case 'yes':
    case 'y':    
        //console.log('you are right iam civil engineer ');
        alert('you are right iam civil engineer');
        break;
        case 'no':
        case 'n':    
        //console.log('you are wrong iam civil engineer');
        alert('you are wrong iam civil engineer');
        break;
}

alert(' YOU DID A GREAT JOB Mr/Ms ' + userName);