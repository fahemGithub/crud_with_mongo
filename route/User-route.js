import express from "express";
import { SignUP } from "../controller/User-controller.js";

const router = express.Router();

router.post('/signup', SignUP);

export default router;