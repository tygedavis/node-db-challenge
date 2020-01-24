const express = require('express');
const knex = require('knex');

const Proj = require('./project-model');

const router = express.Router();

//GET & POST for Projects
router.get('/', (req, res) => {
  Proj.getProjects()
    .then(list => {
      res.status(200).json(list)
    })
    .catch(err => {
      res.status(500).json({ error: "error with the database" });
    });
});

router.post('/', (req, res) => {
  Proj.addProject(req.body)
    .then(newProj => {
      res.status(201).json(newProj)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "error with the database" });
    });
})


module.exports = router;