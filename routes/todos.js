var express = require("express");
const { uuid } = require("uuidv4");
const { db } = require("../mongo");
var router = express.Router();

// GET ALL listeings  
router.get("/all", async (req,res,next) => {
    try {
        const todos = await db().collection("todos")
        .find({})
        .toArray();

        res.json({
            success: true,
            todos: todos,
        })
    } catch (error) {
        
    }

})

module.exports = router;