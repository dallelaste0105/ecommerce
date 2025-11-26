const db = require("../db");

async function userExistModel(data) {
  new Promise((resolve, reject) => {
    const query1 = "INSERT INTO datas (data) VALUES (?)";
    const schoolName = db.query(query1, [data], (error1, result1) => {
      if (error1) {
        return reject(error1);
      }
      else{
        return resolve({result1});
      }
    })
  })
}

async function signupModel(name, email, password, userType) {
  new Promise((resolve, reject) => {
    const query1 = "INSERT INTO datas (data) VALUES (?)";
    const schoolName = db.query(query1, [data], (error1, result1) => {
      if (error1) {
        return reject(error1);
      }
      else{
        return resolve({result1});
      }
    })
  })
}

module.exports = {signupModel, userExistModel};
