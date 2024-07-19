import express from "express"
import { toTable}  from "../middleware/toTable.js"
import {login, setUser, updateUser} from "../controllers/users.js"

let router = express.Router()

router.post("/:sec", toTable, login)

router.post("/:sec/set", toTable, setUser)

router.put("/:sec", toTable, updateUser)

export {router as users}