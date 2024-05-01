import {getElements, createElement, deleteElement} from "../modules/test.js"

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

const deletes = async ( req, res) => {
    console.log("delete element")

    let resul = await deleteElement()
    res.send(resul)
}



export {elements, create, deletes}