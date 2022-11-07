const express = require('express');

const router = express.Router();
const db = require('../model/helper');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const results = await db('SELECT * FROM users');
    const users = results.data;
    res.send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* GET user by ID. */
router.get('/:id', async (req, res) => {
  try {
    const user = await db(`SELECT * FROM users WHERE id = ${req.params.id}`);
    if (user.data.length === 0) {
      res.status(404).send({ error: 'User not found.' });
    } else {
      res.send(user.data[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* POST new user */
router.post('/', async (req, res) => {
  const sql = `
    INSERT INTO users (first_name, last_name, email, password, role, classroom_id)
    VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.password}','${req.body.role}', ${req.body.classroom_id})
  `;

  try {
    const { insertId } = await db(sql);
    res.status(201).send({ id: insertId });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


/* DELETE user */
router.delete('/:id', async (req, res) => {
  try {
    const user = await db(`SELECT * FROM users WHERE id = ${req.params.id}`);
    if (user.data.length === 0) {
      res.status(404).send({ error: 'User not found.' });
    } else {
      await db(`DELETE FROM users WHERE id = ${req.params.id}`);
      const results = await db('SELECT * FROM users');
      res.send(results.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
