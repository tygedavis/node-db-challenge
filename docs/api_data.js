define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Users\\18013\\Desktop\\Code\\sprints\\node-db-challenge\\docs\\main.js",
    "groupTitle": "C:\\Users\\18013\\Desktop\\Code\\sprints\\node-db-challenge\\docs\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/",
    "title": "Post Request to Projects",
    "name": "AddProject",
    "group": "Projects",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the new object that was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "[\n   3\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/project-router.js",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Request All Projects",
    "name": "GetProjects",
    "group": "Projects",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The projects unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the project.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A description of the project.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>A 1 or 0 || 1 = Is Completed, 0 = Has Not Been Completed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n     \"id\": 1,\n     \"name\": \"Sprint Challenge\",\n     \"description\": \"Finish the sprint challenge within 3 hours to get a good score.\",\n     \"completed\": 0\n },\n {\n     \"id\": 2,\n     \"name\": \"Make Breakfast\",\n     \"description\": \"Starting the day with breakfast is awesome\",\n     \"completed\": 1\n },\n {\n     \"id\": 3,\n     \"name\": \"New Project\",\n     \"description\": \"\",\n     \"completed\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/project-router.js",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "/res",
    "title": "Post Request to Resources",
    "name": "AddResource",
    "group": "Resources",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the new object that was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "[\n   6\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/project-router.js",
    "groupTitle": "Resources"
  },
  {
    "type": "get",
    "url": "/res",
    "title": "Request All Resources",
    "name": "GetResources",
    "group": "Resources",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The resources unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the resource.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A description of the resource.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "project_id",
            "description": "<p>The id of the project that the resource belongs to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success Example:",
          "content": "[\n {\n      \"id\": 1,\n      \"name\": \"Computer\",\n      \"description\": \"\",\n      \"project_id\": 1\n  },\n  {\n      \"id\": 2,\n      \"name\": \"Google\",\n      \"description\": \"Data giant that knows everything about anything\",\n      \"project_id\": 1\n  },\n  {\n      \"id\": 3,\n      \"name\": \"Oven\",\n      \"description\": \"Don't touch it when hot\",\n      \"project_id\": 2\n  },\n  {\n      \"id\": 4,\n      \"name\": \"Pan\",\n      \"description\": \"Will cook food when hot\",\n      \"project_id\": 2\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/project-router.js",
    "groupTitle": "Resources"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Post Request to Tasks",
    "name": "AddTask",
    "group": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the new object that was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "[\n   2\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/project-router.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/res",
    "title": "Request All Tasks",
    "name": "GetTasks",
    "group": "Tasks",
    "description": "<p>Important Note: The response is ordered by Project_Name - NOT by id.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The tasks unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes explaining what needs to be done (or how).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completed",
            "description": "<p>Returns 'true' or 'false'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Project_Name",
            "description": "<p>The name of the project that the task belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Project_Description",
            "description": "<p>The description of the project that the task belongs to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success Example:",
          "content": "[\n   {\n       \"id\": 2,\n       \"description\": \"Cook the food\",\n       \"notes\": \"\",\n       \"completed\": \"True\",\n       \"Project_Name\": \"Make Breakfast\",\n       \"Project_Description\": \"Starting the day with breakfast is awesome\"\n   },\n   {\n       \"id\": 3,\n       \"description\": \"Put away the dishes\",\n       \"notes\": \"It may be smart to clean them before putting them away\",\n       \"completed\": \"False\",\n       \"Project_Name\": \"Make Breakfast\",\n       \"Project_Description\": \"Starting the day with breakfast is awesome\"\n   },\n   {\n       \"id\": 4,\n       \"description\": \"Clean up mess\",\n       \"notes\": \"That includes your face\",\n       \"completed\": \"False\",\n       \"Project_Name\": \"Make Breakfast\",\n       \"Project_Description\": \"Starting the day with breakfast is awesome\"\n   },\n   {\n       \"id\": 1,\n       \"description\": \"Use Pomodoro for breaks\",\n       \"notes\": \"It's super important to step away and take a breath\",\n       \"completed\": \"False\",\n       \"Project_Name\": \"Sprint Challenge\",\n       \"Project_Description\": \"Finish the sprint challenge within 3 hours to get a good score.\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/project-router.js",
    "groupTitle": "Tasks"
  }
] });
