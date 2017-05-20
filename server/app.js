const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)

const app = express()
const PORT = 3000

const userRoutes = require('./routes/users')

app.use(express.static( path.join(__dirname, '../client') ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
  name: 'jm-server-session-cookie-id',
  secret: 'IllBeAJedi654321987',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}))

app.use((req, res, next) => {
	req.session.todo = req.session.todo || []
	next()
})

app.use(userRoutes)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))