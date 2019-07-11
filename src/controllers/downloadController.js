import mongoose from 'mongoose'
import downloadSchema from '../models/downloadModel'
 
const Download = mongoose.model('Download', downloadSchema)

module.exports.createUser = function(newUser, callback){
bcrypt.genSalt(10, function(err, salt) {
bcrypt.hash(newUser.password, salt, function(err, hash) {
newUser.password = hash;
newUser.save(callback);
});
});
}
 
// add new download to the database
export function addNewDownload(req, res) {
    if(req.body.Password!=req.body.ConfirmPassword){
        req.body.ConfirmPassword="";
     }
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
        console.log("hi")
        if (error) {res.json(error) }
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
 
// // get single download based on the id
export function getDownload(req, res) {
    Download.findById(req.params.id, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// // update the download information based on id
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


