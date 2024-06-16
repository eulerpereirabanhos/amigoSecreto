const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

mongoose.connect('mongodb+srv://eulerpereirabanhos:TCZ4qjaAUthg6ET1@amigosecreto.p5umqol.mongodb.net/?retryWrites=true&w=majority&appName=amigoSecreto',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.listen(3335);