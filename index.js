// Code your solutions in this file
function writeCards( namesArray, event) {
  let cards = []
  for (let i = 0; i < namesArray.length; i++) {
    cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return cards
}

function countDown(startingNumber) {
  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber -= 1
  }
  console.log(startingNumber);
}