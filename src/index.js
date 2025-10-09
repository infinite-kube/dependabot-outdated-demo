const express = require('express');
const _ = require('lodash');
const axios = require('axios');
const dayjs = require('dayjs');

const app = express();

app.get('/', (_req, res) => {
  res.json({
    msg: 'Outdated-libs demo',
    lodash: _.VERSION,
    axios: require('axios/package.json').version,
    day: dayjs().format()
  });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () =>
    console.log(`Outdated-libs demo listening on http://localhost:${port}`)
  );
}

module.exports = app;
