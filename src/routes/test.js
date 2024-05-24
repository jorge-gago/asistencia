import express from "express"
import { toTable } from "../middleware/toTable.js"
import {elements, create, deletes, update, test} from "../controllers/test.js"

const router = express.Router()

router.get("/", elements)

router.post("/", create)

router.put("/", update)

router.delete("/", deletes)

router.use("/:sec", toTable, test)

// router.use("/test", test)

export {router as test}   