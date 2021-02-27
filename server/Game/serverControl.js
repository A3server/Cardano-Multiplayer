const express = require("express");

// Listen for connections
io.on('connection', function (client) {
  // someone connected
  console.log("Client connected!")

  // When a player sends the join message
  client.on('join', function (data) {

    // Set the player's stats
    client.stats = DEFAULT_STATS

    // Setup client body 	

    // Setup eth account info	
    client.ethAccount = data.ethAccount
    // test balance	

    /*
    web3.eth.getBalance(client.ethAccount).then( balance => {	
        var value = web3.utils.fromDecimal(balance);	
        var balanceInEther = web3.utils.fromWei(value, "ether")	
        client.balance = balanceInEther	
    })	
    */

    // add client to clients object	
    clients[client.id] = client

    // broadcast connection to players	
    client.broadcast.emit('playerConnected', {
      id: client.id
    });
  })

  // add listener to inpun
  client.on('input', function (data) {
    clients[client.id].input = data
  });

  // add listener to player state request	
  client.on('playerStateRequest', function (data) {
    client.emit('requestedPlayerState', {
      id: client.id,
      state: {
        x: client.body.getPosition().x,
        y: client.body.getPosition().y
      }
    })
  });

  // add listener to disconnect	
  client.on('disconnect', function () {
    // broadcast player disconnect	
    client.broadcast.emit('playerDisconnected', {
      id: client.id
    });
    // safely remove player	
    world.destroyBody(client.body)
    delete clients[client.id]
    console.log("Client disconnected!")
  });
});



module.exports = app;