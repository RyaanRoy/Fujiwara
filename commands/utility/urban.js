const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
const axios = require("axios");
module.exports.run = async (client, message, args) => {
    let query = args.join(" ");
    if (!query)
      return message.channel.send("Please specify a word to search for!");

    query = encodeURIComponent(query);

    const {
      data: { list },
    } = (await axios.get(
      `https://api.urbandictionary.com/v0/define?term=${query}`
    ))
    
    const [answer] = list;

    message.channel.send(
      new MessageEmbed()
        .setTitle(answer.word)
        .setURL(answer.permalink)
        .setColor("RANDOM")
        .addField("DEFINITION", answer.definition)
        .addField("EXAMPLE", answer.example)
        .addField(
          "RATINGS",
          `${answer.thumbs_up} 👍 || ${answer.thumbs_down} 👎`
        )
    );
};

module.exports.help = {
	name: "urban",
	description:
		"Searching urban",
	usage: "b-urban <query>",
	accessableby: "Member",
	aliases: ["ub"]
};