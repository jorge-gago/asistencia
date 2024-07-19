import express from "express"
import {test} from "./test.js"
import {users} from "./users.js"

const router = express.Router()

router.use("/test", test)

router.use("/u", users)

router.get("/", (req, res) => {
    res.send("router")
})

export {router}