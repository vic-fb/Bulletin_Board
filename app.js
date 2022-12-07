const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users');
const classroomsRouter = require('./routes/classrooms');
const studentProjectsRouter = require('./routes/studentProjects');
const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/users', usersRouter);
app.use('/classrooms', classroomsRouter);
app.use('/student-projects', studentProjectsRouter);
app.use('/student-projects', studentProjectsRouter);
app.use('/', authRouter);

module.exports = app;
