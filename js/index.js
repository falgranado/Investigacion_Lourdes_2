/**
 * @author Ch32k0
 */

function initialize(){
	/*Function structure :
	 * (order):(what should be selcted with)
	 * 
	 *=>Click listener: id
	 * ==>list of click listener: id
	 * 	===>child of list: class
	 * 	  ====>list inside child node: class
	 * 
	 * */
	
	
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
				start: $('.product_definition_list').hide()
				})
		});
	});
	$('#product_definition').click(function(){
		$('#product_definition_list').toggle({
			duration:700,
			start: $('.clinical_needs_list').hide()
		});
	});
	
	$('#clinical_needs').click(function(){
		$('#clinical_needs_list').toggle({
			duration:700,
		});
	});
};
$(document).ready(function(){
	initialize();
});