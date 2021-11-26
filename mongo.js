const mongoose = require('mongoose')
var password, name, number, show, create
if (process.argv.length === 3) {
    password = process.argv[2]
    show = true
    create = false
} else if (process.argv.length === 5) {
    password = process.argv[2]
    name = process.argv[3]
    number = process.argv[4]
    show = false
    create = true
} else {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const url =
  `mongodb+srv://mainuser:${password}@firstcluster.nrcgw.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (create) {
    const person = new Person({
      name: name,
      number: number,
    })

    person.save().then(() => {
      console.log('person saved!')
      mongoose.connection.close()
      process.exit(0)
    })
}

if (show) {
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
        process.exit(0)
    })
}