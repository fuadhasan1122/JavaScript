const footballTeam = {
  team: "Argentina National Team",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false }
  ]
};


document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;


function displayPlayers(players) {
  const container = document.getElementById("player-cards");
  container.innerHTML = "";

  players.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    const h2 = document.createElement("h2");
    h2.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;

    const p = document.createElement("p");
    p.textContent = `Position: ${player.position}`;

    card.appendChild(h2);
    card.appendChild(p);
    container.appendChild(card);
  });
}


displayPlayers(footballTeam.players);


document.getElementById("players").addEventListener("change", function () {
  const selected = this.value;

  if (selected === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(player => player.position === selected);
    displayPlayers(filteredPlayers);
  }
});

