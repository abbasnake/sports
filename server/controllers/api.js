const express  = require('express')
const router   = express.Router()
const Registry = require('../models/db.js')

router.get('/api/registry', (req, res) => { // GET ROUTE
    Registry.find({}).sort({date: 'ascending'}).exec((err, data) => { // get all todos
        err ? console.log(err) : res.send({data})
   })
})

// router.post('/api/todo', (req, res) => { // POST ROUTE
//     req.body.todo = req.sanitize(req.body.todo) // sanatizing request 

//     Todo.create(req.body, (err, newTodo) => { // create new todo
//         err ? console.log(err) : res.json({newTodo: newTodo})
//     })
// })

// router.delete('/api/todo', (req, res) => { // DELETE ROUTE
//     req.body.todo = req.sanitize(req.body.todo) // sanatizing request 

//     Todo.findByIdAndRemove(req.body.id, (err) => { // delete a todo
//         err ? console.log(err) : res.send('a todo has been deleted')
//     })
// })

module.exports = router