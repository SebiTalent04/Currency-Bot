const moment = require('moment')

const log_channel = client => 
    client.channels.cache.get('864623589100486676')

const time_utc_full = () => 
    moment().utc().format('dddd, D MMMM YYYY, h:mm:ss A')

const token = () =>
    'ODY0NjE4NTI4NzEyMDMyMjk2.YO4EwQ.hUp2gZWawPlrDbBk7brhQEVMGyU'

const prefix = () =>
    '*'

module.exports = {
    log_channel,
    time_utc_full,
    token,
    prefix
}