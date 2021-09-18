let User = require("../../../db/mongodb/models/user");
let makeUser = require("../../../models/user/index");
let serialize = require("./serializer"); //serializer custom to db

let listUsers = () => {
  return User.find({}).then(serialize);
};

let findUser = (prop, val) => {
  if (prop === "id") {
    prop = "_id";
  }
  return User.find({ [prop]: val }).then((resp) => {
    return serialize(resp[0]);
  });
};

let findUsersBy = (prop, val) => {
  return User.find({ [prop]: val });
};

let addUser = (studentInfo) => {
  let student = makeUser(studentInfo);
  let newUser= {
    name: user.getName(),
    userID: user.getGrade(),
    age: user.getAvatar(),
    rights: user.getRights(),
  };
  return User.create(newUser).then(serialize);
};

let deleteUser = (id) => {
  return User.findByIdAndDelete(id)
    .then((resp) => {
      return {
        id: resp._id.toString(),
        status: "success",
      };
    })
    .catch((err) => {
      return {
        status: "fail",
      };
    });
};

let dropAll = () => {
  return User.remove();
};

module.exports = {
  listUsers,
  findUser,
  findUsersBy,
  addUser,
  deleteUser,
  dropAll,
};
