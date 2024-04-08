import express from "express"

const PORT = process.env.PORT ?? 3000
const app = express()

app.get('/', (req, res) => {
    console.log(`root get `)
    res.status(200).send('ok')
})

app.listen(PORT, () => {
    console.log(`server listen ${PORT}`)
})