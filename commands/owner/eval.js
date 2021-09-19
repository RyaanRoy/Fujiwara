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
    
          if (typeof result !== "string") {
            output = inspect(result);
          }
    
          message.channel.send(
            new Discord.MessageEmbed()
              .setColor("#00FF00")
              .setTitle(`<:tickYes:863367013464408084> | 200 : Success`)
              .setDescription(`Results\n\`\`\`yml\n${output}\n\`\`\``)
              .setFooter(`Actioned by : ${message.author.tag}`)
          );
        } catch (error) {
          console.log(error);
          message.channel.send(
            new Discord.MessageEmbed()
              .setTitle(
                `<:tickNo:863367014092898314> | Evaluated Content too long to displayed`
              )
              .setDescription(`Error Logs\n\`\`\`yml\n${error}\n\`\`\``)
              .setColor("#FF0000")
              .setFooter(`Actioned by : ${message.author.tag}`)
          );
        };

};

module.exports.help = {
	name: "eval",
	description:
		"This command is used for evaluating.",
	usage: "b-eval[code]",
	accessableby: "Bot Owners",
	aliases: []
};