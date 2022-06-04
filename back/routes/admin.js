import {admin} from '../controller/admin'
import { requireSignIn } from '../middlewares';

const express = require("express");
const router = express.Router(); 

router.get("/admin",requireSignIn, admin)

module.exports = router;