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
    .then((res) => {
      message.channel.send(res);

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