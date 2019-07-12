import mongoose from 'mongoose'
import downloadSchema from '../models/downloadModel'
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 
const Download = mongoose.model('Download', downloadSchema)


exports.addNewDownload=(req, res)=> {
    const reg= /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
    if(reg.test(req.body.Password))
    {
    if(req.body.Password === req.body. ConfirmPassword){
    req.body.Password = cryptr.encrypt(req.body.Password);
    req.body. ConfirmPassword = cryptr.encrypt(req.body.ConfirmPassword);
    }
    } 
    else{
    req.body.Password ="";
    } 
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
    if (error) { res.json(error) }
    res.json("login sucessfully")
    })
    }
 
// get all downloads from the database
exports.getDownloads=(req, res)=> {
    Download.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloads)
       
    })
}
 
// // get single download based on the id
exports. getDownload=(req, res)=> {
    Download.findById(req.params.id, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// // update the download information based on id
exports.updateDownload=(req, res)=> {
    Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// delete the download from the database.
exports.deleteDownload=(req, res)=>{
    Download.remove({ _id: req.params.id }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}

