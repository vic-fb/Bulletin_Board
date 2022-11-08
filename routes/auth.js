const express = require('express');
const router = express.Router();
const db = require('../model/helper');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || 'this weak (!!) secret key';
const { BCRYPT_WORK_FACTOR } = require ("../config");

router.post('/register', async (req, res) => {
  const { first_name, last_name, password, email, role, classroom_id } = req.body;
  const hash = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  db(`
  INSERT INTO users (first_name, last_name, password, email, role, classroom_id)
  VALUES ('${first_name}', '${last_name}', '${hash}', '${email}', '${role}', '${classroom_id}')
  `)
  .then (() => res.send({ message: 'Registration succeeded' }))
  .catch ((err) => res.status(500).send({ error: err.message }))
  });

router.post('/login', async (req, res) => {
  let { email, password: inputPassword } = req.body;
  try {
    let results = await db(`SELECT * FROM users WHERE email = '${email}'`);
    if (results.data.length === 0) {
      res.status(401).send({ error: 'Login failed' });
    } else {
      let {password, id, ...userData} = results.data[0];  // the user's row/record from the DB
      let passwordsEqual = await bcrypt.compare(inputPassword, password);
      if (passwordsEqual) {
        // Passwords match
        const payload = { userId: id };
        // Create token containing user ID
        const token = jwt.sign(payload, SECRET_KEY);
        res.send({
          message: 'Login succeeded',
          token: token,
          user: {id, ...userData}
        });
      } else {
        // Passwords don't match
        res.status(401).send({ error: 'Login failed' });
      }
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//silentlogin pass token in body

module.exports = router;
