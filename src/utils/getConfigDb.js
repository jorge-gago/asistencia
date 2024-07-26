import fs from "node:fs"
import util from "node:util"
import { allTables, allcolumns} from "./InfoDb.js"

console.log("geting info & generate config files")

const setToTable = async ({tablesLst = null, name, fileUrl, extension}) => {
    let tables = tablesLst? tablesLst: await getTables({})
    let obj = await lstToObj({lst: tables})
    let txt = await format({text: name})
    generateFile({fileName: name, data: txt, obj, route:fileUrl, extension})
}

const lstToObj = async ({lst = [], values }) => {
    let obj = {}
    await lst.forEach(x => {
        obj[x] = x
    });
    return obj
}

const format = async ({text}) => {
    let txt
    let str = text.split(" ")
    if ( str.length >= 1) {
        let temp = str.slice(1)
        temp = await temp.map(act => {
            let x = `${act[0].toUpperCase()}${act.slice(1)}`
            console.log(x)
            return x
        })
        str = [str[0], ...temp]
        str = str.join("")
    }
    console.log("------------------------------------------------")
    console.log(str)
    console.log("------------------------------------------------")
    process.exit(1)
    txt = `
    export const ${str} = 
    `
    return txt
}

const getTables = async ({}) => {
    let res = await allTables({})
    return res
}

const setAllows = async ({}) => {

}

const generateFile = async ({ fileName, obj, route=null, extension = ".js", data = []}) => {
    console.log(fileName, data, route, extension)
    let path = route? `${route}/${fileName}${extension}` : `${fileName}${extension}`
    console.log(path)
    await fs.writeFile( path, `${data}${util.inspect(obj)}`,
        (err) => {
            if (err) {
                console.log(err)
            console.log("error en generateFile")
            process.exit(1)
            }
            console.log("--------------------ok-------------------")
            process.exit(1)
        }
    )
}

setToTable({name: "test route", fileUrl:"./src/configs"})