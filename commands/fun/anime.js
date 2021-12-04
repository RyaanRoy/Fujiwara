const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
const malScraper = require('mal-scraper');
module.exports.run = async (client, message, args) => {
  const search = `${args}`;
  if(!search){
  return message.reply('Please add a search query if invalid command will not work.');}
    fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`)
      .then((res) => res.json())
      .then((body) => {
        const title = body.results[0].title;
        const mal_url = body.results[0].url;
        const imgae = body.results[0].image_url;
        const synopsis = body.results[0].synopsis;
        malScraper.getInfoFromName(search)
        .then((data) => {
        const malEmbed = new Discord.MessageEmbed()
          .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
          .setThumbnail(data.picture)
          .setColor('#ffc1cc') //I personally use bubblegum pink!
          .addField('English Title', data.englishTitle, true)
          .addField('Japanese Title', data.japaneseTitle, true)
          .addField('Type', data.type, true)
          .addField('Episodes', data.episodes, true)
          .addField('Rating', data.rating, true)
          .addField('Aired', data.aired, true)
          .addField('Score', data.score, true)
          .addField('Score Stats', data.scoreStats, true)
          .addField('Link', data.url)
          .setImage(imgae)
          .setDescription(synopsis);
         
          
          message.channel.send({ embeds: [malEmbed] });

        })
      })



};

module.exports.help = {
	name: "anime",
	description:
		"Searching anime",
	usage: "f-anime <query>",
	accessableby: "Member",
	aliases: ["animesearch"]
};
