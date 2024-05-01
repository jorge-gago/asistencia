import {AdvQuerys as query} from "../utils/AdvQuerys.js"

const table = "test1"

const getElements = async () => {
    let resul = await query.getElements({table})
    return resul 
}

const createElement = async () => {
    let cols = ["nombre"]
    let vals = ["test_t", "other"]
    let resul = await query.createElement({table, cols, vals})
    return resul
}

const updateElement = async () => {
    let resul = await query.updateElement({table, vals})
}

const deleteElement = async () => {
    let vals = "35"
    let resul = await query.deleteElement({table, vals})
}

export {getElements, createElement, deleteElement} 