import {BasicQuerys as query} from "../utils/BasicQuerys.js"

const tabla = "test1"

const getElements = async () => {
    let resul = await query.getElements({tabla})
    return resul 
}

export {getElements}