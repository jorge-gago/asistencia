import {allows} from "../configs/allows.js"

export const auth = ({allow = null, mod = null}) => {
    return (req, res, next) => {
        let mtd = req.method.toLowerCase()
        let table = req.query.table.toLowerCase()
        let rol = req.query.rol.toLowerCase() ?? false
        let filter = filters({mod, allow, table, method: mtd})

        let ok = allowToPass({rol, lst: filter}) 

        if(!ok) {
            res.status(500).send({error: "error", msn:"no pass"})
            return 0
        }
        next()
    }
}

const filters = ({mod, allow, table, method}) => {
    if (allow) {
        return allow
    }
    if (mod) {
        return isMod({mod, table, method})
    }
    if (allows[table][method]) {
        return allows[table][method]
    }
    return false
}

const isMod = ({mod, vals}) => {
    if (allows[table][mod][method]) {
        return allows[table][mod][method]
    }
    return false
}

const allowToPass = ({rol, lst, test = true}) => {// remove test 
    if (lst[rol] || test){
        return true
    }
    return false
}