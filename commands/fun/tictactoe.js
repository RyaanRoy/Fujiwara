const Discord = require("discord.js");
const _ttt = require('discord.tictactoegame');
const ttt = new _ttt();
module.exports.run = async (client, message, args) => {
	ttt.duo(message,player2);
};

module.exports.help = {
	name: "tictactoe",
	description: "Use this command for playing tictactoe.",
	usage: "f-tictactoe",
	accessableby: "Member",
	aliases: ["ttt"]
};
