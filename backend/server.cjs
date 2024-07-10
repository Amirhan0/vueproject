const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = 3000
const Sneaker = require('./models/sneaker.cjs')
const db =
  'mongodb+srv://Amir:narhanim123@cluster0.u7lmi2z.mongodb.net/SneakersShop?retryWrites=true&w=majority&appName=Cluster0'

mongoose
  .connect(db)
  .then(() => console.log('DB CONNECTED'))
  .catch((error) => console.log(error))

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  })
)

app.use(express.json())

// GET
app.get('/api/items', async (req, res) => {
  try {
    const items = await Sneaker.find()
    res.json(items)
  } catch (error) {
    console.error('Ошибка: ', error)
    res.status(500).send('Server error')
  }
})

app.listen(PORT, () => {
  console.log('localhost:3000')
})
