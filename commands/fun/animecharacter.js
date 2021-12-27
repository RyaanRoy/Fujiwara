const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
const a = require('acb-api');
module.exports.run = async (client, message, args) => {
  const search = `${args}`;
  if(!search)
  return message.reply('Please add a search query or command will not work.');

  a.get_character_by_search(search)
    .then((data) => {
    const Embed = new Discord.MessageEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.anime_image)
      .setDescription(JSON.stringify(data.description))
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('Name', JSON.stringify(data.name), true)
      .addField('Gender', JSON.stringify(data.gender), true)
      .addField('Origin', JSON.stringify(data.origin), truefalse)
      .addField('Anime Name', JSON.stringify(data.anime_name), true)
      .setImage(data.character_image);

      message.channel.send({ embeds: [Embed] });

    })
      .catch((err) =>
        message.channel.send({embeds:[
          new MessageEmbed()
            .setDescription(
              `That character isn't found!\n\n\`\`\`js\n${err}\n\`\`\``
            )
            .setColor("#cc338b")
        ]}
        )
      );
};

module.exports.help = {
	name: "animecharacter",
	description:
		"Searching anime characters",
	usage: "f-animecharacter <query>",
	accessableby: "Member",
	aliases: ["animecharactersearch"]
};