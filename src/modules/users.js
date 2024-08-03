import {BasicQuerys as query} from "../utils/BasicQuerys.js"

export const getLogin = async ({table, values}) => {
    let cols = ["codigo", "password"]
    let vals = values
    let res = await query.getFilterElements({table, cols,vals})
    return res
}

export const updateUser = async ({table,  active = true, password = false, id}) => {
    let isActive = active? 1 : 0
    let cols = password? ["password", "acceso"] : [ "acceso"]
    let vals = password? [password, isActive] : [isActive]
    let res = await query.updateElement({table, id, cols, vals})
    return res
}

export const setUser = async ({table, password, active = true, empleado, rol}) => {
    let isActive = active? 1 : 0
    let code = "abc123" //<---------------------------call generate user
    let pass = password
    let cols = [ "codigo", "password", "acceso", "empleado", "rol"]
    let vals = [code, pass, isActive, empleado, rol]
    console.log(cols, vals)
    let res = await query.createElement({table, cols, vals})
    return res
}