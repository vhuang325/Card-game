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
    // generateCards(){
    //     for(const rank of this.ranks){
    //         for(const suit of this.suits){
    //             this.cards.push(new Card(rank, suit))
    //         }
    //     }
    // }
}




const deck = new Deck();
deck.generateCards();
deck.shuffleCards();

// GENERATE CARDS

// for (let i = 0; i < deck.cards.length; i++) {
//     const card = deck.cards[i];
//     console.log(card.rank + " of " + card.suit);
//   };

// SHUFFLE CARDS

//   for (let i = 0; i < deck.cards.length; i++) {
//     const card = deck.cards[i];
//     console.log(card.rank + " of " + card.suit);
//   }

// for (let card of deck.cards) {
//   console.log(card.rank + " of " + card.suit);
// }
// const c = new Deck
// console.log(c);
// console.log(c.generateCards());