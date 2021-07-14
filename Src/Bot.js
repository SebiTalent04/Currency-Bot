const {token} = require('../Token')
const Discord = require('discord.js')
const client = new Discord.Client()
client.commands = new Discord.Collection()
client.cooldowns = new Discord.Collection()

const fs = require('fs')
const glob = require('glob')

const cmdFiles = glob.sync(__dirname + '/Commands/**/*.js')

for (const file of cmdFiles) {
    const command = require(file)
    console.log(`[Command] Loading ${command.name}`)
    client.commands.set(command.name, command)
}

fs.readdir(__dirname + '/Events', (err, files) => {
    if (err) return console.log(err)
    files.forEach((file) => {
        if (!file.endsWith('.js')) return
        const event = require(__dirname + `/Events/${file}`)
        const eventName = file[0].toLocaleLowerCase() + file.slice(1).split('.')[0]
        console.log(`[Event] Loading ${eventName}`)
        client.on(eventName, event.bind(null, client))
        delete require.cache[require.resolve(__dirname + `/Events/${file}`)]
    })
    console.log(`Total commands: ${cmdFiles.length}`)
    console.log(`Total events: ${files.length}`)
})

client.login(token())