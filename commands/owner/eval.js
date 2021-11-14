const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {
	if (message.author.id != process.env.OWNERID){
		return message.channel.send("Only my developer can use this command...");
    }
        const code = args.join(" ");
        if (!code)
          return message.channel.send("Please provide some code to evaluate!");
    
        try {
          const result = await eval(code);
          let output = result;
          message.channel.send(
            new Discord.MessageEmbed()
              .setColor("#00FF00")
              .setTitle(`Success`)
              .setDescription(`Result\n\`\`\`yml\n${output}\n\`\`\``)
              .setFooter(`Actioned by : ${message.author.tag}`)
          );
          if (typeof result !== "string") {
            inspect(result);
          }

        } catch (error) {
          console.log(error);
        }

};

module.exports.help = {
	name: "eval",
	description:
		"This command is used for evaluating.",
	usage: "b-eval[code]",
	accessableby: "Bot Owners",
	aliases: []
};