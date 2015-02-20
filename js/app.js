/*append and prepend */
/*on function rather then onClick */

$(document).ready(function() {
	$('#addbutton').click(function () {
		/* alert("hi there addbutton"); */

		var text = $('#newItem').val();
		console.log("Adding the element: " + text);
		var li = $('<li>', {class:"item", html:text});
		var btn = $("<button>", {class:"btn", html:"x"});
		var check = $("<input>", {class:"new", type:"checkbox"});
		
		li.append(btn);
		li.prepend(check);

		$(".items").append(li);

		$("#newItem").val("");

	});	

	$('.items').on('click', 'button', function() {
		console.log("remove this element");
		$(this).parent().remove();
	})

	$('.items').on('click', 'li', function (){
		console.log("Changes the checkbox: "+ $(this).checkbox);
		$(this).parent().toggleClass("done");
	})
});