// create card constructor
//Product.prototype.render = function () {
//    this.viewed++;
//    const theProduct = this;
//    const img = document.createElement("img");
//    img.setAttribute("src", this.file);
//    img.setAttribute("alt", this.name);
//    img.classList.add("images");
//    imagesDiv.appendChild(img);
  
 //   img.addEventListener("click", function () {
 //     theProduct.clicked++;
 //     console.log(theProduct);
  
function Card(nameArg, fileArg) {
    this.name = nameArg;
    this.file = fileArg;
}

//imagesArray =[];
imgNames =
    ["gangstaKitty1",
    "gangstaKitty2",
    "handsKitty1",
    "handsKitty2",
    "lickingKitty1",
    "lickingKitty2",
    "shockedkitty1",
    "shockedkitty2",
    "smilingKitty1",
    "smilingKitty2",
    "tongue-kitty",
    "wet-kitty"];

// empty cards array

cards = [];

// loop through array to create 16 card objects with the contstructor
for(let a = 0; a < imgNames.length; a++) {

    let gangstaKitty1 = new Card('gangsta-kitty', )
    let gangstaKitty2 = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    let gangstaKitty = new Card('gangsta-kitty', )
    

}


// create render function for cards
Card.prototype.render = function () {

}


//add event listener so clicking cards flips them