"use strict";

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM mytps WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });   
  }


  static async save(tpsInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO mytps(id, wpm, errCnt, alphabetTimeTable) VALUES(?, ?, ?, ?);";
      db.query(
        query, 
        [tpsInfo.id, tpsInfo.wpm, tpsInfo.errCnt, tpsInfo.alphabetTimeTable], 
        (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });  
  }
}

module.exports = UserStorage;