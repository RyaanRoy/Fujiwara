const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    const Message = args.slice(0).join(" ");
	if (!Message){return message.reply("Send something!");}

  
    ts.close(Message,true);

};

module.exports.help = {
	name: "ticketclose",
	description: "This command is used for closing ticket.",
	usage: "f-ticketclose",
	accessableby: "Member",
	aliases: ["tc"]
};
