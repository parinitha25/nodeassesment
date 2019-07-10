import express from 'express'
import { addNewDownload, getDownloads, getDownload, updateDownload, deleteDownload } from '../controllers/downloadController'
const { check, validationResult } = require('express-validator');


const routes = (app) => {
    app.route('/download')
        .post(addNewDownload)
        const { check, validationResult } = require('express-validator');
        check('Firstname').isEmpty();
 



      
app.post('/user', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
});
}
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.post('/user', (req, res) => {
//   User.create({
//     Firstname: req.body.Firstname,
//     Password: req.body.Password
//   }).then(user => res.json(user));
// });
// const { check, validationResult } = require('express-validator');

// app.post('/user', [
//   // username must be an email
//   check('Firstname').isEmail(),
//   // password must be at least 5 chars long
//   check('Password').isLength({ min: 5 })
// ], (req, res) => {
//   // Finds the validation errors in this request and wraps them in an object with handy functions
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }

//   User.create({
//     Firstname: req.body.Firstname,
//     Password: req.body.Password
//   }).then(user => res.json(user));
// });

export default routes