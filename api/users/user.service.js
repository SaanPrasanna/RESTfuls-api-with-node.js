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
  getUserByUserId:(id, callBack)=>{
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
  },
  updateUser:(data, callBack)=>{
    pool.query(
      `UPDATE registration SET firstName=?,lastName=?,gender=?,email=?,password=?,number=? WHERE id=?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.id
      ],
      (error, results, fields)=>{
        if(error){
          return callBack(error);
        }
        return callBack(null, results[0]);
      }

    );
  },
  deleteUser:(id, callBack)=>{
    pool.query(
      `DELETE FROM registration WHERE id=?`,
      [id],
      (error, results, fields)=>{
        if(error){
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
