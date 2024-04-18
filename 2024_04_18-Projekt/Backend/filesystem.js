import fs from "fs"
import url from "url"
import path from "path"

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const readFileJson=(path)=> {
    return new Promise((resolve, reject)=> {
        fs.readFile(path, (err, data)=> {
            if(err) return reject(err);
            const jsonString = data.toString()
            const jsObj = JSON.parse(jsonString)
            resolve(jsObj)
        })
    })
}

const readFile = ()=> {
    return readFileJson(__dirname + "/data/data.json")
}

const writeFileJson = (path, data)=>{
    return new Promise ((resolve, reject)=> { 
        const dataString = JSON.stringify(data, null,2)
        fs.writeFile(path,dataString, (err)=> {
            if(err) return reject(err);
            resolve(data);
        })
    })
}

const writeFile = (array)=> {
    return writeFileJson(__dirname + "/data/data.json", array)
}

export {readFile, writeFile}