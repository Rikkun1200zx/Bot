let request = require("request-promise-native");
let cheerio = require("cheerio");
let req = require("request");
module.exports = {
    name: "fox",
    aliases: [],
    category: "images",
    description: "random fox image",
    usage: "",
  async run(client, message, args) {
    req("https://randomfox.ca/floof/", function(error, response, body) {
      if (error) {
        return message.channel.send({
          embed: {
            color: 15158332,
            title: "__***N I G G E R***__ something went wrong"
          }
        });
      }
      message.channel.send({
        embed: {
          color: 3447003,
          image: {
            url: JSON.parse(body).image
          },
          author: {
            name: message.client.user.username,
            icon_url: message.client.user.avatarURL({
              format: "png",
              dynamic: true,
              size: 1024 
            })
          }
        }
      });
    });
  }
};