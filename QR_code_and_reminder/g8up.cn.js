chrome.tabs.getSelected( null , function ( tab ){
	var url = "http://chart.googleapis.com/chart?cht=qr&chs=300x300&choe=UTF-8&chld=L|1&chl=" + tab.url;
	document.querySelector('#qrcode').src = url;
});