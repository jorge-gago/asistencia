export class BasicQuerys {
    db

    static setDb({db}) {
        this.db = db
        console.log()
    }

    static getDb() {
        return this.db
    }

    async querys ({query, values = [], db = this.db }) {
        await db.execute(query, values)
    }

    static async getElements({tabla}) {
        let query = `SELECT * FROM ${tabla} `
        console.log(query)
        query = await BasicQuerys.querys(query) 
        console.log(query)
        // return await BasicQuerys.querys(query) 
        console.log('call query')   
        return 'call'
    }


}