let numFlipped = 0;
 
 function Card(nameArg, fileArg) {
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
    container.addEventListener("click", function(e) {
        const clickedCard = e.target
    container.classList.toggle("flip");
    console.log(e)
    numFlipped++
        this.flipped = true
        const checkCards = function (e) {
            
            if(clickedCard === 2) {
                if(clickedCard[0].name === clickedCard[1].name) {
                    console.log("match");
                } else {
                    console.log("wrong");
                }
    
    checkCards(e);
    
        
        
            
        }
    }
    })


}

// names array =[];
const imgNames =
    ["gangstaKitty",
    "grumpyKitty",
    "handsKitty",
    "lickingKitty",
    "shockedKitty",
    "smilingKitty",
    "tongueKitty",
    "wetKitty",
    "gangstaKitty",
    "grumpyKitty",
    "handsKitty",
    "lickingKitty",
    "shockedKitty",
    "smilingKitty",
    "tongueKitty",
    "wetKitty"];

// empty cards array

const cards = [];

// loop through array to create 16 card objects with the contstructor and push into empty cards array
for(let a = 0; a < imgNames.length; a++) {

    let newCard = new Card(imgNames[a], "meow-img/" + imgNames[a] + ".png")
    //console.log(newCard)
    cards.push(newCard)
}

// loop through and render cards array
for(a = 0; a < cards.length; a++) {
 cards[a].render();
}
