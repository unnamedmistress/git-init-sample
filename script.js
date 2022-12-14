var userName = '';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');
var userQuestion = '';
console.log(`${userName} what do you want to know?`);
var randomNumber = Math.floor(Math.random()*8);
var eightBall = '';
switch (randomNumber) {
  case 0:
   console.log('Not today, Satan.');
    break;
  case  1:
     console.log('To win at life, you have to be willing to die a thousand deaths and be reborn a thousand times.');
    break;
  case 2:
    console.log('Success is something between you and yourself. I think only you know where youve come from and how far you wanna go.');
    break;
    case 3:
     console.log('I feel like you are being sabotaged by your inner saboteur.');
     case 4:
      console.log('I kind of have this mentality that says, everything will work out in the end. And if its not working out, its not the end');
      break;
    case 5:
     console.log('Your tone seems very pointed right now');
     break
     case 6:
      console.log('We are all born naked and the rest is drag');
      break;
  default:
  console.log('Not today, Satan.');
  break;
}

