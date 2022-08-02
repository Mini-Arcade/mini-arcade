async function getLeaderboard() {
	try {
		const response = await axios.get("http://localhost:3005/games");
		console.log(response);
        const data = response.data;

        data.sort((a, b) => {
            return b.score - a.score;
        });

        //get the Ordered List to later use to append items into the leaderboard.
        const plyrOl = document.getElementById("plyrOl");
        const modal = document.getElementById("myModal");

        for(let a = 0; a < response.data.length; a++) {


        const plyScore = document.createElement('small');
        const plyName = document.createElement('mark');
        const plyerList = document.createElement('li');
        plyerList.appendChild(plyName);
        plyerList.appendChild(plyScore);
        plyrOl.appendChild(plyerList);

        
            plyScore.innerHTML = response.data[a].score;
            plyName.innerHTML = response.data[a].name;
            if(a === 4) {
                break;
            }
        }
 
	} catch (err) {
		console.log("test");
		console.log(err);
	}
}
getLeaderboard();

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }