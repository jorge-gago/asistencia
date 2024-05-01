import express from "express"
import {elements, create, deletes} from "../controllers/test.js"

const router = express.Router()

router.get("/", elements)

router.post("/", create)

router.delete("/", deletes)

export {router as test}  