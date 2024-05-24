// selecciona la tabla para cada ruta y la envia al modulo generico o devuelve 404 si no existe una tabla en esa ruta

import {routesTables} from "../configs/routeTable.js"  

export const toTable = (req, res, next) => {
    req.table = null
    let tab = req.params.sec
    let select = routesTables[`${tab}`]

    if (!select) {
        console.log("404 route")
        res.status(404).json({msn: "404 route not found"})
        return 0
    }

    req.table = select
    next()
}


