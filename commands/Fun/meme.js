const Discord = require("discord.js");
const request = require("request");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  const args = message.content.substring(1).split(" ")

  if (args[0] == 'meme'){
      if (args[1] != null){
          var url = `https://www.reddit.com/r/${args[1]}/hot/.json?limit=100`
      } else {
          var url = `https://www.reddit.com/r/meme/hot/.json?limit=100`
      }
          https.get(url, (result) => {
              var body = ''
              var chunked = false
              result.on('data', (chunk) => {
                  body += chunk
                  if (chunked == false){
                      chunked = true
                  }
              })
              result.on('end', () => {
                  if (body.length > 1000){
                      var response = JSON.parse(body)
                      var postChildren = []
                      if (message.channel.nsfw == false){
                          var postsNumber = 0
                          for (var number = 0; number < response.data.children.length; number++){
                              postChildren.push(number)
                          }
                          for (var found = false; found == false; postsNumber ++){
                              if (postChildren.length > 0){
                                  var index1 = Math.floor(Math.random() * (postChildren.length))
                                  var index2 = postChildren[index1]
                                  if (response.data.children[index2].data.over_18 == true){
                                      postChildren.splice(index1, 1)
                                  } else {
                                      var index = response.data.children[index2].data
                                      var found = true
                                  }
                              } else {
                                  var found = true
                              }
                          }
                      } else {
                          var index = response.data.children[Math.floor(Math.random() * (response.data.children.length-1)) + 1].data
                      }
                      if (postChildren.length > 0 || message.channel.nsfw){
                          var title = index.title
                          var link = 'https://reddit.com' + index.permalink
                          var subRedditName = index.subreddit_name_prefixed
                          if (index.post_hint !== 'image') {
                              var text = index.selftext
                              if (title.length > 256) {
                                  title = (title.substring(0, 253) + "...")
                              } 
                              if (text.length > 2048) {
                                  text = (text.substring(0, 2045) + "...")
                              } 
                              const textembed = new Discord.MessageEmbed()
                              .setTitle(title)
                              .setColor('#ff0000')
                              .setDescription(text)
                              .setURL(`https://reddit.com/${subRedditName}`)
                              message.channel.send(textembed)
                          }
                          if (index.post_hint == 'image'){
                              var image = index.preview.images[0].source.url.replace('&amp;', '&')
                              if (title.length > 256) {
                                  title = (title.substring(0, 253) + "...")
                              } 
                              const imageembed = new Discord.MessageEmbed()
                              .setTitle(title)
                              .setImage(image)
                              .setColor('#ff0000')
                              .setURL(link)
                              message.channel.send(imageembed)  
                          }
                      } else {
                          message.channel.send('Could not find a meme that was not nsfw')
                      }
                  } else {
                      message.channel.send('Could not find subreddit!')
                  }
              }).on('error', function (e) {
                  console.log('Got an error: ', e)
              })
          })
  }

};

module.exports.help = {
	name: "meme",
	description: "This command is used for generating some cool memes.",
	usage: "b-meme",
	accessableby: "Member",
	aliases: []
};
