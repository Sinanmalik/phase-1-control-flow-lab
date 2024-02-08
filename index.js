// function scuberGreetingForFeet(){
//   // Write your code here!
// }

// function ternaryCheckCity(){
//   // Write your code here!
// }

// function switchOnCharmFromTip(){
//   // Write your code here!
// }

function scuberGreetingForFeet(feet){
  // Check if the ride distance is less than or equal to 400 feet
  if (feet <= 400) {
    return 'This one is on me!';
  }
  // Check if the ride distance is between 400 and 2000 feet
  else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  // Check if the ride distance is over 2000 feet but not over 2500 feet
  else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  // If the ride distance is over 2500 feet
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Return different messages based on the city
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Return different messages based on the tip
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

module.exports = {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip
};