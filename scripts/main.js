// GUI elements
const tiles = document.querySelectorAll('.tile');
let editPlayer1Button = document.querySelector('#edit-player1');
const editPlayer2Button = document.querySelector('#edit-player2');
const editPlayer1Div = document.querySelector('#player1');
const editPlayer2Div = document.querySelector('#player2');
const paraStatus = document.querySelector('#container p');
// global vars
const PLAYERS ={
    "player1":"player1",
    "player2":"player2",
}

let editMode = false;

// dynamic elements
let editInput;
let saveBtn;
let playerDiv;
let currentPlayerEditName = "player1"; // track current player
let currentPlayerPlaytime = "player1"; // track current player


function switchEditMode(e) {
    const isPlayer1 = e.target.id === 'edit-player1'; // check if edit player!
    console.log(isPlayer1);
    currentPlayerEditName = isPlayer1? "player1" : "player2"; // select player
    console.log(currentPlayerEditName);

    if(!editMode){
        editMode = true;

        playerDiv = isPlayer1? editPlayer1Div : editPlayer2Div; // select div
        playerDiv.innerHTML = ""; // clear div

        // Create input field and save button dynamically
        editInput = document.createElement("input");
        editInput.type = "text";
        saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";

        // Append the input and button to the player div
        playerDiv.appendChild(editInput);
        playerDiv.appendChild(saveBtn);

        editInput.focus();

        // Add event listener to the save button
        saveBtn.addEventListener('click', saveName);
    }
}

function saveName() {
    editMode = false;
    // Clear the div content
    playerDiv.innerHTML = ""

    // Set the player name or default if input is empty
    const playerName = editInput.value !== "" ? editInput.value:  (currentPlayerEditName === "player1" ? "Player1" : "Player2")
    playerDiv.innerHTML = `<label>${playerName}</label>`;

    // Save player name in global variable
    PLAYERS[currentPlayerEditName] = playerName;
    console.log(PLAYERS);

    // Recreate the edit button and attach its event listener
    editPlayer1Button = document.createElement("button");
    editPlayer1Button.textContent = "Edit";
    editPlayer1Button.id = "edit-player1";
    playerDiv.appendChild(editPlayer1Button);

    // Reattach the event listener to the new edit button
    editPlayer1Button.addEventListener('click', switchEditMode);

    // update status text
    updateStatusText()
}

function transitionText(text, target){
    target.classList.add("fade-out");
    setTimeout(()=> {
        target.textContent = text;
        target.classList.remove("fade-out");
        target.classList.add("fade-in");
    },500)
}

function updateStatusText(){
    const statusText = currentPlayerPlaytime === "player1" ? `${PLAYERS["player1"]}'s turn!!` : `${PLAYERS["player2"]}'s turn`;
    transitionText(statusText, paraStatus);
}

editPlayer1Button.addEventListener('click',switchEditMode)
editPlayer2Button.addEventListener('click',switchEditMode)

tiles.forEach(tile => {
    tile.addEventListener('click', (e) => {
        if(!tile.textContent){
            if(currentPlayerPlaytime === "player1") {
                 console.log(currentPlayerPlaytime)
                tile.textContent = 'X';
                currentPlayerPlaytime = "player2";

            }else {
                console.log(currentPlayerPlaytime)
                tile.textContent = "O"
                currentPlayerPlaytime = "player1"
            }
            updateStatusText()
        }
    })
})



