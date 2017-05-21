const express = require('express')

const router = express.Router()

let aTasks = require('../../sessions/7CYjn5BtSDOK3xpGkslGO2Qo7XQdy62E.json')

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

router.delete('todo/:id', (req, res) => {
	const id = req.params.id
	aTasks.splice(id, 1)
		.then() => res.send(`Success erasing element ${id}`)
})

module.exports = router