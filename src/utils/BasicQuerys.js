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
        let columns = BasicQuerys.joinsValues(cols)
        // let data = BasicQuerys.joinsValues(vals)
        // let values = vals

        // console.log(vals)

        /*

        let query = `INSERT INTO ${table} (${columns}) VALUES (?) `
        query = await BasicQuerys.querys({query, values: vals}) 
        console.log("create done")
        return query*/

        this.db.execute(`INSERT INTO ?? (??) VALUES (?) `, vals)

    }

    static async updateElement ({table, pk , key = "id", columns = [], vals}) {
        let cols = `${columns.length > 1? columns.join(" = ?, "): columns} = ?`
        let query = (`UPDATE ${table} SET ${cols} WHERE ${key} = ${id}`)
        let values = [...vals, id]
        console.log(query, values)
        query = await BasicQuerys.querys({query, values: vals})
    }

    static async deleteElement ({table, vals, key = "id"}) {
        let query = `DELETE FROM ${table} WHERE ${key} = ?`

        query = await BasicQuerys.querys({query, values: vals})
        return query
    }

       

}

