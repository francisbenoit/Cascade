chrome.extension.sendMessage({method: "getStatus"}, function(response) {
  if (response.status == "on") {
    var css = "* {overflow: visible !important; position: fixed !important; background: transparent !important; text-align: center !important; font-family: 'Helvetica' !important; display: inline-block !important;}" +
    "html {display: inline !important;}" +
    "*:not(p) {color: transparent !important;}" +
    "div {float: right !important; position: absolute !important; display: inline-block !important;}" +
    "img {float: left !important; position: absolute !important; display: inline !important;}" +
    "p {position: absolute !important; text-align: center !important; display: inline-block !important;}" +
    "h1 {position: absolute !important; display: inline-block !important;}" +
    "h2 {position: absolute !important; display: inline-block !important;}" +
    "h3 {position: absolute !important; display: inline-block !important;}" +
    "h4 {position: absolute !important; display: inline-block !important;}" +
    "h5 {position: absolute !important; display: inline-block !important;}" +
    "h6 {position: absolute !important; display: inline-block !important;}" +
    "span {position: absolute !important;}" +
    "a {text-decoration: underline !important;}";
    var head = document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    var p = $("p");
    var img = $("img");
    var font_size, opacity, slantSkew, slantRotate, slantRotate, rotate, zIndex, col, red, blue, top, left, maxWidth;

    $("*").css("display", "none");
    $("p:nth-child(3), a:nth-child(3), h1:nth-child(3), h2:nth-child(3), h3:nth-child(3), h4:nth-child(3), h5:nth-child(3), h6:nth-child(3), span:nth-child(3)").css("display", "inline");
    $("p:nth-child(11), a:nth-child(11), h1:nth-child(11), h2:nth-child(11), h3:nth-child(11), h4:nth-child(11), h5:nth-child(11), h6:nth-child(11), span:nth-child(11)").css("display", "inline");
    $("p:nth-child(15), a:nth-child(15), h1:nth-child(15), h2:nth-child(15), h3:nth-child(15), h4:nth-child(15), h5:nth-child(15), h6:nth-child(15), span:nth-child(15)").css("display", "inline");

    for (var i = 0; i < p.length; i++) {
      font_size = Math.floor((Math.random() * 50) + 10);
      zIndex = Math.floor((Math.random() * 100));
      opacity = map_range(font_size, 10, 50, 1, 0.4);
      slantSkew = map_range(font_size, 10, 50, 0, 60);
      slantRotate = map_range(font_size, 10, 50, 0, 45);
      rotate = Math.floor((Math.random() * 45));
      col = Math.floor((Math.random() * 10));
      red = "rgb(255, 0, 0)";
      blue = "rgb(0, 0, 255)";
      top = Math.floor((Math.random() * 900) + 100);
      left = Math.floor((Math.random() * 1500) + 100);
      leftImage = map_range(left, 100, 1500, 50, 900);
      maxWidth = Math.round(map_range(font_size, 10, 50, 600, 2000));

      p[i].style.fontSize = font_size + "pt";
      p[i].style.opacity = opacity;
      p[i].style.zIndex = zIndex;
      p[i].style.maxWidth = maxWidth + "px";
      p[i].style.left = left + "px";

      $(img[i]).css({"top": top, "left": leftImage, "z-index": zIndex + 100, "opacity": opacity});

      if (col > 1 && col < 4) {p[i].style.color = red;}
      else if (col > 7 && col < 10) {p[i].style.color = blue;}
      else {p[i].style.color = "black";}

      if (col == 3 || col == 4) {
        var rdm = Math.floor((Math.random() * 3));

        if (rdm == 1) {p[i].style.transform = "skewX(" + slantSkew + "deg) rotate(" + slantRotate + "deg)"; p[i].style.maxWidth = "600px";}
        if (rdm == 2) {p[i].style.transform = "rotate(" + rotate + "deg)";}
        if (rdm == 3) {p[i].style.transform = "rotate(90deg)";}
      }
      if (col == 7 || col == 8) {
        var rdm = Math.floor((Math.random() * 3));

        if (rdm == 1) {p[i].style.transform = "skewX(" + slantSkew + "deg) rotate(" + slantRotate + "deg)"; p[i].style.maxWidth = "600px";}
        if (rdm == 2) {p[i].style.transform = "rotate(" + rotate + "deg)";}
        if (rdm == 3) {p[i].style.transform = "rotate(90deg)";}
      }

      if (font_size >= 29 && font_size <= 31) {p[i].style.textDecoration = "underline";}

      left *= 10;
    }

    style.setAttribute("id", "overload");
    style.type = "text/css";

    function map_range(value, low1, high1, low2, high2) {
      return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }



    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    document.getElementsByTagName("html")[0].style.visibility = "visible";


  } else {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }

  //catch weird html repaint and what not
  setTimeout(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }, 1000);
  setTimeout(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }, 2000);
  setTimeout(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }, 3000);
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  var styles = document.getElementById("overload");
  var css = "* {overflow: visible !important; position: fixed !important; background: transparent !important; text-align: center !important; font-family: 'Helvetica' !important; display: inline-block !important;}" +
  "html {display: inline !important;}" +
  "*:not(p) {color: transparent !important;}" +
  "div {float: right !important; position: absolute !important; display: inline-block !important;}" +
  "img {float: left !important; position: absolute !important; display: inline !important;}" +
  "p {position: absolute !important; text-align: center !important; display: inline-block !important;}" +
  "h1 {position: absolute !important; display: inline-block !important;}" +
  "h2 {position: absolute !important; display: inline-block !important;}" +
  "h3 {position: absolute !important; display: inline-block !important;}" +
  "h4 {position: absolute !important; display: inline-block !important;}" +
  "h5 {position: absolute !important; display: inline-block !important;}" +
  "h6 {position: absolute !important; display: inline-block !important;}" +
  "span {position: absolute !important;}" +
  "a {text-decoration: underline !important;}";
  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  var p = $("p");
  var img = $("img");
  var font_size, opacity, slantSkew, slantRotate, slantRotate, zIndex, col, red, blue, top, left, maxWidth;

  $("*").css("display", "none");
  $("p:nth-child(3), a:nth-child(3), h1:nth-child(3), h2:nth-child(3), h3:nth-child(3), h4:nth-child(3), h5:nth-child(3), h6:nth-child(3), span:nth-child(3)").css("display", "inline");
  $("p:nth-child(11), a:nth-child(11), h1:nth-child(11), h2:nth-child(11), h3:nth-child(11), h4:nth-child(11), h5:nth-child(11), h6:nth-child(11), span:nth-child(11)").css("display", "inline");
  $("p:nth-child(15), a:nth-child(15), h1:nth-child(15), h2:nth-child(15), h3:nth-child(15), h4:nth-child(15), h5:nth-child(15), h6:nth-child(15), span:nth-child(15)").css("display", "inline");

  for (var i = 0; i < p.length; i++) {
    font_size = Math.floor((Math.random() * 50) + 10);
    zIndex = Math.floor((Math.random() * 100));
    opacity = map_range(font_size, 10, 50, 1, 0.4);
    slantSkew = map_range(font_size, 10, 50, 0, 60);
    slantRotate = map_range(font_size, 10, 50, 0, 45);
    rotate = Math.floor((Math.random() * 45));
    col = Math.floor((Math.random() * 10));
    red = "rgb(255, 0, 0)";
    blue = "rgb(0, 0, 255)";
    top = Math.floor((Math.random() * 900) + 100);
    left = Math.floor((Math.random() * 1500) + 100);
    leftImage = map_range(left, 100, 1500, 50, 900);
    maxWidth = Math.round(map_range(font_size, 10, 50, 600, 1000));

    p[i].style.fontSize = font_size + "pt";
    p[i].style.opacity = opacity;
    p[i].style.zIndex = zIndex;
    p[i].style.maxWidth = maxWidth + "px";
    p[i].style.left = left + "px";

    $(img[i]).css({"top": top, "left": leftImage, "z-index": zIndex + 100, "opacity": opacity});

    if (col > 1 && col < 4) {p[i].style.color = red;}
    else if (col > 7 && col < 10) {p[i].style.color = blue;}
    else {p[i].style.color = "black";}

    if (col == 3 || col == 4) {
      var rdm = Math.floor((Math.random() * 3));

      if (rdm == 1) {p[i].style.transform = "skewX(" + slantSkew + "deg) rotate(" + slantRotate + "deg)"; p[i].style.maxWidth = "600px";}
      if (rdm == 2) {p[i].style.transform = "rotate(" + rotate + "deg)";}
      if (rdm == 3) {p[i].style.transform = "rotate(90deg)";}
    }
    if (col == 7 || col == 8) {
      var rdm = Math.floor((Math.random() * 3));

      if (rdm == 1) {p[i].style.transform = "skewX(" + slantSkew + "deg) rotate(" + slantRotate + "deg)"; p[i].style.maxWidth = "600px";}
      if (rdm == 2) {p[i].style.transform = "rotate(" + rotate + "deg)";}
      if (rdm == 3) {p[i].style.transform = "rotate(90deg)";}
    }

    if (font_size > 29 && font_size < 31) {p[i].style.textDecoration = "underline";}

    left *= 10;
  }

  style.setAttribute("id", "overload");
  style.type = "text/css";

  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }

  if (request.method == "start") {
    //append whatever you have
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }
  if (request.method == "stop") {
    if (styles) {
      styles.parentNode.removeChild(styles);
      //remove other stuff
    }
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }
  if (request.method == "switchstart") {
    if (!styles) {
      //append whatever you have
    }
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }
  if (request.method == "switchstop") {
    if (styles) {
      styles.parentNode.removeChild(styles);
      //remove other stuff
    }
  }
})
