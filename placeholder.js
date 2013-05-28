/*
 * placeholder
 * Version 1.0
 * https://github.com/unculturedswine/placeholder
 *
 * jQuery Javascript code which allows all browsers to display the placeholder value until content is entered.
 *
 * Written by Joel Jenkins (joeljenkins.me)
 * Feel free to use, modify, hack, chop, add, subtract, and anything else you feel you need to do. 
*/

$('input, textarea').keydown(function(){ // Hides label when value is entered, not on focus
		$(this).parent().find('label').hide();
});

var prefill = $('input'); // Hides label if field is pre-populated (Clicked 'back' to come and edit)
$(prefill).each(function(){
	var preval = $(this).val();
	if ( (preval) != ('') ) {
		$(this).parent().find('label').hide();
	}
});

$('input, textarea').blur(function(){ // Shows label if value is empty
	var blurry = $(this).val();
	if ( (blurry) == ('') ) {
		$(this).parent().find('label').show();
	}
});

$('label').click(function(){ // Focuses on the field when the label area is clicked
	$(this).parent().find('input').focus();
});