import express from "express"
import { connection as db}  from "./src/utils/database.js"

const PORT = process.env.PORT ?? 3000
const app = express()
//
let data = async () =>{
    let res = await db.execute("SELECT * FROM test1")
    return res
}
//
app.get('/', async (req, res) => {
    console.log(`root get `)
    let resul = await data()
    console.log(resul)
    res.status(200).send(resul)
})

app.listen(PORT, () => {
    console.log(`server listen ${PORT}`)
})

