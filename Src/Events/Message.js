const {prefix} = require('../Util')

module.exports = async (client, message) => {
    //* Daca mesajul nu incepe cu prefixul, daca e trimis din DM sau daca autorul e bot, return
    if (!message.content.startsWith(prefix()) || message.channel.type === 'dm' || message.author.bot) {
        return
    }

    const args = message.content.slice(prefix().length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

    //* Daca comanda nu exista, return
    if (!command) {
        return
    }

    try {
        command.execute(client, message, args)
    } catch (error) {
        console.error(error)
        return message.reply('There was an error trying to execute that command!')
    }
}