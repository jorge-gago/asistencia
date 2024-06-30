import {AdvQuerys as query} from "../utils/AdvQuerys.js"

// const table = "test1"

const getElements = async ({table}) => {
    let result = await query.getElements({table})
    return result 
}

const getFilterElements = async ({table, cols = null, vals = null}) => {
    let result = await query.getFilterElements({table, cols, vals})
    return result 
}

const createElement = async ({table, cols, vals}) => {
    let result = await query.createElement({table, cols, vals})
    return result
}

const updateElement = async ({table, cols, vals, id}) => {
    let result = await query.updateElement({ table, id, cols, vals})
    return result
}

const deleteElement = async ({table, cols, vals}) => {
    let result = await query.deleteElement({table, vals})
}

const dev = async ({table }) => { 
    console.log('test query run')
    let result = await query.callTest({table, cols: ['id', 'nombre']}) ?? {body: 'test response default'}
    console.log(result)
    return result
}  

export {getElements, getFilterElements, createElement, deleteElement, updateElement, dev} 