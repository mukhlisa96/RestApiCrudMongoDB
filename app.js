const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    res.send('home');
});



//connect to db
mongoose.connect(
    process.env.BD__CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected db'));

app.listen(3000);
// IhlO3tFO0d5rtkDv