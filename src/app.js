/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ws = new WebSocket('ws://162.243.253.135:8082');    // Replace with IP of computer running server
var i = 0;



var ipServer = '162.243.253.135';
var portServer = '8085';
var base_url = "http://"+ipServer+":"+portServer;

function sendPrev() {
//  var response;
  var req = new XMLHttpRequest();
  req.open('GET', base_url+"/prev.html", true);
//  req.open('GET', base_url+"/prev.html", true);
//  req.onload = function(e) {
//    if (req.readyState == 4) {
//      if(req.status == 200) {
//        console.log('SendPrev');
//      }
//    }
//  }
  req.send("danPrev");
}

function sendi() {
//  var response;
  var req = new XMLHttpRequest();
  req.open('GET', base_url+"/"+String(i), true);
//  req.open('GET', base_url+"/prev.html", true);
//  req.onload = function(e) {
//    if (req.readyState == 4) {
//      if(req.status == 200) {
//        console.log('SendPrev');
//      }
//    }
//  }
  req.send("dani");
}


function sendNext() {
//  var response;
  var req = new XMLHttpRequest();
  req.open('GET', base_url+"/next.html", true);
//  req.onload = function(e) {
//    if (req.readyState == 4) {
//      if(req.status == 200) {
//        console.log('SendNext');
//      } 
//    }
//  }
  req.send("danNext");
}

Pebble.addEventListener("ready",
    function(e) {
        console.log("connect!" + e.ready);
        console.log(e.type);
    }
);





ws.onmessage = function (event) { 
    
    var card = new UI.Card();
    card.title('Data from server');
    card.body(event.data);
    card.show();
};


var main = new UI.Card({
  title: 'Connected',
  icon: 'images/menu_icon.png',
  subtitle: 'Waiting for data'
});
main.show();

main.on('click', 'down', function(e) {
//  var card = new UI.Card();
  //ws.open();
//  s.send("test",0,4,8082,162.243.253.135);
//  ws.send(String(i));
//  card.title('A Card');
//  card.subtitle('Is a Window');
//  card.body(String(i));
  i = i+1;
  sendi();
  main.subtitle(String(i));
  main.show();
//  card.show();
});

main.on('click', 'up', function(e) {
  i = i-1;
  sendi();
  main.subtitle(String(i));
  main.show();
});


