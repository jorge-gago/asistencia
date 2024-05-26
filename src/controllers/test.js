import {getElements, createElement, deleteElement, updateElement} from "../modules/test.js"

import {dev} from "../modules/test.js" // for test 

// const options = {test: "test1"}

const elements = async (req, res) => {
    // console.log("en controller ")
    let table = req.table
    let resul = await getElements({table})
    res.send(resul)
} 

const filterElements = async (req, res) => {
    let table = req.table
    let cols = req.body.fields 
    let vals = req.body.data
    let resul = await getElements({table, cols, vals})
    res.send(resul)
}

const create = async ( req, res) => {
    console.log("creando")
    let table = req.table
    let cols = req.body.fields 
    let vals = req.body.data

    console.log(cols)
    console.log(`table: ${table} / cols: ${cols} /  vals: ${vals}`)

    // let resul = {msn: 'test'}
    let resul = await createElement({table, cols, vals})
    res.send(resul)
}

const update = async ( req, res) => {
    console.log("update")
    let table = req.table
    let cols = req.body.fields 
    let vals = req.body.data
    let resul = await updateElement({table, cols, vals})
    res.send(resul)
}

const deletes = async ( req, res) => { //<---------- falta ajustar delete parametros
    console.log("delete element")
    let table = req.table
    let cols = req.body.fields ?? null
    let vals = req.body.data
    let resul = await deleteElement()
    res.send(resul)
}


const test = async ( req, res) => {
    let resu = await dev({table: req.table})

    res.json(resu)
}





export {elements, filterElements, create, deletes, update, test}