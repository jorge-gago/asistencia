import express from "express"
import { toTable } from "../middleware/toTable.js"
import {elements, create, deletes, update, test} from "../controllers/test.js"

const router = express.Router()

router.get("/:sec", toTable, elements)

router.post("/:sec", toTable, create)

router.put("/:sec", toTable, update)

router.delete("/:sec", toTable, deletes)

router.use("/t/:sec", toTable, test)

// router.use("/test", test)

export {router as test}   