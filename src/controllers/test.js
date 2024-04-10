import {getElements} from "../modules/test.js"

const elements = async (req, res) => {
    console.log("en controller ")
    let resul = await getElements()
    res.send(resul)
} 

export {elements}