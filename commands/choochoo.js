module.export = function (msg, args) {
const index = Math.floor(Math.random() * replies.length);
msg.channel.send(replies[index]);
}