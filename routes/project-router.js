const express = require('express');
const knex = require('knex');

const Proj = require('./project-model');

const router = express.Router();

//GET & POST for Projects

/**
 *@api {get} / Request All Projects
 *@apiName GetProjects
 *@apiGroup Projects
 *
 *@apiSuccess {String} id The projects unique id.
 *@apiSuccess {String} name The name of the project.
 *@apiSuccess {String} description A description of the project.
 *@apiSuccess {Boolean} completed A 1 or 0 || 1 = Is Completed, 0 = Has Not Been Completed.
 *@apiSuccessExample {json} Success-Response:
 *[
 *  {
 *      "id": 1,
 *      "name": "Sprint Challenge",
 *      "description": "Finish the sprint challenge within 3 hours to get a good score.",
 *      "completed": 0
 *  },
 *  {
 *      "id": 2,
 *      "name": "Make Breakfast",
 *      "description": "Starting the day with breakfast is awesome",
 *      "completed": 1
 *  },
 *  {
 *      "id": 3,
 *      "name": "New Project",
 *      "description": "",
 *      "completed": 0
 *  }
 *]
*/
router.get('/', (req, res) => {
  Proj.getProjects()
    .then(list => {
      res.status(200).json(list)
    })
    .catch(err => {
      res.status(500).json({ error: "error with the database" });
    });
});


/**
*@api {post} / Post Request to Projects
*@apiName AddProject
*@apiGroup Projects
*
*@apiSuccess {Boolean} id The id of the new object that was created
*@apiSuccessExample {json} Success-Response Example:
*[
*    3
*]
 */
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

//GET & POST to Resources

/**
 *@api {get} /res Request All Resources
 *@apiName GetResources
 *@apiGroup Resources
 *
 *@apiSuccess {String} id The resources unique id.
 *@apiSuccess {String} name The name of the resource.
 *@apiSuccess {String} description A description of the resource.
 *@apiSuccess {Boolean} project_id The id of the project that the resource belongs to.
 *
 *@apiSuccessExample {json} Response-Success Example:
 * [
 *  {
 *       "id": 1,
 *       "name": "Computer",
 *       "description": "",
 *       "project_id": 1
 *   },
 *   {
 *       "id": 2,
 *       "name": "Google",
 *       "description": "Data giant that knows everything about anything",
 *       "project_id": 1
 *   },
 *   {
 *       "id": 3,
 *       "name": "Oven",
 *       "description": "Don't touch it when hot",
 *       "project_id": 2
 *   },
 *   {
 *       "id": 4,
 *       "name": "Pan",
 *       "description": "Will cook food when hot",
 *       "project_id": 2
 *   }
 * ]
 */
router.get('/res', (req, res) => {
  Proj.getResources()
    .then(list => {
      res.status(200).json(list)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "error with the database" });
    });
});

/**
*@api {post} /res Post Request to Resources
*@apiName AddResource
*@apiGroup Resources
*
*@apiSuccess {Boolean} id The id of the new object that was created
*@apiSuccessExample {json} Success-Response Example:
*[
*    6
*]
 */
router.post('/res', (req, res) => {
  Proj.addResource(req.body)
    .then(newRes => {
      res.status(201).json(newRes)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "error with the database" });
    });
});

//GET & POST for Tasks

/**
 *@api {get} /res Request All Tasks
 *@apiName GetTasks
 *@apiGroup Tasks
 *@apiDescription Important Note: The response is ordered by Project_Name - NOT by id. 
 *
 *@apiSuccess {String} id The tasks unique id.
 *@apiSuccess {String} description The description of the task.
 *@apiSuccess {String} notes Notes explaining what needs to be done (or how).
 *@apiSuccess {String} completed Returns 'true' or 'false'
 *@apiSuccess {String} Project_Name The name of the project that the task belongs to.
 *@apiSuccess {String} Project_Description The description of the project that the task belongs to.
 *
 *@apiSuccessExample {json} Response-Success Example:
* [
*    {
*        "id": 2,
*        "description": "Cook the food",
*        "notes": "",
*        "completed": "True",
*        "Project_Name": "Make Breakfast",
*        "Project_Description": "Starting the day with breakfast is awesome"
*    },
*    {
*        "id": 3,
*        "description": "Put away the dishes",
*        "notes": "It may be smart to clean them before putting them away",
*        "completed": "False",
*        "Project_Name": "Make Breakfast",
*        "Project_Description": "Starting the day with breakfast is awesome"
*    },
*    {
*        "id": 4,
*        "description": "Clean up mess",
*        "notes": "That includes your face",
*        "completed": "False",
*        "Project_Name": "Make Breakfast",
*        "Project_Description": "Starting the day with breakfast is awesome"
*    },
*    {
*        "id": 1,
*        "description": "Use Pomodoro for breaks",
*        "notes": "It's super important to step away and take a breath",
*        "completed": "False",
*        "Project_Name": "Sprint Challenge",
*        "Project_Description": "Finish the sprint challenge within 3 hours to get a good score."
*    }
*  ]
*/
router.get('/tasks', (req, res) => {
  Proj.getTasks()
    .then(list => {
      res.status(200).json(list);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "error with the database" });
    });
});

/**
*@api {post} /tasks Post Request to Tasks
*@apiName AddTask
*@apiGroup Tasks
*
*@apiSuccess {Boolean} id The id of the new object that was created
*@apiSuccessExample {json} Success-Response Example:
*[
*    2
*]
 */
router.post('/tasks', (req, res) => {
  Proj.addTask(req.body)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "error with the database" });
    });
});

module.exports = router;