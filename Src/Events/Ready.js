const {time_utc_full, log_channel} = require('../Util')
const Discord = require('discord.js')

module.exports = async (client) => {
    client.date = time_utc_full()

    console.log(`[${client.date}] ${client.user.tag} Started`)
    client.user.setActivity(`your money`, { type: 'WATCHING' })

    const ReadyEmbed = new Discord.MessageEmbed()
    .setColor('#D1FF00')
    .addField(`Started ${client.date}`,[
        '\u200b',
        `**❯ Channels:** ${client.channels.cache.size}`,
        `**❯ Members:** ${client.users.cache.size}`
    ])
    log_channel(client).send(ReadyEmbed)
}