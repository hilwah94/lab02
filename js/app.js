
'use srtict';

alert('welcome to my web site');

let userName = prompt('what\'s your name ?');
userName = userName.toLocaleLowerCase();
console.log(userName);
alert('Welcome to my website ' + userName);

let Alien = prompt( 'Am I Alien ?');

switch(Alien)
{ case 'yes':
  case 'y' :
    alert('you got me');
    break;
  case 'n' :
  case 'no' :
    alert('as u say human');
    break;
    default:
        
        alert('it\'s scary i know ');
}

let  memes = prompt('do i like memes ?');
switch(memes)
{ case 'yes':
  case 'y' :
    alert('more than any thing');
    break;
  case 'no' :
  case 'n' :
    alert('you are right, i love it');
    break;
    default:
        alert('even we aliens love memes');
}

let  catPerson = prompt( 'Am i a cat person?');
switch(catPerson)
{ case 'yes':
  case 'y' :
    alert('they are adorable');
    break;
  case 'no' :
  case 'n' :
    alert('evrey one is a cat person when you relaize it');
    break;
    default:
        alert('bet in general are human best friend');
}

let music = prompt( 'do i like music?');
switch(music)
{ case 'yes':
  case 'y' :
    alert('sure thing');
    break;
  case 'no' :
  case 'n' :
    alert('who don\'t like music ? ');
    break;
    default:
        alert('music is therapy');
}

alert('you are welcome to visit us any time');
