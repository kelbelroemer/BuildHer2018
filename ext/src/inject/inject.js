window.onload = function() {
	console.log("found");


$("#heroImageContainer").find(".title").each(function(){
	var title = $(this).text().trim();
	console.log("Title is:" + title);
	chrome.runtime.sendMessage({
		movieTitle: title
	},
	function(response) {
		var info;
		var pic;
		if(response.info[0]["rating"] == 3){
			info = "Pass";
			pic = "icons/pass.png";
		}
		else{
			info = "Fail";
			pic = "icons/fail.png";
		}
		//var info = response.info[0]["rating"]
		console.log(info);
		$(".audience-panel").each(function(i, obj){
			$(this).find("h3").prepend("<h2>Bechdel Test: " + info).prepend("</h2>");
		});
	});
});
}
