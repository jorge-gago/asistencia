import {getElements, createElement, deleteElement, updateElement} from "../modules/test.js"

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



export {elements, create, deletes, update}