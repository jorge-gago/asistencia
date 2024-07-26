// selecciona la tabla para cada ruta y la envia al modulo generico o devuelve 404 si no existe una tabla en esa ruta

import {routesTables} from "../configs/routeTable.js"  

export const toTable = (req, res, next) => {
    req.query.table = null
    
    let tab = req.params.sec
    let select = routesTables[`${tab}`]

    //console.log("url ",tab,"table ", select)//<-----------------------------------------------

    if (!select) {
        console.log("404 route")
        res.status(404).json({msn: "404 route not found"})
        return 0
    }
    req.query.table = select
    next()
}


