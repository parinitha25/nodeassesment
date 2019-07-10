import mongoose from 'mongoose'
import downloadSchema from '../models/downloadModel'
 
const Download = mongoose.model('Download', downloadSchema)
 
// add new download to the database
export function addNewDownload(req, res) {
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// get all downloads from the database
export function getDownloads(req, res) {
    Download.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloads)
    })
}
 
// get single download based on the id
export function getDownload(req, res) {
    Download.findById(req.params.id, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// update the download information based on id
export function updateDownload(req, res) {
    Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// delete the download from the database.
export function deleteDownload(req, res) {
    Download.remove({ _id: req.params.id }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}


// const express = require('express')
// const app = express()

// app.use(express.json())

// app.post('/downloadModel', (req, res) => {
//   const Firstname  = req.body.Firstname
//   const Email = req.body.Email

// })
// const { check } = require('express-validator/check')
// app.post('/downloadModel', [
//     check('Firstname').isLength({ min: 3 }),
//     check('Email').isEmail(),
 
//   ], (req, res) => {
//     const Firstname  = req.body.Firstname
//     const Email = req.body.Email
    
//   })
//   check('Firstname')
//   .isAlpha()
//   .isLength({ min: 10 })

// //   {
// //     "errors": [{
// //       "location": "body",
// //       "msg": "Invalid value",
// //       "param": "email"
// //     }]
// //   }
//   check('Firstname')
//   .isAlpha()
//   .withMessage('Must be only alphabetical chars')
//   .isLength({ min: 10 })
//   .withMessage('Must be at least 10 chars long')
//   app.post('/downloadModel', [
//     check('Firstname').isLength({ min: 3 }),
//     check('Email').custom(Email => {
//       if (alreadyHaveEmail(Email)) {
//         throw new Error('Email already registered')
//       }
//     }),
//     // check('age').isNumeric()
//   ], (req, res) => {
//     const name  = req.body.name
//     const email = req.body.email
//     // const age   = req.body.age
//   })
//   check('email').custom(email => {
//     if (alreadyHaveEmail(email)) {
//       throw new Error('Email already registered')
//     }
//   })