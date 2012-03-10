$(document).ready(function () {
       
	   $('.tab1 a').on('click',function (e) {
	
		   $('.indiv').load('tab1-aj-in.html');
	  
	
});

	   $('.tab2 a').on('click',function (e) {
	  
	  		
		   $('.indiv').load('tab2-aj-in.html');
	  
	
});

	   $('.tab3 a').on('click',function (e) {
	  

		   $('.indiv').load('tab3-aj-in.html');
	  
	
});

	   $('.tab4 a').on('click',function (e) {
	 
		   $('.indiv').load('tab4-aj-in.html');
	  
	
});
	

});

//$('.ajax-in').on('click',function(ev){
//	 $('.fill-me').load('ajax-in.html');  //AJAX paths  are relative to the HTML file not the JS file.