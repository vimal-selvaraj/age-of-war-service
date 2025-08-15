const express = require('express')
const bodyParser = require('body-parser')
const battleRoutes = require('./routes/battle.routes')
const cors = require('cors');

const app = express()

app.use(cors());
app.use(bodyParser.json())

app.use('/battle',battleRoutes)

module.exports = app;