const express = require('express');

const teamsData = require('./data/teams');

const routes = express.Router();

routes.get('/teams-data', (_, res) => {
  return res.json(teamsData);
});

module.exports = routes;
