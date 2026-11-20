const footballTeam = {
  team: "Sudan",
  year: 1998,
  headCoach: "Gradulla",
  players: [
    { name: "Muayad", position: "forward", isCaptain: true }, 
    { name: "MOM", position: "midfielder", isCaptain: false },
    { name: "Marwan", position: "defender", isCaptain: false },
    { name: "Mardhiah", position: "goalkeeper", isCaptain: false }
  ]
};

// 1. Renamed variable to 'playerCardsContainer' to avoid collision with the function
const teamElement = document.getElementById("team");
const headCoachElement = document.getElementById("head-coach");
const yearElement = document.getElementById("year");
const selectPlayers = document.getElementById("players");
const playerCardsContainer = document.getElementById("player-cards");

// Display team info
teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;
headCoachElement.textContent = footballTeam.headCoach;

// 2. Renamed function to 'generatePlayerCards' for clarity
function generatePlayerCards(filter) {
  // Changed "All Players" to "all" to match standard HTML select values
  const players =
    filter === "all"
      ? footballTeam.players
      : footballTeam.players.filter(
          ({ position }) => position === filter
        );

  const cardsHTML = [];

  for (let i = 0; i < players.length; i++) {
    const { name, position, isCaptain } = players[i];
    const displayName = isCaptain ? `(Captain) ${name}` : name;

    // Changed class to "player-card" to match standard CSS
    cardsHTML.push(`
      <div class="player-card">
        <h2>${displayName}</h2>
        <p>Position: ${position}</p>
      </div>
    `);
  }

  return cardsHTML.join(""); // Joined directly in the function for convenience
}

// 3. Initial render so cards show up on page load
playerCardsContainer.innerHTML = generatePlayerCards("all");

// 4. Event listener for filtering
selectPlayers.addEventListener("change", (e) => {
  playerCardsContainer.innerHTML = generatePlayerCards(e.target.value);
});