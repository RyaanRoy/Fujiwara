const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");

const a = require('acb-api');
module.exports.run = async (client, message, args) => {
  const search = `${args}`;
  if(!search)
  return message.reply('Please add a search query or command will not work.');
  const {waifu} = require('discord-senpai')
  const anime = waifu.search(search);
const waifuEmbed= new Discord.MessageEmbed()
.setAuthor(`Info about ${args}`.split(',').join(' '))
.setDescription(`The character is ${anime.name} from the anime ${anime.anime}`)
.setImage(anime.URL);
message.channel.send({embeds:[waifuEmbed]})

};

module.exports.help = {
	name: "animecharacter",
	description:
		"Searching anime characters",
	usage: "f-animecharacter <query>",
	accessableby: "Member",
	aliases: ["animecharactersearch"]
};