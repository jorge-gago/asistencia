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
 

    static async updateElement ({table, pk , key = "id", id, cols = [], vals=[]}) {
        console.log("creando")
        let placeHolder = `?? = ?, `

        //<--------------
        let columns = ``
        cols.forEach(element => {
            columns += placeHolder
        });
        columns = columns.slice(0,-2)
        //----------------------

        //<----------------------
        let temp = []
        cols.map((x, i) => {
            temp.push(cols[i])
            temp.push(vals[i])
        })
        console.log('temp ', temp)

        //----------------------

        // let values = [table, ...cols, ...vals, key, id]
        let values = [table, ...temp, key, id]
        let query = (`UPDATE ?? SET ${columns} WHERE ?? = ?`)
        
        console.log(`query: ${query}, values: ${values}`)
        query = await BasicQuerys.querys({query, values})

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

