const express  = require('express')
const router   = express.Router()
const Registry = require('../models/db.js')

router.get('/api/registry', (req, res) => { // GET ROUTE
  Registry.find({}).sort({date: 'ascending'}).exec((err, data) => { // get all todos
      err ? console.log(err) : res.send({data})
 })
})

router.post('/api/registry', (req, res) => { // POST ROUTE
  console.log('just recieved an update:', req.body)
  // req.body = req.sanitize(req.body) // sanatizing request

  const query = {}
  query[req.body.dataType] = req.body.value

  Registry.findByIdAndUpdate(req.body.id, query, (err) => {
    if (err) {
      console.log(err)
    } else {
      res.send('success maybe') // need something useful to send back
    }
  })
})

// router.delete('/api/todo', (req, res) => { // DELETE ROUTE
//     req.body.todo = req.sanitize(req.body.todo) // sanatizing request 

//     Todo.findByIdAndRemove(req.body.id, (err) => { // delete a todo
//         err ? console.log(err) : res.send('a todo has been deleted')
//     })
// })

module.exports = router