'use strict'

let app = module.exports = require('express')();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
let cors = require('cors');
app.use(cors());

let port = process.env.port || 5000;


app.use('/vehicles', require('./src/vehicles'));



app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port, () => {
});
