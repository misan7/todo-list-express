const write = require('write-file-promise')
const OUTPUT_FILENAME = `${__dirname}/data/data.json`

function writeTasksInFile( tasks ) {
	const jsonListTasks = JSON.stringify(tasks)
	return write(OUTPUT_FILENAME, jsonListTasks)
}

module.exports = writeTasksInFile