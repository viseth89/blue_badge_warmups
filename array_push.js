let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

for(let card of cards){
    console.log(card)
    if(typeof card=="string"){
        faceCards.push(card)
    } else {
        numberedCards.push(card)
    }
}

console.log("Face Cards")
console.log(faceCards)
console.log("Numbered Cards")
console.log(numberedCards)