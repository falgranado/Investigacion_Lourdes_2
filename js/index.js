/**
 * @author Ch32k0
 */

function initialize(){

	$('#medical_devices').click(function(){
		$('.medical_devices_list').toggle({
			duration:700,
			start: $('.product_development_child').hide()
		});
	});
	
	$('#product_development').click(function(){
		$('#product_development_list').toggle({
			duration:700,
			start:$('.product_development_child').toggle({
				duration:700,
				
			})
		});
	});
};
$(document).ready(function(){
	initialize();
});
