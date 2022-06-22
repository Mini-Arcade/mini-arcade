// create card contructor
imagesArray =[];
imgNames =
    ["gangsta-kitty",
    "grumpy-kitty",
    "hands-kitty",
    "licking-kitty",
    "shocked-kitty",
    "smiling-kitty",
    "tongue-kitty",
    "wet-kitty"];

function Card(name, file) {
    this.name = name;
    this.file = file;
}

// loop through array to create 16 card objects with contstructor
for(let a = 0; a < imgNames.length; a++) {
    const createsCard = new Card (name, file);

}


// create render function for cards
Card.prototype.render = function () {

}


//add event listener so clicking cards flips them