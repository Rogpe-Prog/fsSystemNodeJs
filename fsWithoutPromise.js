/* Async using fs module core nodejs */

const fs = require('fs')

fs.readFile('fsFile.js', (err, contents) => {
    if (err) {
        console.log('Error on reading file ', err)
    } else {
        const doc = contents.toString()
        fs.writeFile('tsst.js', doc, (err) => {
            if(err){
                console.log('Error on writing file', err)
            } else {
                console.log('Copied file!!!')
            }
        })
    }
})