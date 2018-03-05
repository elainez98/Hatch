console.log('hi')
$(function(){
	$('#submit')
		.click(function(){
			console.log('button was clicked');
			var text= $('#new-task').val();
			$('ul')
				.append(text+'\n');
		})
})
