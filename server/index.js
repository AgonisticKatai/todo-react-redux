require('dotenv').load()
const { PORT, URL_DB } = process.env

const db = require('./config/db')
const app = require('./app')

db.openUri(URL_DB)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}...`)
