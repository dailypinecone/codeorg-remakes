// Script for Badminton Lineup Creator
const teamSelect = document.getElementById('team-select');
const playerInputsDiv = document.getElementById('player-inputs');
const inputCounts = {
    varsity: 12,
    jv: 12,
    jv2: 20
}

teamSelect.addEventListener('change', generateInputs);
generateInputs();

function generateInputs() {
    const team = teamSelect.value;
    const count = inputCounts[team];

    //Clear old input
    playerInputsDiv.innerHTML = '';

    //Generate new inputs
    for (let i = 0; i < count; i++){
        //Creates elements for each player input
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Player ${i + 1}`;
        input.id = `player-${i + 1}`;

        //Displays the input in the div with line breaks in between
        playerInputsDiv.appendChild(input);
        playerInputsDiv.appendChild(document.createElement('br'));
    }

    //Load saved lineup if it exists
    loadLineup(team);
}

function clearInputs(){
    const inputs = document.querySelectorAll('#player-inputs input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function saveLineup() {
    const team = teamSelect.value;
    const count = inputCounts[team];
    const lineup = [];
    for (let i = 0; i < count; i++){
        const input = document.getElementById(`player-${i + 1}`);
        lineup.push(input.value);
    }

    //Save lineup to local storage
    localStorage.setItem(`lineup-${team}`, JSON.stringify(lineup));
    const teamName = team.charAt(0).toUpperCase() + team.substring(1);
    alert(`${teamName} lineup saved!`);
}

function loadLineup(team) {
    const savedLineup = localStorage.getItem(`lineup-${team}`);
    
    //If no saved lineup, exit function
    if (!savedLineup) {
        return;
    }

    const lineup = JSON.parse(savedLineup);
    
    for (let i = 0; i < lineup.length; i++){
        const input = document.getElementById(`player-${i + 1}`);
        if (input) {
            input.value = lineup[i];
        }
    }
}

function showScreen(screenId) {
    //Hide all screens
    const screens = document.querySelectorAll('.screen');
    for (let i = 0; i < screens.length; i++){
        screens[i].classList.remove('active');
    }

    //Show selected screen
    document.getElementById(screenId).classList.add('active');
}