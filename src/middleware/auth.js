import {routesTables} from "../configs/authToPass.js"

export const auth = ({allow = null}) => {
    return (req, res, next) => {
        let mtd = req.method.toLowerCase()
        let table = req.query.table.toLowerCase()
        let rol = req.query.rol//.toLowerCase()
        let filter = allow ?? routesTables[table][mtd]

        if(!filter[rol]) {
            console.log("error")
            res.status(500).send({error: "error", msn:"no pass"})
            return 0
        }

        next()
    }
}