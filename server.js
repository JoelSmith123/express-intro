const express = require('express')
const path = require('path')
const app = express()
var favicon = require('serve-favicon')

const urlLogger = (request, response, next) => {
  console.log('Request URL: ', request.url)
  next()
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString())
  next()
}

app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(urlLogger, timeLogger)

app.get('/', (request, response) => {
  
})

app.get('/sunsets', (request, response) => {
  response.sendFile(path.join(__dirname + '/public/sunsets.html'))
})

app.get('/json', (request, response) => {
  response.status(200).json({"name": "Robbie"})
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000')
})

app.use((request, response, next) => {
  response.status(404).send("<img src='https://http.cat/404.jpg' alt='404 Not Found' style='display:block; margin-left: auto; margin-right: auto;'/>")
})
