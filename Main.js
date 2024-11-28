const coloda = require("./coloda.js")



const playersCount = 3
const shuffledColoda = coloda.shuffle(coloda.getColoda())
const hands = coloda.druft(shuffledColoda, playersCount)["hands"]
const kozir = coloda.druft(shuffledColoda, playersCount)["kozir"]
let ostatok_Cards = coloda.druft(shuffledColoda, playersCount)["newColoda"]

const findMinKozirPlayer = (hands) => {
   console.log("\nищу минимальную карту козыря у игроков...\n")
   let minWeight = 20000
   let minKozir = {}
   hands.forEach(hand => {
      hand.forEach(card => {
         if (card["weight"] > 1000){
            if (card["weight"] < minWeight){
               minWeight = card["weight"] 
               minKozir = {
                  Player: hands.indexOf(hand)+1 , 
                  card: card
               }
            }
         }
      })
   })
   if (minWeight == 20000){
      minKozir = {
         Player: Math.floor(Math.random() * hands.length) + 1,
      }
   }
   return minKozir["Player"]
}

const game = () => {
   console.log("Игра началась!")
   console.log("Игроков: " + playersCount)
   console.log("Мешаю колоду...")
   console.log("Раздаю карты...")
   console.log("\nКозырь:\n")
   console.log(kozir)
   console.log("\nОставшиеся карты:\n")
   console.log(ostatok_Cards.length)
   let minKozir = findMinKozirPlayer(hands)
   console.log("Первым ходит игрок: " + minKozir)
   hands[minKozir-1].forEach(card => {
      console.log("\nКарта: " + (hands[minKozir-1].indexOf(card)+1))
      console.log(card)
   })
}

game()