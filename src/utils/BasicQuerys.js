export class BasicQuerys {
    db

    static setDb({db}) {
        this.db = db
        console.log()
    }

    static getDb() {
        return this.db
    }

    static async querys ({query, values = [], db = this.db }) {
        return await db.execute(query, values)
    }

    static async getElements({tabla}) {
        let query = `SELECT * FROM ${tabla} `
        // console.log('query: ', query)
        query = await BasicQuerys.querys({query}) 
        // console.log('inside class', query)
        // return await BasicQuerys.querys(query) 
        // console.log('call query')   
        return query[0]
    } 

}