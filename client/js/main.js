$('.list-tasks .remove').on('click', function(e) {
	e.preventDefault()
	console.log("$(this)" + $(this))
	const $thisElement = $(this)
	console.log("thisElement", $thisElement);

	const url = $(this).attr("href")
	const method = 'DELETE'
	$.ajax({url, method})
		.done( response => {
		console.log(response)
		$(this).parents('.list-group-items').remove()
	})
})