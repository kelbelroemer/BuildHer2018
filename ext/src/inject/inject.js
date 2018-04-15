window.onload = function() {
	console.log("found");

	function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}

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


/* console.log($("h3.movieTitle"));

$("div.movieInfo").find(".movieTitle").each(function(){
	var title = $(this).text().trim();
	console.log("this is the movie info function");
	console.log(title);
	chrome.runtime.sendMessage({
		movieTitle: title
	},
	function(response){
		var score;
		if(response.info[0]["rating"] == 3){
			score = "pass";
		}
		else{
			score = "fail";
		}
	})
	if(score == "pass"){
		$(".mb-movies").each(function(i, obj){
			$(this).find(".tMeterIcon").append("<img src=../../icons/pass.png/>");
		});
	}
	else{
		$(".mb-movies").each(function(i, obj){
			$(this).find(".tMeterIcon").append("<img src=../../icons/fail.png/>");
		});
	}
})
*/
