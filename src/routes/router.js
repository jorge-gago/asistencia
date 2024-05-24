import express from "express"
import {test} from "./test.js"

const router = express.Router()

router.use("/test", test)

router.get("/", (req, res) => {
    res.send("router")
})

export {router}