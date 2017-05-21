const express = require('express')

const router = express.Router()

let aTasks = require('../../data/data.json')
const writeTasksInFile = require('../../writeTasksInFile.js')

router.get('/todo', (req, res) => {
	res.render('todo', {
	todo: aTasks
	})
})

router.post('/todo', (req, res) => {
	const taskInTasks = req.body.checkListItem
	aTasks.push(taskInTasks)
	writeTasksInFile(aTasks)
		.then( () => res.redirect('/todo') )
})

router.delete('todo/:id', (req, res) => {
	const id = req.params.id
	aTasks.splice(id, 1)
	writeTasksInFile(aTasks)
		.then( () => res.send(`Succes deleting ${id}`))
})

module.exports = router