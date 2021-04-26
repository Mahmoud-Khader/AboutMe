'use strict';

alert('Welcome to my AboutMe Page');
let userName = prompt('Could you enter your name please');
alert(' Hello Mr/Ms ' + userName);

// eslint-disable-next-line no-unused-vars
let userInput1 = prompt('Are we in Ramadan Now ?');
switch(userInput1.toLowerCase()){
    case 'yes':
    case 'y':   
        //console.log('you are right we are in ramadan now');
        alert('you are right we are in ramadan now');
        break;
        case 'no':
        case 'n':    
        //console.log('you are wrong we are in ramadan now');
        alert('you are wrong we are in ramadan now');
        break;
}

// eslint-disable-next-line no-unused-vars
let userInput2 = prompt('Do we have to fast in Ramadan ?');
switch(userInput2.toLowerCase()){
    case 'yes':
    case 'y':    
       // console.log('you are right we have to fast in ramadan ');
        alert('you are right we have to fast in ramadan');
        break;
        case 'no':
        case 'n':    
        //console.log('you are wrong we have to fast in ramadan ');
        alert('you are wrong we have to fast in ramadan');
        break;
}


// eslint-disable-next-line no-unused-vars
let userInput3 = prompt('Are you tall ?');
switch(userInput3.toLowerCase()){
    case 'yes':
    case 'y':    
        //console.log('you are tall');
        alert('you are tall');
        break;
        case 'no':
        case 'n':    
        //console.log('you are shorty');
        alert('you are shorty');
        break;
}


// eslint-disable-next-line no-unused-vars
let userInput4 = prompt('Are you fat ?');
switch(userInput4.toLowerCase()){
    case 'yes':
    case 'y':    
        //console.log('you are fat ');
        alert('you are fat');
        break;
        case 'no':
        case 'n':    
        //console.log('you are thin');
        alert('you are thin');
        break;
}

// eslint-disable-next-line no-unused-vars
let userInput5 = prompt('Do you trian ?');
switch(userInput5.toLowerCase()){
    case 'yes':
    case 'y':    
        //console.log('you are healthy ');
        alert('you are healthy');
        break;
        case 'no':
        case 'n':    
        //console.log('you are Lazy as hell');
        alert('you are Lazy as hell');
        break;
}

alert(' YOU DID A GREAT JOB Mr/Ms ' + userName);