$(document).ready(function(){
   $('ul li a:first').addClass('active');
   $('#contenedor').load('resources/integrantes.html');

   $('.nav-link').click(function(){
   	$('ul li a').removeClass('active');
   	$(this).addClass('active');
   	$('#contenedor div').hide();

      var link = 'resources/'+ $(this).attr('id')+'.'+'html';
		$('#contenedor').load(link);
	    return false;
   });
});