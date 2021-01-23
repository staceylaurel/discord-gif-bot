require("dotenv").config();

const fetch = require("node-fetch");
const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {}

const commandHandler = require("./commands")

client.on("message", commandHandler);
