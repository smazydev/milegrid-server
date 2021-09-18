let usersDB = require("../../../data-access/users-db");

let users = (module.exports = {});

users.index = (req, res, next) => {
  usersDB.listUsers().then((data) => {
    res.send(data);
  });
};

users.show = (req, res, next) => {
  usersDB.findUser("id", req.params.id).then((data) => {
    res.send(data);
  });
};

users.create = (req, res, next) => {
  usersDB
    .addUser(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};
