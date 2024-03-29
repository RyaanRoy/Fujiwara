const Discord = require("discord.js");
const moment = require("moment");
function checkDays(date) {
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	const days = Math.floor(diff / 86400000);
	return `${days + (days == 1 ? " day" : " days")} ago`;
}
module.exports.run = async (client, message, args) => {
	const mention = message.member;
    const afk =
      message.guild.afkChannel === null ? "`None`" : message.guild.afkChannel;
    let servericon = message.guild.iconURL;
    let verifLevels = {
      NONE: "None",
      LOW: "Low",
      MEDIUM: "Medium",
      HIGH: "(╯°□°）╯︵  ┻━┻ (High)",
      VERY_HIGH: "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Very High)",
    };
    let region = {
      brazil: "Brazil",
      "eu-central": "Central Europe",
      singapore: "Singapore",
      "us-central": "U.S. Central",
      sydney: "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      london: "London",
      amsterdam: "Amsterdam",
      hongkong: "Hong Kong",
      russia: "Russia",
      southafrica: "South Africa",
      india: "India",
    };
    const owner = await message.guild.fetchOwner()    
    


  
    const serverembed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .addField(
        `General Info`,
        `Owner: ${owner.user.tag} \nRegion: \`${
          region[message.guild.region]
        }\` \nVerification Lvl: \`${
          verifLevels[message.guild.verificationLevel]
        }\``
      )
      .addField(
        `Overview`,
        `Total Channels: \`${
          message.guild.channels.cache.size
        }\` \nText Channels: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_TEXT").size
        }\` \nVoice Channels: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_VOICE").size
        }\` \nAFK Channel: ${afk} \nAFK Timeout: \`${
          message.guild.afkTimeout
        } sec\` \nTotal Roles: \`${
          message.guild.roles.cache.size
        }\` \nTotal Emojis: \`${message.guild.emojis.cache.size}\``
      )
      .addField(
        `Member Info`,
        `Total Members: \`${message.guild.memberCount}\``
      )
      .addField(
        `Misc. Info`,
        `You Joined on: \n\`${moment(mention.joinedAt).format(
          "dddd, MMMM Do YYYY, h:mm:ss A"
        )}\` \nCreated On: \n\`${moment(message.guild.createdAt).format(
          "dddd, MMMM Do YYYY, h:mm:ss A"
        )}\``
      )
      .setThumbnail(message.guild.iconURL())
      .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL())
      .setColor("#cc338b")
      .setTimestamp();
	 
    message.channel.send({ embeds: [serverembed] });
};

module.exports.help = {
	name: "serverinfo",
	description: "This command is used for checking the server info.",
	usage: "f-serverinfo",
	accessableby: "Member",
	aliases: []
};
