import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Email: {
        type: String
    },
   Password: {
        type: String
    },
    ConfirmPassword: {
        type: String
    },
    Createdat: {
        type: String
    },
    updatedat: {
        type: String
    }

})
 
 
export default DownloadSchema;