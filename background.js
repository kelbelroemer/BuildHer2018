

chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({color: '#3aa757'}, function() {
		console.log("The color is green.");
	});

	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'developer.chrome.com'},
		})
		],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});
/*chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.active) {
 		chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
 +			function(tabs){
 +				var url = new URL(tabs[0].url);
 +				var domain = url.hostname
 +
 +				var movie_zero = {
 +					type: "no_pass",
 +					title: "Source: " + domain,
 +					message: "This movie does not pass the Bechdel Test",
 +					iconUrl: "" //need icon for 
 +				}
 +				var movie_one = {
 +					type: "pass",
 +					title: "Source: " + domain,
 +					message: "This movie passes the Bechdel Test"
 +					iconUrl: "g" //need icon for pass
}
 +				var movie_dict = {
 +					//'www.breitbart.com': rating_two,
 +					//'www.infowars.com': rating_three,
 +					//'www.apnews.com': rating_zero
 +				}
 +				chrome.notifications.create(movie_dict[domain]);
 +			});
 +	}
 +}) */