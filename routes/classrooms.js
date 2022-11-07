const express = require('express');

const router = express.Router();
const db = require('../model/helper');

/* GET classrooms listing. */
router.get('/', async (req, res) => {
  try {
    const results = await db('SELECT * FROM classrooms');
    const classrooms = results.data;
    res.send(classrooms);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//   /* GET classroom by ID. */
router.get('/:id', async (req, res) => {
  try {
    const classroom = await db(`SELECT * FROM classrooms WHERE id = ${req.params.id}`);
    console.log(classroom);
    if (classroom.data.length === 0) {
      res.status(404).send({ error: 'Classroom not found.' });
    } else {
      res.send(classroom.data[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//   /* POST new classroom */
router.post('/', async (req, res) => {
  const sql = `
      INSERT INTO classrooms (classroom_name, assignment_title, assignment_desc)
      VALUES (
        "${req.body.classroom_name}",
        "${req.body.assignment_title}",
        "${req.body.assignment_desc}"
        )
    `;

  try {
    await db(sql);
    const result = await db('SELECT * FROM classrooms');
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* PUT existing project with new project content */
router.put('/:id', async (req, res) => {
  console.log(req);
  const sql = `
      UPDATE classrooms
      SET
        assignment_title = '${req.body.assignment_title}',
        assignment_desc = '${req.body.assignment_desc}'
      WHERE
        id = ${req.params.id};
    `;

  try {
    const classroom = await db(`SELECT * FROM classrooms WHERE id = ${req.params.id}`);
    if (classroom.data.length === 0) {
      res.status(404).send({ error: 'There is no existing assignment to replace.' });
    } else {
      await db(sql);
      const result = await db('SELECT * FROM classrooms');
      res.status(201).send(result.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* DELETE classroom */
router.delete('/:id', async (req, res) => {
  try {
    const classroom = await db(`SELECT * FROM classrooms WHERE id = ${req.params.id}`);
    if (classroom.data.length === 0) {
      res.status(404).send({ error: 'Classroom not found.' });
    } else {
      await db(`DELETE FROM classrooms WHERE id = ${req.params.id}`);
      const results = await db('SELECT * FROM classrooms');
      res.send(results.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
