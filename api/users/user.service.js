const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstName, lastName, gender, email, password, number) 
                values(?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  gerUsers:callBack =>{
    pool.query(
      `SELECT id,firstName,lastName,gender,email,number FROM registration`,
      [],
      (error, results, fields)=>{
        if(error){
          return callBack(error);
        }
        return callBack(null, results)
      }
    );
  },
  getUserbyUserId:(id, callBack)=>{
    pool.query(
      `SELECT id,firstName,lastName,gender,email,number FROM registration WHERE id = ?`,
      [
        id
      ],
      (error,results,fields)=>{
        if(error){
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
