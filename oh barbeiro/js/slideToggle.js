
$(function(){
	$('nav.mobile i').click(function(){
		var el = $(this).parent().find('ul');
		if(el.is(':visible') == false){
		 el.slideToggle(1000);
		}else{
			el.slideToggle();
		}
	})
})
