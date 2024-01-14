const express = require("express");
const users = require("../models/users");

const router = express.Router();

//CREATE user
router.post("/", async (req, res) => {
	try{
		await users.createUser(req.body.username, req.body.password. req.body.email);
		res.sendStatus(200);
	}catch(error){
		if(error === "User already exists"){
			res.status(400).json({
				error: "Username or email already exists."
			});
		}else{
			res.status(500).json({
				error: "Internal server error."
			})
		}
	}
});

//DELETE user
router.delete("/:username", async (req, res) => {
	try{
		//TODO: Add jwt verification to ensure users can't be deleted without proper access
		await users.deleteUser(req.params.username);
		res.sendStatus(200);
	}catch(error){
		res.status(500).json({
			error: "Internal server error"
		});
	}
});

module.exports = router;
