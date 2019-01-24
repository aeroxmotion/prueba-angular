'use strict'

const { createServer } = require('http')

const todos = [
  {
    text: 'Hacer el mercado',
    done: false
  },
  {
    text: 'Buscar empleo',
    done: true
  }
]

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('content-type', 'application/json')
  res.write(JSON.stringify(todos))
  res.end()
})

server.listen(3000, () => console.log('Running on port', 3000))
