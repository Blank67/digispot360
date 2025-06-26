const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const NODE_ENV = process.env.NODE_ENV || 'staging';
dotenv.config({ path: `.env.${NODE_ENV}` });

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (res) => {
  res.send('Backend is alive');
})

app.listen(PORT, () => {
  console.log(`Backend running....`);
});
