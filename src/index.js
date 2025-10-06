const _ = require('lodash');
const axios = require('axios');
const express = require('express');
const dayjs = require('dayjs');

const app = express();
app.get('/', (_req, res) => {
  res.json({
    msg: 'Hello from the Outdated-Libs demo!',
    lodash: _.VERSION,
    day: dayjs().format()
  });
});
module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Demo on http://localhost:${port}`));
}
