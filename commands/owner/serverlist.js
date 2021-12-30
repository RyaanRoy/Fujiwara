const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
    if (message.author.id != process.env.OWNERID)
      return message.channel.send(
        `<a:_cross:725303285015117844> Developer Only <a:_cross:725303285015117844>`
      );
    let data = [];
    client.guilds.cache.forEach((x) => {
      message.channel.send(
        `🔹**${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})\n............................`
      );
    });

    if (data.length > 0) {
      data.sort();
      data = `🔹 ` + data.join("\n🔹");
    } else {
      data = "[No server found]";
    }
  } catch (err) {
  }
      }



module.exports.help = {
	name: "serverlist",
	description: "N/A",
	usage: "f-serverlist",
	accessableby: "Bot Owners",
	aliases: ["slt"]
};
