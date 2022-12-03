"use strict";

const { response } = require("express");
const TpsStorage = require("./TpsStorage");

class Typing {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try{
      const user = await TpsStorage.getUserInfo(client.id);

      if (user) {
        if (user.id === client.id && user.psword === client.psword) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return { success: false, msg: "존재하지 않는 아이디입니다." };
    } catch (err) {
      return{ success: false, err };
    }   
  }

  async register() {
    const client = this.body;
    try {
      const response = await TpsStorage.save(client);
      return response;
    } catch(err) {
      return { success: false, err };
    }
  }
}

module.exports = User;