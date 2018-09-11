
$(document).ready(function(){
  TriggerClick = 1;

  $("#menu").click(function(){
    if(TriggerClick==0){
         TriggerClick=1;
		 $("#buttonContainer").animate({right: '-500px'}, 500);
         $("#header").animate({height:'100px'}, 500);
		 $("#content").animate({top:'130px'}, 500);
		 
    }else{
         TriggerClick=0;
		 $("#buttonContainer").animate({right: '0px'}, 500);
         $("#header").animate({height:'400px'}, 500);
		 $("#content").animate({top:'430px'}, 500);
    };
  });
  
  $( window ).resize(function() {
    if(window.matchMedia("(min-width: 700px)").matches) {
	TriggerClick=0;
         $("#buttonContainer").css({right: '0px'});
         $("#header").css({height:'300px'});
		 $("#content").css({top:'360px'});
      } else {
	 TriggerClick=1;
		 $("#buttonContainer").css({right: '-500px'});
         $("#header").css({height:'100px'});
		 $("#content").css({top:'130px'});
      }
	});
});