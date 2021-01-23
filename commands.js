const gif = require("./commands/gifs.js");
const choochoo = require("./commands/choochoo.js");

const commands = {
  choochoo,
  gif,
};

module.exports = async function (msg) {
  if (msg.channel.id == "800808682950098964") {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt[0] === "!") {
      command = command.substring(1);
    }
  }
};
