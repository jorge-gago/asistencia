import {BasicQuerys} from "./BasicQuerys.js"

export class AdvQuerys extends BasicQuerys {

    static async callTest ({table, cols = null}) {
        console.log('in adv test')

        if (!cols) {
            return BasicQuerys.getElements({table})
        }

        let query = `SELECT ?? FROM ??`

        // let vals = [cols.join(','), table] 
        let res = BasicQuerys.querys({query, values: [cols, table]})

        return res
    }
}