/* using Promise to read and write files with fs module, core nodejs */

const fs = require('fs')

const readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    })
}

const writeFile = (file, data) => {
    return new Promise((resolve, reject)=> {
        fs.writeFile(file, data, (err)=> {
            if(err){
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

readFile('A5-7-fsFile.js')
    .then(data => writeFile('copyFile.js', data))