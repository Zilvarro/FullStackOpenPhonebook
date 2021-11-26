const morgan = require('morgan')
morgan.token('body', (req) => JSON.stringify(req.body) )

const cors = require('cors')

const express = require('express')
const app = express()

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformed id' })
  } else if (error.name ==='ValidationError') {
    return response.status(400).json(error.message)
  }

  next(error)
}

app.use(cors())
app.use(express.static('build_frontend'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

require('dotenv').config()
const PORT = process.env.PORT
console.log('Port is set to ' + PORT)

const Person = require('./models/person')

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  Person.countDocuments().then((count) => {
    response.send('<p>Phonebook has info for ' + count + ' people</p><p>' + Date() + '</p>')
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    console.log(persons)
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    }).catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id).then(() => {
      response.status(204).end()
    }).catch( error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  Person.findByIdAndUpdate(request.params.id, { number: body.number }, { new: true }).then((updatedPerson) => {
    response.json(updatedPerson)
  }).catch( error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if (!body.name){
        return response.status(400).json({ error: 'Name missing!' })
    }
    if (!body.number){
        return response.status(400).json({ error: 'Number missing!' })
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
      response.json(savedPerson)
    }).catch( error => next(error))
})

//must be at the end
app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})