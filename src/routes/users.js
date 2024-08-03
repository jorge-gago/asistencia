import express from "express"
import { toTable }  from "../middleware/toTable.js"
import { login, createUser, updateUsers } from "../controllers/users.js"
import {hash} from "../middleware/hashPassword.js"

let router = express.Router()

router.post("/:sec", toTable, hash({opt: true}), login)

router.post("/:sec/set", toTable, hash({opt: true}), createUser)

router.put("/:sec", toTable, hash({opt: true}), updateUsers)

export {router as users}