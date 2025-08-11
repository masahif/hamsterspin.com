/*!*============================================================
create 2015-4-13
============================================================*/
var USER_AGENT = navigator.userAgent;var device = "pc";
if (USER_AGENT.indexOf("iPhone") > 0 || (USER_AGENT.indexOf("Android") > 0 && USER_AGENT.indexOf("mobile") > 0)) {
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui,user-scalable=no">');
	device = "sp";
}	
var SACObj ;
$(window).load(function(){
	$("a").addClass("show");
	SACObj = new SWFACObject("spinArea","./image/hamsprite.png",{"fps":24,"loop":true,"w":200,"h":200,"total":7,"td":7,"frames":{}});
	SACObj.start();
	var logo = $(".logo");var spin = $(".spinArea");
	if(device == "pc"){
		SACObj.gotoAndStop(2);
		spin.addClass("hide");
		$("a.jump").hover(function () {SACObj.start();spin.removeClass("hide");logo.hide();},function () {SACObj.gotoAndStop(2);spin.addClass("hide");logo.show();});				
	}else{
		logo.remove();
	}
});