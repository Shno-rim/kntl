const fs = require('fs-extra')
const { color } = require('./color')

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    uncache,
}
