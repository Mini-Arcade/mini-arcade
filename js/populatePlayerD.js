function populatePlayerDetails() {
	let playerName = localStorage.getItem("username");
	let playerCharacter = localStorage.getItem("playerCharacter");
	localStorage.setItem("username", playerName);
	localStorage.setItem('playerCharacter', playerCharacter); 
	document.querySelector(".bg-modal").style.display = "none";

	// Create an image element that takes in playerCharacter as src and append it to domPlayerDContainer
	domPlayerDContainer.innerHTML = '';
	domPlayerDContainer.innerHTML += `<h1>${playerName}</h1>`; 

	let playerImage = document.createElement('img');
	playerImage.src = `./images/${playerCharacter}.png`;
    playerImage.className = 'player-image';
	domPlayerDContainer.appendChild(playerImage);
 }

 populatePlayerDetails();