const express = require('express');
require('dotenv-safe');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect('mongodb+srv://humberto:humberto@cluster0-fbd4q.azure.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.listen(3338, () => console.log(`API online na porta ${3338}!`));