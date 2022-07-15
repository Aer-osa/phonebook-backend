const express = require('express')
const app = express()


app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

app.get('/info', (request, response) => {
  const currentDate = new Date()
  response.send(`<h2>Phonebook has info for ${persons.length} people</h2><h2>${currentDate}.</h2>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const entry = persons.find(entry => entry.id == id)
  if (entry) {
    response.json(entry)
  }else{
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(entry => entry != id)
  response.status(204).end()
})

  const PORT = 3001
  app.listen(PORT)
  console.log(`Server running on port ${PORT}`)