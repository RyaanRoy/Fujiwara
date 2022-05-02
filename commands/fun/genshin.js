const Discord = require("discord.js");
const genshindb = require('genshin-db');
genshindb.setOptions(opts);
module.exports.run = async (client, message, args) => {
    const msg = args.slice(0).join(" ");
    const info=genshindb.characters(msg, { matchAliases: true })
	const embed50 = new Discord.MessageEmbed()
	.setTitle(info.name)
	.setDescription(info.description)
    .addField("Gender",info.gender)
    .addField("Element",info.element)
    .addField("Weapon type",info.weapontype)
	.setColor(0xff0000);
    message.channel.send({embeds:[embed50]});

};

module.exports.help = {
	name: "genshin",
	description: "This command is used for searching genshin database",
	usage: "f-genshin [query]",
	accessableby: "Member",
	aliases: ["gs"]
};
