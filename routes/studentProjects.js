var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET student projects */
router.get('/', async (req, res) => {
    try {
      let results = await db("SELECT * FROM student_projects");
      let projects = results.data;
      res.send(projects);
    } catch (err) {
      res.status(500).send({error: err.message})
    }
  });
  
  /* GET project by project ID. */
  router.get('/:id', async (req, res) => {
    
    try {
      let project = await db(`SELECT * FROM student_projects WHERE id = ${req.params.id}`);
      if (project.data.length === 0){
        res.status(404).send({ error: "Project not found."})
      } else {
        res.send(project.data[0]);
      }
    } catch (err) {
      res.status(500).send({error: err.message})
    }
  });
  
  
//   /* POST new project */
  router.post('/', async(req, res) => {
    
    let sql = `
      INSERT INTO student_projects (title, description, image_url, project_url, user_id, classroom_id)
      VALUES ('${req.body.title}', '${req.body.description}', '${req.body.image_url}', '${req.body.project_url}', ${req.body.user_id}, ${req.body.classroom_id})
    `;
  
    try {
      await db(sql);
      let result = await db("SELECT * FROM student_projects");
      res.status(201).send(result.data);
  
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  });

  /* PUT existing project with new project content */
  router.put('/:id', async (req, res) => {
    console.log(req);
    let sql = `
      UPDATE student_projects 
      SET 
        title = '${req.body.title}', 
        description = '${req.body.description}', 
        image_url = '${req.body.image_url}', 
        project_url = '${req.body.project_url}'
      WHERE
        id = ${req.params.id};
    `;

    try {
      let project = await db(`SELECT * FROM student_projects WHERE id = ${req.params.id}`);
      if (project.data.length === 0){
        res.status(404).send({ error: "There is no existing project to replace."})
      } else {
        await db(sql);
        let result = await db(`SELECT * FROM student_projects`);
        res.status(201).send(result.data);
      }
    } catch (err) {
      res.status(500).send({error: err.message})
    }
  });

  /* DELETE project */
  router.delete('/:id', async (req, res) => {
    try {
      let project = await db(`SELECT * FROM student_projects WHERE id = ${req.params.id}`);
      if (project.data.length === 0){
        res.status(404).send({ error: "User not found."})
      } else {
        await db(`DELETE FROM student_projects WHERE id = ${req.params.id}`);
        let results = await db("SELECT * FROM student_projects");
        res.send(results.data);
      }
    } catch (err) {
      res.status(500).send({error: err.message})
    }
  });

module.exports = router;