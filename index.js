import express from "express"
import { connection as db}  from "./src/utils/database.js"
import {router} from "./src/routes/router.js"
import {BasicQuerys as query} from "./src/utils/BasicQuerys.js" 

const PORT = process.env.PORT ?? 3000
const app = express()

//set database connection 
query.setDb({db})

app.use(express.json())

//temps 
let data = async () =>{
    // let res = await db.execute("SELECT * FROM test1")
    // query.setDb({db})
    console.log(query.getDb()?true:false)
    let res = await query.getElements({tabla: "test1"})
    return res  
}

app.use("/api", router)


//cambiar para respuestas rutas default
app.get('/', async (req, res) => {
    console.log(`root get `)
    let resul = await data()
    console.log(resul)
    res.status(200).send(resul)
}) 

app.listen(PORT, () => {
    console.log(`server listen ${PORT}`)
})

