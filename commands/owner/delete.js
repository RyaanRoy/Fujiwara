const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.author.id == "874922249411518484"){
        message.delete()
    }

};

module.exports.help = {
	name: "delete",
	description: "N/A",
	usage: "f-delete",
	accessableby: "Bot Owners",
	aliases: []
};