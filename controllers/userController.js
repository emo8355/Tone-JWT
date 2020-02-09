const userModel = require("../DB/userModel").userModel;

const isUser = (user, password) => {
  return user.password === password;
};

const get_user_by_email = (email, password) => {
  const user = userModel.findOne(email);
  if (isUser(user, password)) {
    if (user) {
      delete user.password;
      return user;
    }
    return null;
  }
};

const get_user_by_id = id => {
  let user = userModel.findById(id);
  if (user) {
    delete user.password;
    return user;
  }
  return null;
};

module.exports = { get_user_by_email, get_user_by_id };
