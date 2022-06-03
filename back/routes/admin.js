import {admin} from '../controller/admin'

const express = require("express");
const router = express.Router(); 

router.get("/admin",admin)

module.exports = router;