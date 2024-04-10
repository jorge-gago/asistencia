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
        query = await BasicQuerys.querys({query}) 
        return query[0]
    } 

}