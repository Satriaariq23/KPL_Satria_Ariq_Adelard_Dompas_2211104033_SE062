const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const State = {
    START: "START",
    PLAYING: "PLAYING",
    GAME_OVER: "GAME OVER",
    EXIT: "EXIT"
};

let state = State.START;

function runStateMachine() {
    console.log(`Current State: ${state}`);
    
    rl.question("Enter Command: ", (command) => {
        switch (state) {
            case State.START:
                if (command.toUpperCase() === "PLAY") {
                    state = State.PLAYING;
                } else if (command.toUpperCase() === "EXIT") {
                    state = State.EXIT;
                }
                break;
            case State.PLAYING:
                if (command.toUpperCase() === "LOSE") {
                    state = State.GAME_OVER;
                } else if (command.toUpperCase() === "EXIT") {
                    state = State.EXIT;
                }
                break;
            case State.GAME_OVER:
                if (command.toUpperCase() === "RESTART") {
                    state = State.START;
                } else if (command.toUpperCase() === "EXIT") {
                    state = State.EXIT;
                }
                break;
        }

        if (state !== State.EXIT) {
            runStateMachine();
        } else {
            console.log("Game Exited.");
            rl.close();
        }
    });
}

runStateMachine();
