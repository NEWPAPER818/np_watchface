


var now = new Date().getTime()
var start_show = new Date('2022-02-16 00:00:00').getTime()  //event start time UTC(GMT+0)
var end_show = new Date('2022-02-25 23:59:00').getTime()    //event end time UTC(GMT+0)

var m = new Date().getTimezoneOffset();
start_show -= (m * 1000 * 60);  //to local time
end_show -= (m * 1000 * 60);

if (start_show <= now && now <= end_show){
  var end_timer = new Date('2022-02-11 23:59:00').getTime();  //timer end time UTC(GMT+0)

  end_timer -= (m * 1000 * 60);   //to local time
  var RemainDate = end_timer - now;


  function Timer() {

    var d = Math.floor((RemainDate % (1000 * 60 * 60 * 24 * 365)) / (1000*60*60*24));
    var h = Math.floor((RemainDate % (1000 * 60 * 60 * 24)) / (1000*60*60));
    var m = Math.floor((RemainDate % (1000 * 60 * 60)) / (1000*60));
    var s = Math.floor((RemainDate % (1000 * 60)) / 1000);

    var day, hr, min, sec;

    if (d == 0) {
      day ="";
    }
    else {
      day = d + "d ";
    }

    if (d == 0 && h == 0) {
      hr = "";
    }
    else {
      hr = h + "h ";
    }

    if (d == 0 && h == 0 && m == 0) {
      min = "";
    }
    else {
      min = m + "m ";
    }

    sec = s + "s ";


    text = day + hr + min + sec + "Left"; // remain time

    document.getElementById("timer").innerHTML = text;

    if (d == 0 && h == 0 && m == 0 && s == 0) {

    }
    else {
      RemainDate -= 1000;
    }
  }

  Timer();

  setInterval('Timer()', 1000); //interval 1sec
}
else {
  document.getElementById("event_new").style.display = "none";
}

// document.getElementById("event_free").style.display = "none";
