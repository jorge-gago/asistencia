import {BasicQuerys as query} from "../utils/BasicQuerys.js"

export const getLogin = async ({table, values}) => {
    let cols = ["codigo", "password"]
    let vals = values
    let res = await query.getFilterElements({table, cols,vals})
    return res
}

export const updateUser = async ({table,  active = true, password, id}) => {
    let isActive = active? 1 : 0
    let cols = ["password", "acceso"]
    let vals = [password, isActive]
    let res = await query.updateElement({table, id, cols, vals})
    return res
}

export const setUser = async ({table, password, active = true}) => {
    let isActive = active? 1 : 0
    let code = "abc123" //<---------------------------
    let pass = password//<----------------------------
    let cols = [ "codigo", "password", "acceso"]
    let vals = [code, pass, isActive]
    let res = query.createElement({table, cols, vals})
}