const Discord = require("discord.js");
const simplydjs = require("simply-djs")
module.exports.run = async (client, message, args) => {
	simplydjs.tictactoe(message)
};

module.exports.help = {
	name: "tictactoe",
	description: "Use this command for playing tictactoe.",
	usage: "f-tictactoe",
	accessableby: "Member",
	aliases: ["ttt"]
};
