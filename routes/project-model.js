const db = require('../data/dbConfig');

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
  return db('resources');
    // .join('projects', function() {
    //   this
    //     .on('resources.project_id', '=', 'projects.id')
    // })
    // .select('resources.id', 'resources.name', 'resources.description', 'projects.name');
}

function addResource(newRes) {
  return db('resources').insert(newRes);
}

function getTasks() {
  return db('tasks');
}

function addTask(newTask) {
  return db('tasks').insert(newTask);
}