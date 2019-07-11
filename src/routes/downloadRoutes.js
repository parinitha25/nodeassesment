import { addNewDownload, getDownloads, getDownload, updateDownload, deleteDownload } from '../controllers/downloadController'

const { check, validationResult } = require('express-validator');
const routes = (app) => {

  app.route('/sign')
    .get(getDownloads)
    .post(addNewDownload, [
check('Firstname').isEmpty(),
check('Lastname').isEmpty(),
check('Email').isEmpty(),
check('Password').isLength({ max: 8,min:5 }),
check('ConfirmPassword').isEmpty()
], addNewDownload,(req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(422).json({ errors: errors.array() });
}



User.create({
Firstname: req.body.Firstname,
Lastname: req.body.Lastname,
Email: req.body.Email,
Password: req.body.Password,
ConfirmPassword: req.body.ConfirmPassword,
Created_at: req.body.Created_at,
Updated_at:req.body.Updated_at

}).then(user => res.json(user));


});
app.route('/sign/:id')
.get(getDownload)
.put(updateDownload)
.delete(deleteDownload)
}

export default routes

// module.exports.createUser = function(newUser, callback){
// bcrypt.genSalt(10, function(err, salt) {
// bcrypt.hash(newUser.password, salt, function(err, hash) {
// newUser.password = hash;
// newUser.save(callback);
// });
// });
// }