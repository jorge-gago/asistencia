import fs from "node:fs"
import util from "node:util"
import { BasicQuerys as query } from "./BasicQuerys.js"
import { allTables} from "./InfoDb.js"

export const setToTable = async ({tablesLst = null, name, fileUrl, extension, db}) => {
    let tables = tablesLst? tablesLst: await getTables({db})
    let obj = await lstToObj({lst: tables})
    let txt = await format({text: name})
    let data = await template({name:txt})
    generateFile({fileName: txt, data, obj, route:fileUrl})
}

export const setAllows = async ({name, fileUrl, routes = null, calls = ["get", "post", "put", "delete"], mods = null, div = null, value = true, tableDivs = "other", fieldDivs = "rol" , db}) => {
    let nameTxt = await format({text: name})
    let tables = routes? routes: await getTables({db})
    let divs = div
    if (!divs) {
        divs = await query.getElements({table: tableDivs, db})
        divs = divs.map(x => {
            return x[fieldDivs]
        })
    }
    let allows = await multiObj({divs, calls, tables, value})
    let data = await template({name: nameTxt})
    generateFile({fileName : nameTxt, data, obj : allows, route : fileUrl})
}


export const multiObj = async ({divs =[], calls=[], tables=[], mod=[], value}) => {
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

export const lstToObj = async ({lst = [], values }) => {
    let obj = {}
    await lst.forEach(x => {
        obj[x] = x
    });
    return obj
}

export const format = async ({text, element = "_"}) => {
    let str = text.split(`${element}`)
    if ( str.length < 2) {
        return text
    }
    let temp = str.slice(1)
    temp = await temp.map(act => {
        let x = `${act[0].toUpperCase()}${act.slice(1)}`
        return x
    })
    str = [str[0], ...temp]
    str = str.join("")
    return str
   
}

export const template = async ({name, insideTxt =`export const ${name} = `}) => {
    let txt
    txt = `${insideTxt}`
    return txt
}

export const getTables = async ({db}) => {
    let res = await allTables({db})
    return res
}

export const generateFile = async ({ fileName, obj, route=null, extension = ".js", data}) => {
    try {
        let path = route? `${route}/${fileName}${extension}` : `${fileName}${extension}`
        let temp = util.inspect(obj)
        let script = `${data}${temp}`
        await fs.writeFileSync( path, script)     
        console.log(`----------------- Done ${fileName} -------------------`)
    }
    catch (err) {
        console.log(err)
        console.log("error en generateFile")
    }
    
}