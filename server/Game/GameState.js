const db = require("kvstore");
const Web3 = require('web3');
const io = require('socket.io')(server);


let clients = {}
export default (req,res) => { 
    let message = req.message;


    return db.get("gameState").then((gameState) => {
      
        // if the gameState doesn't exist, create it
        if (!gameState || req.message.action == "reset-gamestate") {
            // default gameState object
            gameState = {
                status: "waiting",
                totalPlayers: 0,
                activePlayers: 0,
                playerStates: {}
            }

            console.log("gameState does not exist. Creating...");
            console.log("New Game State: ", gameState)
        }

        // TODO - Handle player join messages
        
        db.set("gameState", gameState).catch((err) => {
            console.log("An error occured saving the random number.", err);
        });
        
        return res.ok();
    });


}