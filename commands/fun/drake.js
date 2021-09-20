const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports.run = async (client, message, args) => {
    const split = args.join(" ").split(",");
    const user = split[0];
    const user2 = split[1];
    if(!user || !user2) return message.channel.send(`You need to specify two sentences separated with comma \`,\``)
    const res = await fetch(
      `https://frenchnoodles.xyz/api/endpoints/drake/?text1=${user}&text2=${user2}`,
      {}
    );
    let Image = await res.buffer();
    const drakememe = new Discord.MessageAttachment(Image);
    message.channel.send(drakememe);
};

module.exports.help = {
	name: "drake",
	description: "This command is used to hug someone",
	usage: "b-hug <text_1>, <text_2>",
	accessableby: "Members",
	aliases: []
};