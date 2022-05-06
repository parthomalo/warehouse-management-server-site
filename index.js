const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.POST || 5000;


// meddle ware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => {console.log('listening is running')})