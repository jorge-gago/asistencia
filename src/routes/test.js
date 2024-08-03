import express from "express"
import { toTable } from "../middleware/toTable.js"
import { auth} from "../middleware/auth.js"
import {elements, filter, create, deletes, update, test} from "../controllers/test.js"

const router = express.Router()

router.get("/:sec", toTable, auth({}), elements)

router.post("/:sec/get", toTable, auth({}), filter)

router.post("/:sec", toTable, auth({}), create)

router.put("/:sec", toTable, auth({}), update)

router.delete("/:sec", toTable, auth({}), deletes)

router.use("/t/:sec", toTable, auth({}), test)

// console.log(`${auth}`)

export {router as test}