var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    let results = await db("SELECT * FROM users");
    let users = results.data;
    res.send(users);
  } catch (err) {
    res.status(500).send({error: err.message})
  }
});

/* GET user by ID. */
router.get('/:id', async (req, res) => {
  
  try {
    let user = await db(`SELECT * FROM users WHERE id = ${req.params.id}`);
    if (user.data.length === 0){
      res.status(404).send({ error: "User not found."})
    } else {
      res.send(user.data[0]);
    }
  } catch (err) {
    res.status(500).send({error: err.message})
  }
});


/* POST new user */
router.post('/', async(req, res) => {
  
  let sql = `
    INSERT INTO users (first_name, last_name, role, classroom_id)
    VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.role}', ${req.body.classroom_id})
  `;

  try {
    await db(sql);
    let result = await db("SELECT * FROM users");
    res.status(201).send(result.data);

  } catch (err) {
    res.status(500).send({ error: err.message })
  }
});

/* DELETE user */
router.delete('/:id', async (req, res) => {
  try {
    let user = await db(`SELECT * FROM users WHERE id = ${req.params.id}`);
    if (user.data.length === 0){
      res.status(404).send({ error: "User not found."})
    } else {
      await db(`DELETE FROM users WHERE id = ${req.params.id}`);
      let results = await db("SELECT * FROM users");
      res.send(results.data);
    }
  } catch (err) {
    res.status(500).send({error: err.message})
  }
});

module.exports = router;
