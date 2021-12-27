/* const Discord = require("discord.js");
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
      .setThumbnail(res.anime_image)
      .setDescription(JSON.stringify(res.description))
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('Name', JSON.stringify(res.name), true)
      .addField('Gender', JSON.stringify(res.gender), true)
      .addField('Origin', JSON.stringify(res.origin), truefalse)
      .addField('Anime Name', JSON.stringify(res.anime_name), true)
      .setImage(res.character_image);

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
};  */