//basic load function of website
//GaumKap 13.2 version 2018

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

async function firstloadfun() {

  var lsb = 1;
  var sbbnu_v = 1;
  var firstload = getCookie("firstload");
  //if (firstload != '1'){ window.location.replace("./wellcome.htm");}else{window.lobir();}
  window.lobir();
}

//lobir is an function run multiple mods onload
async function lobir(){

  $("#showbar_ac").load("cases/main.htm");
  $("#about_ac").load("cases/about.htm");
  $("#softwares_ac").load("cases/soft.htm");
  $("#version").load("cases/version.gaum");

  //function day night cycle aparently it work....
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());

  if (h < 7 && h > 20) {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.background = '#D5F6FF';
    document.body.style.color = 'black';
  }
  document.getElementById("hideAll").style.display = "none";
  document.body.style.overflow = '';
}

//useless function
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//return to home (refrech)
async function back_home() { window.location.href = "http://labgaumkap.16mb.com/" }

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
//android website
if( isMobile.any() ) window.location.replace("/m.htm");

function sb_button_side(sbbsi){
  if (sbbsi == 0){
    var sbbnu_v =+ 1;
    sb_top(sbbnu_v);
  }
  else if (sbbsi == 1){
    var sbbnu_v =- 1;
    sb_top(sbbnu_v);
  }
}

async function sb_top(sbnu){

  if (sbnu == 1){
    document.getElementById('sb_bu_1').src = 'im/scroll_on.png';
    document.getElementById('sb_bu_4').src = 'im/scroll_off.png';
    document.getElementById('sb_bu_3').src = 'im/scroll_off.png';
    document.getElementById('sb_bu_2').src = 'im/scroll_off.png';

    document.getElementById('sb_gl_1').style = 'visibility:;opacity:1;display:;';
    document.getElementById('sb_gl_2').style = 'visibility:hidden;opacity:0;display:none;';
    document.getElementById('sb_gl_3').style = 'visibility:hidden;opacity:0;display:none;';
    document.getElementById('sb_gl_4').style = 'visibility:hidden;opacity:0;display:none;';


  }
  else if (sbnu == 2){
    document.getElementById('sb_bu_2').src = 'im/scroll_on.png';
    document.getElementById('sb_bu_1').src = 'im/scroll_off.png';
    document.getElementById('sb_bu_4').src = 'im/scroll_off.png';
    document.getElementById('sb_bu_3').src = 'im/scroll_off.png';

    document.getElementById('sb_gl_1').style = 'visibility:hidden;opacity:0;display:none;';
    document.getElementById('sb_gl_2').style = 'display:;visibility:;opacity:1;';
    document.getElementById('sb_gl_3').style = 'visibility:hidden;opacity:0;display:none;';
    document.getElementById('sb_gl_4').style = 'visibility:hidden;opacity:0;display:none;';;
  }
  else if (sbnu == 3) {
    document.getElementById('sb_bu_3').src = 'im/scroll_on.png';
    document.getElementById('sb_bu_2').src = 'im/scroll_off.png';
    document.getElementById('sb_bu_1').src = 'im/scroll_off.png';
    document.getElementById('sb_bu_4').src = 'im/scroll_off.png';

    document.getElementById('sb_gl_1').style = 'visibility:hidden;opacity:0;display:none;';
    document.getElementById('sb_gl_2').style = 'visibility:hidden;opacity:0;display:none;';
    document.getElementById('sb_gl_3').style = 'display:;visibility:;opacity:1;';
    document.getElementById('sb_gl_4').style = 'visibility:hidden;opacity:0;display:none;';
  }
  else if (sbnu == 4){
    document.getElementById('sb_bu_4').src = 'im/scroll_on.png';
    document.getElementById('sb_bu_3').src = 'im/scroll_off.png';
    document.getElementById('sb_bu_2').src = 'im/scroll_off.png';
    document.getElementById('sb_bu_1').src = 'im/scroll_off.png';

    document.getElementById('sb_gl_1').style = 'visibility:hidden;opacity:0;display:none;';
    document.getElementById('sb_gl_2').style = 'visibility:hidden;opacity:0;display:none;';;
    document.getElementById('sb_gl_3').style = 'visibility:hidden;opacity:0;display:none;';
    document.getElementById('sb_gl_4').style = 'display:;visibility:;opacity:1;';
  }
  else if (sbnu == 5){
    var sbbnu_v = 1;
    window.sb_top(1);
  }
  else if (sbnu == 0){
    var sbbnu_v = 1;
    windows.sb_top(1)
  }
}

async function men_dz() {
  window.location.href = "./dev";
}
