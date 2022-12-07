const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../model/helper');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || 'this weak (!!) secret key';
const { BCRYPT_WORK_FACTOR } = require('../config');

router.post('/register', async (req, res) => {
  const {
    first_name, last_name, password, email, role,
  } = req.body;
  const hash = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  db(`
  INSERT INTO users (first_name, last_name, password, email, role)
  VALUES ('${first_name}', '${last_name}', '${hash}', '${email}', '${role}')
  `)
    .then(() => res.send({ message: 'Registration succeeded' }))
    .catch((err) => res.status(500).send({ error: err.message }));
});

router.post('/login', async (req, res) => {
  const { email, password: inputPassword } = req.body;
  try {
    const results = await db(`SELECT * FROM users WHERE email = '${email}'`);
    if (results.data.length === 0) {
      res.status(401).send({ error: 'Login failed' });
    } else {
      const { password, id, ...userData } = results.data[0]; // the user's row/record from the DB
      const passwordsEqual = await bcrypt.compare(inputPassword, password);
      if (passwordsEqual) {
        // Passwords match
        const payload = { userId: id };
        // Create token containing user ID
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '365d' });
        res.send({
          message: 'Login succeeded',
          token,
          user: { id, ...userData },
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

router.post('/silent-login', async (req, res) => {
  const { token } = req.body;
  const decoded = jwt.verify(token, SECRET_KEY);
  const { userId } = decoded;
  console.log(userId);
  try {
    const results = await db(`SELECT * FROM users WHERE id = '${userId}'`);
    if (results.data.length === 0) {
      res.status(401).send({ error: 'Login failed' });
    } else {
      const { password, id, ...userData } = results.data[0]; // the user's row/record from the DB
      res.send({
        message: 'Login succeeded',
        token,
        user: { id, ...userData },
      });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
