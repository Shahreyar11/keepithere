require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const USER = require('./models/user')
const { connectToDB } = require('./connect')

connectToDB(process.env.MONGO_URI)
  .then(()=>console.log('MongoDb Connected'));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
