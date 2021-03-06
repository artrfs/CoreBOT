const Discord = require('discord.js');

module.exports = {
    name: 'anuncio',
    category: 'moderation',
    description: 'Make ad in some chat',
    run: async (bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR"))return message.channel.send("<a:no:766016144720396389> | Você não pode realizar este comando, você não tem permissão")

  message.channel.send("Onde você quer enviar a mensagem?").then(msg1 => {
    let canal = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
      .on('collect', c => {
        let channel = c.mentions.channels.first()
          if(!channel) {

            message.channel.send("Mencione um canal!")

          } else {

            message.channel.send("Qual o titulo você quer para este anúncio?").then(msg2 => {
              let titulo = message.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
                .on('collect', t => {
                  let title = t.content


            message.channel.send("Qual a descrição deste anúncio?").then(msg3 => {
              let descrição = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', d => {
                  let desc = d.content

                  let anunciar = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setTitle(title)
                    .setDescription(desc)
                    .setTimestamp()

                bot.channels.cache.get(channel.id).send(anunciar)
 
                  message.channel.send("<a:yes:766016055855284274> | Anúncio enviado ao canal <#"+channel.id+"> com sucesso!")

             })
            })
           })
          })
         }
       })
      })

}
    }