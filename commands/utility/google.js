const Discord = require("discord.js");
const { parse } = require("twemoji-parser");

module.exports.run = async (client, message, args) => {
    const text1 = args.join(" ");
    const text2 = args.join("+");
    const google = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`;
    if (!text2) {
      return message.channel.send("Enter some to search for");
    }
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        "Google",
        `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
      )
      .setThumbnail(
        `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
      )
      .setDescription(
        `**Searched for: **\n${text1} \n\n**Result: **\n[Search Results](https://google.com/search?q=${text2})`
      )
      .setThumbnail(google)
      .setColor("#cc338b");
    message.channel.send({ embeds: [embed] });
};

module.exports.help = {
	name: "google",
	description: "This command is used for searching google",
	usage: "f-google <query>",
	accessableby: "Member",
	aliases: ["googlesearch"]
};
