const express = require('express');
const axios = require('axios');
const moment = require('moment');
const { exec } = require('child_process');

const router = express.Router();

// Mounted at /tools in src/index.js.
router.get('/ping', (req, res) => {
  exec(`ping -c 1 ${req.query.host}`, (error, stdout) => {
    res.json({ output: stdout });
  });
});

router.get('/preview', async (req, res) => {
  const response = await axios.get(req.query.url);
  res.json({ preview: response.data });
});

router.get('/time', (req, res) => {
  moment.locale(req.query.lang);
  res.json({ now: moment().format('LLLL') });
});

router.get('/hello', (req, res) => {
  res.send('<h1>Hello ' + req.query.name + '</h1>');
});

module.exports = router;
