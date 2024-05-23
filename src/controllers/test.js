import {getElements, createElement, deleteElement, updateElement} from "../modules/test.js"

import {dev} from "../modules/test.js" // for test 

const options = {test: "test1"}

const elements = async (req, res) => {
    // console.log("en controller ")
    let resul = await getElements()
    res.send(resul)
} 

const create = async ( req, res) => {
    console.log("creando")
    let resul = await createElement()
    res.send(resul)
}

const update = async ( req, res) => {
    console.log("update")
    let resul = await updateElement()
    res.send(resul)
}

const deletes = async ( req, res) => {
    console.log("delete element")

    let resul = await deleteElement()
    res.send(resul)
}


const getTable = async (req) => {
    let info = req.params.sec
    console.log(info)
    let sec = options[`${info}`]
    console.log('sec: ', sec)

    return sec
}

const noTable = async (res) => {
    console.log("404 route")
    return res.status(404).json({msn: "404"})
}


const test = async ( req, res) => {
    // let info = req.params.sec

    // console.log(info)

    // let sec = options[`${info}`] 
    let sec = await getTable(req) ?? noTable(res)  //<----------------- getTable & noTable to middleware for validation route


    // if(!sec) { // for route dont exist
    //     console.log("404 route")
    //     return res.status(404).json({msn: "404"})
    // }

    // console.log('sec: ', sec)

    // let tab = 'test1'

    let resu = await dev({table:sec})

   

    let resul = {ok: 'ok'} //await dev() placeholder
    res.json(resu)
}





export {elements, create, deletes, update, test}