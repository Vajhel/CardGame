const Masts = ["Chervi", "Bubi", "Chresti", "Piki"]

const nominals = ["6", "7", "8", "9", "10", "Valet", "Dama", "Korol", "Tuz"]

const weights = [6, 7, 8, 9, 10, 11, 12, 13, 14]


const getColoda = () => {
    let coloda = []
    for (let i = 0; i < Masts.length; i++) {
        for (let j = 0; j < weights.length; j++) {
            let Card = {
                mast: Masts[i],
                nominal: nominals[j],
                weight: weights[j],
                img: "./Assets/Cards/" + weights[j] + "_" + Masts.indexOf(Masts[i]) + ".bmp"
            }
            coloda.push(Card)
        }
    }
    return coloda
}

const shuffle = (coloda) => {
    let array = [...coloda]
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const druft = (coloda, playersCount) => {
    let newColoda = [...coloda]
    let hands = []
    let kozir = newColoda[0]
    for (let i = 0; i < newColoda.length; i++) {
        if (newColoda[i]["mast"] == kozir["mast"]) {
            newColoda[i]["weight"] = newColoda[i]["weight"] * 10
        }
    }
    for (let j = 0; j < playersCount; j++) {
        let hand = []
        for (let i = 0; i < 6; i++) {
            hand.push(newColoda.pop([i]))
        }
        hands.push(hand)
    }
    return {hands: hands, newColoda: newColoda, kozir: kozir}
}



module.exports = {
    Masts,
    nominals,
    weights,
    getColoda,
    shuffle,
    druft
}


//this is comment to github

