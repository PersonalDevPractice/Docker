import express from 'express';

const app = express();

app.listen(8085, () => {
    console.log('App Running');
});

// Basic route setup
app.get('/', (req, res) => {
    res.send('Hello World');
});
