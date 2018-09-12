const fs = require('fs')

const readStream = fs.createReadStream('colors.json', 'utf8')
readStream.on('data', chunk => console.log('line: ', chunk))
readStream.on('end', () => console.log('### DONE ###'))
