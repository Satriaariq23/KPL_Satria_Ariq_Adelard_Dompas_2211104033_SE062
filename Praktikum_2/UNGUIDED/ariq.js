const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const State = {
    START: "START",
    PLAYING: "PLAYING",
    GAME_OVER: "GAME_OVER",
    EXIT: "EXIT"
};

let state = State.START;

function runStateMachine() {
    console.log(`\n=== ${state} SCREEN ===`); 

    rl.question("Enter Command: ", (command) => {
        command = command.trim().toUpperCase();

        switch (state) {
            case State.START:
                if (command === "PLAY") state = State.PLAYING;
                else if (command === "EXIT") state = State.EXIT;
                else console.log("Invalid command! Type 'PLAY' or 'EXIT'.");
                break;

            case State.PLAYING:
                if (command === "LOSE") state = State.GAME_OVER;
                else if (command === "EXIT") state = State.EXIT;
                else console.log("Invalid command! Type 'LOSE' or 'EXIT'.");
                break;

            case State.GAME_OVER:
                if (command === "RESTART") state = State.START;
                else if (command === "EXIT") state = State.EXIT;
                else console.log("Invalid command! Type 'RESTART' or 'EXIT'.");
                break;
        }

        if (state !== State.EXIT) {
            runStateMachine();
        } else {
            console.log("\nExiting game. Goodbye!");
            rl.close();
        }
    });
}

runStateMachine(); 
