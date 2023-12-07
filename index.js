// requirements for discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');

// starting the client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// run this code only once for whenever its ready
client.once(Events.ClientReady, readyClient => {
	console.log(`Starting Up! Logged in as ${readyClient.user.tag}`);
});

//loging in with the token
client.login(token);
