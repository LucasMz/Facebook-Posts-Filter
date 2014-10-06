console.log('Estoy en Facebook');

$('#addKeyword').on('click',function(){
	console.log('aca');
	alert($('#keywordName').val());
});

$(document).ready(function() {
   $( "p:contains('River')" ).
	parent( "div" ).
	parent( "div" ).
	parent( "div" ).
	css( "background", "#222" );
});

