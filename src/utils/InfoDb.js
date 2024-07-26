
import {connection}  from "./database.js"
import {BasicQuerys} from "./BasicQuerys.js" 

export const connectionDb = async () => {
    let db = await connection({})
    return db
}

export const allTables = async ({db = null}) => {
    let conn = db? db: await connectionDb()
    let tables = []
    let query ="SHOW TABLES "
    let res = await BasicQuerys.querys({query, db: conn})
    res[0].forEach(element => {
        tables.push(Object.values(element)[0]) 
    });
    return tables
}

export const allcolumns = async ({db = null, table = "usuarios"}) => {
    let conn = db? db: await connectionDb()
    let query =`SHOW COLUMNS FROM ${table}`
    let res = await BasicQuerys.querys({query, db: conn})
    return res[0]
}


