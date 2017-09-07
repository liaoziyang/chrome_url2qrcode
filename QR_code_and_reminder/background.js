function show1() {
    var time = new Date().format('yyyy-MM-dd hh:mm:ss');
      // 创建一个notification
     var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Now time is',    // title
         time    // body.
      );
      // 显示notification
      notification.show();
}
function show2() {
     var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'You should know',    // title
        'Go to study!!!'   // body.
      );
      // 显示notification
      notification.show();
}
function show3() {
    var now =parseInt(Math.random()*10);
	switch(now)
	{
		case 0:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'The past is gone and static. Nothing we can do will change it. Thefuture is before us and dynamic. Everything we do will affect it.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 1:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'You laugh at me for being different, but I laugh at you for being the same.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 2:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'The consequences of today are determined by the actions of the past. To change your future, alter your decisions today.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 3:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'Experience is a hard teacher because she gives the test first, the lesson afterwards.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 4:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'Ability may get you to the top, but it takes character to keep you there.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 5:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'Life is not measured by the number of breaths we take, but by the moments that take our breath away.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 6:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'Do not went around saying the world owes you a living. The world owes you nothing. It was here first.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 7:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'What gets us into trouble is not what we do not know.It is what we know for sure that just do so.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 8:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'Life is too short to wake up in the morning with regrets. So, love the people who treat you right and forget about the ones who do not.'   // body.
      );
      // 显示notification
      notification.show();
	  break;
	  case 9:  var notification = window.webkitNotifications.createNotification(
        '48.png',    // 图片，在web_accessible_resources 中添加了
        'Please value the time',    // title
        'People who are serious about the relation are moody as they have devoted a lot that makes them worry about gains and losses. '   // body.
      );
      // 显示notification
      notification.show();
	  break;
	}
}
function show4() {
    var notification = window.webkitNotifications.createNotification(
       '48.png',    // 图片，在web_accessible_resources 中添加了
       'You have play the computer for',    // title
        i+' Hours'+a*30+' minute'  // body.
     );
    // 显示notification
    notification.show();
}
Date.prototype.format = function(format){
    var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
    RegExp.$1.length==1 ? o[k] :
    ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}

if(window.webkitNotifications) {
      show1();
      show2();
      show3();
      var interval = 0;
      var times = 10;
      var i = 0;
      var a = 1;
      var timer = setInterval(function() {
        interval++;
        if (1800 <= interval) {
              show1();
              show2();
              show4();
              interval = 0;
              times--;
              a++;
              if (times < -0) clearInterval(timer);
              if (a == 2) {
                  i++;
              }
              a = a % 2;
        }
      }, 1000);
}