const express = require('express')

const router = express.Router()

router.get('/todo', (req, res) => {
	res.render('todo', {todo: req.session.todo})
})

router.post('/todo', (req, res) => {
	const { checkListItem } = req.body
	const newTask = { checkListItem }
	newTask.id = req.session.todo.length +1
	req.session.todo.push(newTask)
	res.render('todo', {todo: req.session.todo})
})

module.exports = router