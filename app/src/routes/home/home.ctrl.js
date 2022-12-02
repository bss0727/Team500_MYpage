"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const typing = (req, res) => {
  res.render("home/tps");
};

module.exports = {
  home,
  typing,
};