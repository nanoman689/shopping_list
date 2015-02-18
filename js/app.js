/*append and prepend */
/*on function rather then onClick */

$(document).ready(function() {
	$('#addbutton').click(function () {
		alert("hi there addbutton");
		var text=$('#newItem').val();
		if(text.length){
			$('<li />', {html: text}).appendTo('ul.items');
		}
	});	

	/* click to mark done with line-through */

	$('ul').on('click', 'li', function() {
		alert("click ul item");
		$(this).css('textDecoration','line-through');
		$(this).toggleClass('done');
	})

	/* Remove the item by double clicking */

	$('.remove').on('dblclick', 'li', function () {
		alert("Double Click!");
		if ($('li').hasClass('done')) {
			$(this).remove();		
		}
	})




});
	/*

	$(".main").find(".addbutton").click(function () {
		alert("hi there addbutton");
		(".items").append(<li></li>);
	});

	$(".main").find(".donebutton").click(function () {
		alert("hi there donebutton");
		$(".main2").remove();
        return false;
	});
	*/

/* Code to make checked done items have a strikethough

$('#main').on('change','input[type=checkbox]',function(){
    var input = $(this).parent().find('input[type=text]');
    $(input).css('textDecoration','line-through');
});

*/

