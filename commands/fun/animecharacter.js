const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
const a = require("acb-api");
module.exports.run = async (client, message, args) => {
  const search = `${args}`;
  if(!search){
  return message.reply('Please add a search query if invalid command will not work.');
  }
  a.get_character_by_search(search).then(res => {
    const animeinfo=JSON.parse(res);
    let e = new MessageEmbed()
      .setColor("#FFC0CB")
      .setTitle(`${animeinfo[0].name}`)
      .addField(`Gender`,`${animeinfo[0].gender}`)
      .addField(`Anime name`,`${animeinfo[0].anime_name}`)
      .setDescription(`${animeinfo[0].desc}`)
      .setImage(animeinfo[0].anime_image)
      .setThumbnail(`${animeinfo[0].character_image}`)
      .setFooter(
        `${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      );
      message.channel.send({embeds:[e]});

  });
      
};


module.exports.help = {
	name: "animecharacter",
	description:
		"Searching anime characters",
	usage: "f-animecharacter <query>",
	accessableby: "Member",
	aliases: ["animecharacter"]
};