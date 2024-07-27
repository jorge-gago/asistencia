import fs from "node:fs"
import util from "node:util"
import {connection}  from "./database.js"
import { BasicQuerys as query } from "./BasicQuerys.js"
import { allTables, allcolumns} from "./InfoDb.js"

console.log("geting info & generate config files")

export const connectionDb = async () => {
    let db = await connection({})
    return db
}

const setToTable = async ({tablesLst = null, name, fileUrl, extension}) => {
    let tables = tablesLst? tablesLst: await getTables({})
    let obj = await lstToObj({lst: tables})
    let txt = await format({text: name})
    let data = await template({name:txt})
    generateFile({fileName: txt, data, obj, route:fileUrl})
}

const setAllows = async ({name, fileUrl, routes = null, calls = ["get", "post", "put", "delete"], mods = null, div = null, value = true, tableDivs = "other", fieldDivs = "rol" }) => {
    let nameTxt = await format({text: name})
    let tables = routes? routes: await getTables({})
    let divs = div
    if (!divs) {
        let db = await connectionDb()
        divs = await query.getElements({table: tableDivs, db})
        divs = await divs.map(x => {
            return x[fieldDivs]
        })
    }
    let allows = await allowsObj({divs, calls, tables, value})
    let data = await template({name: nameTxt})
    console.log(data)
    generateFile({fileName : nameTxt, data, obj : allows, route : fileUrl})

    // console.log(allows)
    //---------------------

    process.exit(1)
}

const allowsObj = async ({divs =[], calls=[], tables=[], mod=[], value}) => {
    let divObj = {}
    let callsObj = {}
    let allows = {}
    divs.map(act => {
      divObj[act] = value  
    })
    calls.map(act => {
        callsObj[act] = divObj
    })
    tables.map(act => {
        allows[act] = callsObj
    })
    return allows
}

const lstToObj = async ({lst = [], values }) => {
    let obj = {}
    await lst.forEach(x => {
        obj[x] = x
    });
    return obj
}

const format = async ({text, element = "_"}) => {
    let str = text.split(`${element}`)
    if ( str.length < 2) {
        return text
    }
    let temp = str.slice(1)
    temp = await temp.map(act => {
        let x = `${act[0].toUpperCase()}${act.slice(1)}`
        // console.log(x)
        return x
    })
    str = [str[0], ...temp]
    str = str.join("")
    return str
   
}

const template = async ({name, insideTxt =`export const ${name} = `}) => {
    let txt
    txt = `${insideTxt}`
    return txt
}

const getTables = async ({}) => {
    let res = await allTables({})
    return res
}

const generateFile = async ({ fileName, obj, route=null, extension = ".js", data = []}) => {
    console.log(`generteFile: file:${fileName}, data:${data}, route:${route}, ext:${extension}`)
    let path = route? `${route}/${fileName}${extension}` : `${fileName}${extension}`
    // console.log(`Path: ${path}`)
    // console.log(data, obj)
    let script = `${data}${util.inspect(obj)}`
    // console.log(script)
    await fs.writeFile( path, script,
        (err) => {
            if (err) {
                console.log(err)
            console.log("error en generateFile")
            process.exit(1)
            }
            console.log(`----------------- Done ${fileName} -------------------`)
            // process.exit(1)
        }
    )
}

setAllows({name: "test_allows", fileUrl:"./src/configs"})
console.log("///////////////////////////////////////")

// setToTable({name: "test_route", fileUrl:"./src/configs"})