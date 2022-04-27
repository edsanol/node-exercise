let fs = require('fs')

module.exports = function (randomName) {
    fs.appendFile('name.txt', `${randomName},\n`, function (err) {
        if (err) throw err
        console.log('Saved!')
    })
}