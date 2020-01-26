const db = require('../data/dbConfig');

const knex = require('knex');

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask
}

function getProjects() {
  return db('projects');
}

function addProject(newProj) {
  return db('projects').insert(newProj)
}

function getResources() {
  return db('resources')
}

function addResource(newRes) {
  return db('resources').insert(newRes);
}

function getTasks() {
  return db('tasks')
    .join('projects', function() {
      this
        .on('tasks.project_id', '=', 'projects.id')
    })
    .select('tasks.id', 'tasks.description', 'tasks.notes', (knex.raw`(case when tasks.completed = 1 then 'True' else 'False' end) as completed`), 'projects.name as Project_Name', 'projects.description as Project_Description')

    .orderBy('projects.name')
}

function addTask(newTask) {
  return db('tasks').insert(newTask);
}
