const mongoose = require("mongoose")

if (process.argv.length < 3) {
  console.log("Please provide password as an arguement: node mongo.js <password>")
  process.exit(1)
}

const password = [process.argv[2]]

const dbName = "note-app"
const url = 
  `mongodb+srv://fullstack:${password}@cluster0.n70j8.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model("Note", noteSchema)

const note = new Note({
  content: "Is it a bird is it a plane",
  date: new Date(),
  important: false,
})

note.save().then(result =>{
  console.log("note saved!", result)
  mongoose.connection.close()
})

// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })