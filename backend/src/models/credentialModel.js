const db = require("../db");

async function userExistModel(name) {
  return new Promise((resolve, reject) => {
    const query1 = "SELECT * FROM user WHERE name = ?";
    const schoolName = db.query(query1, [name], (error1, result1) => {
      if (error1) {
        return reject(error1);
      }
      else{
        return resolve(result1);
      }
    })
  })
}

async function signupModel(name, email, password, userType) {
  return new Promise((resolve, reject) => {
    const query1 = "INSERT INTO user (name, email, password, userType) VALUES (?,?,?,?)";
    db.query(query1, [name, email, password, userType], (error1, result1) => {
      if (error1) {
        return reject(error1);
      }
      else{
        return resolve(result1);
      }
    })
  })
}

module.exports = {signupModel, userExistModel};
