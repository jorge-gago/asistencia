import {BasicQuerys as query} from "../utils/BasicQuerys.js"

export const getLogin = async ({table, values}) => {
    let cols = ["codigo", "password"]
    let vals = values
    let res = await query.getFilterElements({table, cols,vals})
    return res
}

export const setUser = async ({table, code, active = true, password}) => {
    let cols = ["codigo", "password", "active"]
    let vals = [code, password, active]
    let res = await query.updateElement({table, })
}