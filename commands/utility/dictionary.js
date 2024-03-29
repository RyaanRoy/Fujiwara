const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");

const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
    let query = args.join(" ");
    if (!query)
      return message.channel.send("Please specify a word to search for!");

    try {
const res = await superagent.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    )
    
    const answer = JSON.parse(res);
    const meanings = answer[0]["meanings"];
   const partOfSpeech0 = meanings[0]["partOfSpeech"];
	const definition0 = meanings[0]["definitions"][0]["definition"];
    const example0 = meanings[0]["definitions"][0]["example"];
    message.channel.send({embeds:[
      new MessageEmbed()
        .setTitle(`Dictionary results for ${query}`)
        .setColor("#cc338b")
        .setDescription(definition0)
        .addField("EXAMPLE", example0, true)
        .addField("PART OF SPEECH", partOfSpeech0, true)

    ]}
    );
        } catch (err) {
            console.log(err);
          return message.channel.send(`Oh no, an error occurred. That word probably doesn't exist in the dictionary!`);
        }
};

module.exports.help = {
	name: "dictionary",
	description:
		"Searching oxford dictionary",
	usage: "f-dictionary <query>",
	accessableby: "Member",
	aliases: ["dic"]
};