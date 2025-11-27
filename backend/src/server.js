const credentialRoute = require('../src/routes/credentialRoute');

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json());
app.use(cookieParser());

app.use('/credential', credentialRoute);

app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});