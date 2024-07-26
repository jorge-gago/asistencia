import express from "express"
import { toTable}  from "../middleware/toTable.js"
import {login, createUser, updateUsers} from "../controllers/users.js"

let router = express.Router()

router.post("/:sec", toTable, login)

router.post("/:sec/set", toTable, createUser)

router.put("/:sec", toTable, updateUsers)

export {router as users}