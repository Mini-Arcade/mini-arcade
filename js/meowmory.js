let numFlipped = 0;
 
 function Card(idArg, nameArg, fileArg) {
    this.id = idArg;
    this.name = nameArg;
    this.file = fileArg;
    this.flipped = false;

}

// create render function for cards that spits onto the page
Card.prototype.render = function () {

    const meowmory = document.getElementById("meowmory");

    let container = document.createElement("div");
    container.classList.add("container");
    meowmory.appendChild(container);

    let cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");
    container.appendChild(cardInner);

    let cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardInner.appendChild(cardFront);

    let frontImg = document.createElement("img");
    frontImg.setAttribute("src", "meow-img/meowmory.png");
    cardFront.appendChild(frontImg);

    let cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardInner.appendChild(cardBack);

    let backImg = document.createElement("img");
    backImg.setAttribute("src", this.file);
    cardBack.appendChild(backImg);

// THIS IS WHERE THE MAGIC HAPPENS 
    const thisCard = this
    container.addEventListener("click", function() {
        // turn the card around
        container.classList.toggle("flip");
        // keeping count of flips
        numFlipped++
        // updating object flipped to true 
        thisCard.flipped = !thisCard.flipped
        // check all cards for another flipped card 
        for (let i = 0; i < cards.length; i++) {
            console.log(cards[i].flipped);
            if(thisCard.name === cards[i].name && cards[i].flipped === true && thisCard.id !== cards[i].id) {
                // name and flip status match 
                console.log("its a match")
            } else {
                cards[i].flipped.classList.add("solved");
            }

        if(cards[i].flipped > 1) {
            cards.flipped.classList.remove("flip") 
                // add solved to cards flipped and in css make it obvious they've been solved. 
                // after for loop check flipped cards and if more than one remove any flipped class. 
            }
        
        }
        })
    }
        // if the flipped cards match, show correct or not, else, flip back round


// names array =[];
const imgNames =
    ["gangstaKitty",
    "grumpyKitty",
    "handsKitty",
    "lickingKitty",
    "shockedKitty",
    "smilingKitty",
    "tongueKitty",
    "wetKitty",];

// empty cards array

const cards = [];

// loop through array to create 16 card objects with the contstructor and push into empty cards array
let id = 0;
for(let a = 0; a < imgNames.length; a++) {
    id++
    let newCard = new Card(id, imgNames[a], "meow-img/" + imgNames[a] + ".png")
    id++
    let newCard2 = new Card(id, imgNames[a], "meow-img/" + imgNames[a] + ".png")
    //console.log(newCard)
    cards.push(newCard)
    cards.push(newCard2)
}

// loop through and render cards array
for(a = 0; a < cards.length; a++) {
 cards[a].render();
}
