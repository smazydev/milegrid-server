
let {userValidator} = require('./joi')
// let {studentValidator, teacherValidator} = require('./validatejs')


/*
  valid ? true : {error: [message]}
*/
let validator = {
  userValidator: (payload) => userValidator(payload),
 // teacherValidator: (payload) => teacherValidator(payload)
}

module.exports = validator