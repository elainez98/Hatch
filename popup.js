console.log('hi')
//var state;
$(function(){
	$('#submit')
		.click(function(){
			console.log('button was clicked');
			var text= $('#new-task').val();
			addTask(text);
			$('#new-task')
				.val('');
		})

	$('#new-task')
		.keydown(function(e){
			if (e.keyCode==13){
				console.log('button was clicked');
				var text= $('#new-task').val();
				addTask(text);
				$('#new-task')
					.val('');
			}
		})
	function addTask(task){
		// state.tasks.push(task) 
		// store state to chrome storage
		// use state via jQuery 
		$('ul')
			.append('<li>'+ task+ '</li>');
	}
})
