const express = require('express')
const router = express.Router()
const urlSchema = require('../model/short')
const shortid = require('shortid');
const dns = require('dns');
const { log } = require('console');

router.post("/:id", async (req, res) => {
    const inputData = await urlSchema.create({ "original_url": req.params.id, "short_url": shortid.generate() })
    res.json(inputData)
})


router.get("/:id", async (req, res) => {
    const urlFound = await urlSchema.find({ "short_url": urlId })
    res.redirect(urlFound)
})


module.exports = router;