import mongoose from 'mongoose'
import * as EmailValidator from 'email-validator';
import { stringify } from 'querystring';

const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    Firstname: {
        type: String,
        required:"Firstname required" 
        
    },
    Lastname: {
        type: String,
        required:"Lastname required" 
    },
    Email: {
        type: String,
        required:"Email required",
        match:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        unique: true  
    },
   Password: {
        type: String,
        required:"Password required"
    },
    ConfirmPassword: {
        type: String,
        required:"ConfirmPassword required" 
    },
    Created_at: {
        type: Date,
        default:new Date
    },
    Updated_at: {
        type: Date,
        default:new Date
    }
}) 
export default DownloadSchema;