let {
    listUsers,
    findUser,
    findUsersBy,
    addUser,
    deleteUser,
    dropAll
  } 
  // = require('./memory/index') // switch out db as required
  // = require('./mongod/index')
  = require('./mongod/index')
  
  
  let usersDB = {
    listUsers,
    findUser,
    findUsersBy,
    addUser,
    deleteUser,
    dropAll
  }
  
  module.exports = usersDB