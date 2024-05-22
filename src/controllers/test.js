import {getElements, createElement, deleteElement, updateElement} from "../modules/test.js"

import {dev} from "../modules/test.js" // for test 

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






const test = async ( req, res) => {
    let info = req.body.campos
    let tab = 'test1'

    let resu = await dev({table:tab})

    console.log(info)

    let resul = {ok: 'ok'} //await dev()
    res.json(resu)
}





export {elements, create, deletes, update, test}