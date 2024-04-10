import express from "express"
import {elements} from "../controllers/test.js"

const router = express.Router()

router.get("/", elements)

export {router as test} 