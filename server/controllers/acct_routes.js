const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("../models");
const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');
const path = require("path");
const moment = require('moment');
const acctManager = require("../password_auth/acctManager")

let router =express.Router();

router.post("/create", (req, res)=>{
  //hash the password
  acctManager.createAcct(req.body, (results)=>{
    res.json(results)
  })
})

router.post("", (req, res)=>{
  //find user in db
  db.User.findOne({
    name:req.body.name
  }).then(results =>{
    //compare the given password to stored hash
    acctManager.comparePassword(req, res, results.dataValues)
  }).catch((data)=>{
    res.json({
      msg:"password does not match",
      success: false
    })
  })
})

router.post("/check", (req, res)=>{
  //body needs uuid and name
  acctManager.checkUuid(req.body, res, (token)=>{
      let resObj = {
        name:req.body.name,
        id: req.body.id,
        token:token, 
        success:true,
        msg:"Vaild Session"
      }
      res.json(resObj)
  } )
})

module.exports = router;


