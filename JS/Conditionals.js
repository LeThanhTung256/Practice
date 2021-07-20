//If...Else Statements=====================================

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel  > 8){
  console.log('time to sleep')
}else{
  console.log('not bed time yet')
}

//Ternary Operator========================================
let isLocked = false;

/*
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}*/
isLocked?console.log('You will need a key to open the door.'):console.log('You will not need a key to open the door.');

let isCorrect = true;

/*
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
 */
isCorrect?console.log('Correct!'): console.log('Incorrect!');


let favoritePhrase = 'Love That!';

// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }
favoritePhrase === 'Love That!'?console.log('I love that!'): console.log("I don't love that!")

//The switch keyword=============================
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!')
    break;
  default:
    console.log('No medal awarded.');
    break;
}