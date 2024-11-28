const coloda = require("./coloda.js")



const playersCount = 2
const shuffledColoda = coloda.shuffle(coloda.getColoda())
const hands = coloda.druft(shuffledColoda, playersCount)["hands"]
const kozir = coloda.druft(shuffledColoda, playersCount)["kozir"]
let ostatok_Cards = coloda.druft(shuffledColoda, playersCount)["newColoda"]

const druft = (hands) => {
   hands.forEach(hand => {
      console.log("Игрок " + (hands.indexOf(hand)+1) +":\n")
      console.log(hand)
   })
   console.log("\nКозырь:\n")
   console.log(kozir)
   console.log("\nОставшиеся карты:\n")
   console.log(ostatok_Cards.length)
}

druft(hands)



