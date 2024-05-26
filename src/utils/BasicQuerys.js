export class BasicQuerys {
    db

    static setDb({db}) {
        this.db = db
        console.log()
    }

    static getDb() {
        return this.db
    }

    static joinsValues (vals = []) {
        let val = vals.join(',') 
        return val
    }

    static async querys ({query, values = [], db = this.db }) {
        // console.log(values)
        // console.log(`query: ${query}`)
        // console.log(`values: ${values}`,  [values])
        return await db.query(query, values)
        
    }

    static async getElements({table}) {
        let query = `SELECT * FROM ?? `
        query = await BasicQuerys.querys({query, values: [table]}) 
        return query[0]
    } 

    static async createElement ({table, cols, vals}) {
        let query = `INSERT INTO ?? (??) VALUES (?) `
        return BasicQuerys.querys({query, values:[ table, ...cols, vals]})
    }

    static async updateElement ({table, pk , key = "id", id, cols = [], vals}) {
        console.log("creando")

        // let columns = `${columns.length > 1? columns.join(" = ?, "): columns} = ?`
        // let query = (`UPDATE ${table} SET ${cols} WHERE ${key} = ${id}`)
        let query = (`UPDATE ?? SET ?? WHERE ?? = ?`)
        // let values = [...vals, id]
        // console.log(query, values)
        // query = await BasicQuerys.querys({query, values: vals})

        console.log(`table:${table}| key:${key}| id:${id}|  col:${cols}| val:${vals}`)

        return {msn:"test"}


        // query = await BasicQuerys.querys({query, values: [table, ...cols, key, ...vals, id]})

        
    }

    static async deleteElement ({table, vals, key = "id"}) {
        // let query = `DELETE FROM ${table} WHERE ${key} = ?`

        let query = `DELETE FROM ?? WHERE ?? = ?`

        query = await BasicQuerys.querys({query, values: [[table, key], vals]})
        return query
    }

       

}

