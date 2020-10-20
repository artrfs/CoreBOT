const {prefix} = require('../../config.json');
const Discord = require('discord.js');

module.exports = async (bot, message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content == `<${bot.user.id}>` || message.content == `<@!${bot.user.id}>`) {
        return message.channel.send(`:man_raising_hand: | Opa, me chamou?\nSe sim eu sou o Core, meu prefixo nesse servidor é \`c!\`\nPara qualquer dúvida sobre mim, entre neste servidor: https://discord.gg/5vcRmQK \nAté mais!`)
    };

    if(message.content === "Oi Core") {
        message.channel.send(`:grin: | Oi, tudo bom?`)
    };

    const args = message.content.trim().slice(prefix.length).split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let command;

    if(bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    command.run(bot, message, args);
}