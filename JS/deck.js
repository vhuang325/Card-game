class Deck{
    constructor(){
        this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
        this.cards = [];
    }

    generateCards() {
        for (let i = 0; i < this.suits.length; i++) {
          for (let j = 0; j < this.ranks.length; j++) {
            this.cards.push(new Card(this.ranks[j], this.suits[i]));
          }
        }
    }

    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
      }

    draw(){
        return this.cards.pop();
    }
   
    deal(numHands = 4, cardsPerHand = 2){
        let hands = [];
        for(let i = 0; i < numHands; i++){
            const hand = new Hand();
            for(let j = 0; j < cardsPerHand; j++){
                hand.addCard(this.draw());
            }
            hands.push(hand);
        }
        console.log(hands);
        return hands;
    }

    burn(){

    }

    flop(){

    }

    turn(){

    }

    river(){
        
    }
}




const deck = new Deck();
deck.generateCards();
deck.shuffleCards();
// deck.draw();
deck.deal();
console.log(deck);
console.log(deck.cards);

// Generate Cards

// for (let i = 0; i < deck.cards.length; i++) {
//     const card = deck.cards[i];
//     console.log(card.rank + " of " + card.suit);
//   };

// Shuffle Cards

//   for (let i = 0; i < deck.cards.length; i++) {
//     const card = deck.cards[i];
//     console.log(card.rank + " of " + card.suit);
//   }

// Draw
// console.log(deck.draw());