const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	if (message.author.id != process.env.OWNERID){
		return message.channel.send("Only my developer can use this command...");}
    try {

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
      const errorlogs = client.channels.cache.get(ERROR_LOGS_CHANNEL);

      message.channel.send(
        `Whoops, We got a error right now! This error has been reported to Support center!`
      );

      errorlogs.send(`Error on bs commands!\n\nError:\n\n ${err}`);
    }
      }



module.exports.help = {
	name: "serverlist",
	description: "N/A",
	usage: "f-serverlist",
	accessableby: "Bot Owners",
	aliases: ["slt"]
};
