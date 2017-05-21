$('.list-tasks .remove').on('click', function(e) {
	e.preventDefault()
	const $thisElement = $(this)
	const url = $thisElement.attr("href")
	const method = 'DELETE'
	$.ajax({url, method})
		.done( response => {
		console.log(response)
		$thisElement.parents('.list-group-items').remove()
	})
})