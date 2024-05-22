import {AdvQuerys as query} from "../utils/AdvQuerys.js"

// const table = "test1"

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
    let id = 38
    let vals = ["test update"]
    let columns = ["nombre"]

    let resul = await query.updateElement({ table, id, columns, vals})
}

const deleteElement = async () => {
    let vals = "35"
    let resul = await query.deleteElement({table, vals})
}

const dev = async ({table }) => { 
    console.log('test query run')
    let resul = await query.callTest({table, cols: ['id', 'nombre']}) ?? {body: 'test response default'}
    console.log(resul)
    return resul
}  

export {getElements, createElement, deleteElement, updateElement, dev} 