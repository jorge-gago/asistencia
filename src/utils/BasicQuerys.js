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
        // console.log(`values: ${values}`,  [values]
        // console.log(db)
        return await db.query(query, values)
        
    }

    static async getElements({table, db}) {
        let result 
        let query = `SELECT * FROM ?? `

        query = await BasicQuerys.querys({query, values: [table], db}) 
        result = query[0]
        
        return result
    } 

    static async getFilterElements ({table, cols, vals, div = "AND", db}){
        let placeHolders = await BasicQuerys.addPlaceHolders({list: cols, div})
        let arrayElements = await BasicQuerys.arrayElements({cols, vals})
        let query = `SELECT * FROM ?? WHERE ${placeHolders} `
        let values = [table, ...arrayElements]
        let result

        result = await BasicQuerys.querys({query, values, db}) 

        return result[0]
    }

    static async createElement ({table, cols, vals, db}) {
        let query = `INSERT INTO ?? (??) VALUES (?) `
        return BasicQuerys.querys({query, values:[ table, ...cols, vals], db})
    }
 
    static async updateElement ({table, pk , key = "id", id, cols = [], vals=[], db}) {
        let placeHolders = await BasicQuerys.addPlaceHolders({list: cols})
        let arrayElements = await BasicQuerys.arrayElements({cols, vals})
        let values = [table, ...arrayElements, key, id]
        let query = (`UPDATE ?? SET ${placeHolders} WHERE ?? = ?`)
        
        query = await BasicQuerys.querys({query, values, db})
        
        return {msn:"test"}    //<------------------------------------------------------ 
    }

    static async deleteElement ({table, vals, key, db}) {
        let query = `DELETE FROM ?? WHERE ?? = ?`
        let values = [table, ...key, ...vals]
        console.log(values)

        query = await BasicQuerys.querys({query, values, db})
        return query
    }

    static async addPlaceHolders ({list = [], div = ","}) {
        // let placeHolder = `?? = ?${div} `
        let placeHolder = `?? = ?`
        let placeHolders = []

        list.forEach(element => {
            // placeHolders += placeHolder
            placeHolders.push(placeHolder)
        });
        // placeHolders = placeHolders.slice(0,-2)
        placeHolders = placeHolders.join(div)

        return placeHolders
    }

    static async arrayElements ({cols = [], vals = [] }) {
        let temp = []

        cols.map((x, i) => {
            temp.push(cols[i])
            temp.push(vals[i])
        })

        return temp
    }

       
}

