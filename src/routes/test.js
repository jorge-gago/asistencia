import express from "express"
import {elements, create, deletes, update} from "../controllers/test.js"

const router = express.Router()

router.get("/", elements)

router.post("/", create)

router.put("/", update)

router.delete("/", deletes)

export {router as test}  