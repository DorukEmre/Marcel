const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()
const cors = require('cors')

app.use(cors())

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = process.env.DB_NAME

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/',(request, response) => {
    db.collection('cats').find().toArray()
    .then(data => {
        response.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))

})

app.post('/...', (request, response) => {
})

app.put('/...', (request, response) => {
})

app.delete('/...', (request, response) => {
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT} http://localhost:${PORT}/`)
})