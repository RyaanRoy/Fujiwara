const { Client, Message, MessageEmbed } = require("discord.js");
const akinator = require("discord.js-akinator");
const useButtons = true;
module.exports.run = async (client, message, args) => {
   
	akinator(message, {
		useButtons: useButtons, 
	});
    
  };


module.exports.help = {
	name: "akinator",
	description:
		"PLaying akinator on discord",
	usage: "f-akinator",
	accessableby: "Member",
	aliases: ["aki"]
};