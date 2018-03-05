console.log('hi')
$(function(){
	$('#submit')
		.click(function(){
			console.log('button was clicked');
			var text= $('#new-task').val();
			addTask(text);
			$('#new-task')
				.val('');
		})
	function addTask(task){
		$('ul')
			.append('<li>'+ task+ '</li>');
	}
})
