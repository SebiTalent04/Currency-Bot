const moment = require('moment')

const log_channel = client => 
    client.channels.cache.get('864623589100486676')

const time_utc = () => 
    moment.utc().format('MMM Do YY, h:mm:ss A')

const time_utc_full = () => 
    moment().utc().format('dddd, D MMMM YYYY, h:mm:ss A')

const prefix = () =>
    '*'

module.exports = {
    log_channel,
    time_utc,
    time_utc_full,
    prefix
}