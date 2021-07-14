# Installing

1. Fork this repo then do `npm i` into your terminal
2. Create a file named `Token.js` in the main folder (not `Src`)
3. Add your token in the `Token.js` like this
```js
const token = () => 
    'ODY0Nj-Your-Actual-Token-Here'

module.exports = {
    token
}
```

And thats it (I think)

# Adding new commands

1. Go to the `Commands` directory inside the `Src` folder
2. Create a new *.js file
3. Build the command like below
```js
module.exports = {
    name: 'command-name',
    aliases: ['array', 'of', 'aliases', 'here']
    
    async execute (client, message, args) {
        message.channel.send('Hello!')
    }
}
```
