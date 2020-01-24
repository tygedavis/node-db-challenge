const db = require('../data/dbConfig');

module.exports = {
  getProjects,
  addProject
}

function getProjects() {
  return db('projects');
}

function addProject(newProj) {
  return db('projects').insert(newProj)
}