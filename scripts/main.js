// GUI elements
const tiles = document.querySelectorAll('.tile');
let editPlayer1Button = document.querySelector('#edit-player1');
const editPlayer2Button = document.querySelector('#edit-player2');
const editPlayer1Div = document.querySelector('#player1');

// global vars
const PLAYERS ={
    player1:"player1",
    player2:"player2",
}

let editMode = false;

// dynamic elements
let editInput;
let saveBtn;
function switchEditMode() {
    if (!editMode) {
        editMode = true;
        // Clear the div content
        editPlayer1Div.innerHTML = "";

        // Create input field and button dynamically
        editInput = document.createElement("input");
        editInput.type = "text";
        saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";

        // Append the elements
        editPlayer1Div.appendChild(editInput);
        editPlayer1Div.appendChild(saveBtn);

        // Add event listener to save button after it's been created
        saveBtn.addEventListener('click', saveName);
    }
}


function saveName() {
    editMode = false;
    // Clear the div content
    editPlayer1Div.innerHTML = ""

    // Set the player name or default if input is empty
    const playerName = editInput.value !== "" ? editInput.value : "Player 1";
    editPlayer1Div.innerHTML = `<label>${playerName}</label>`;

    // Recreate the edit button and attach its event listener
    editPlayer1Button = document.createElement("button");
    editPlayer1Button.textContent = "Edit";
    editPlayer1Button.id = "edit-player1";
    editPlayer1Div.appendChild(editPlayer1Button);

    // Reattach the event listener to the new edit button
    editPlayer1Button.addEventListener('click', switchEditMode);
}


editPlayer1Button.addEventListener('click',switchEditMode)
editPlayer2Button.addEventListener('click',switchEditMode)

tiles.forEach(tile => {
    tile.addEventListener('click', (e) => {
        if(!tile.textContent){
            tile.textContent = 'X';
        }
    })
})



