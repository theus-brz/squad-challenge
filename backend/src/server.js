const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());

app.use(express.json());
app.use(require('./routes'));

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('Squad Challenge Backend Running');
});
