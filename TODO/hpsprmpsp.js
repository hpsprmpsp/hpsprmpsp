// JavaScript source code
// hpsprmpsp
//This is my library, and yes all of them exist. But you are forgetting the point,
//It's my fucking library, not yours. So suck it up butter cup or that butter be going in through some other hole with the knife.

//Reverse a strings
function reverse(a) {
    var s = "";
    var k = String(a);
    var l = k.length;
    var i;
    for (i = l; i > 0; i--) {
        s = s + k[i - 1];
    }
    return s;
}
// change into upper case
function UCase(a) {
    var s = "";
    var k = String(a);
    var l = k.length;
    var z, m;
    for (var i = 0; i < l; i++) {
        z = k[i].charCodeAt(0);
        if (z > 96 && z < 123) {
            m = z - 32;
            s += String.fromCharCode(String(m));
        } else {
            s += String.fromCharCode(String(z));
        }
    }
    return s;
}

//change into lower case
function LCase(a) {
    var s = "";
    var k = String(a);
    var l = k.length;
    var z, m;
    for (var i = 0; i < l; i++) {
        z = k[i].charCodeAt(0);
        if (z > 64 && z < 91) {
            m = z + 32;
            s += String.fromCharCode(String(m));
        } else {
            s += String.fromCharCode(String(z));
        }
    }
    return s;
}
//check if prime number
function Prime(a) {
    if (a == 1) {

        return "1 is a special number!!!";
    }
    var c = 0;
    x = Number(a);
    for (var i = 2; i <= x; i++) {
        if (x % i == 0) {
            c++;
        }
    }
    if (c > 1) {
        return false;
    } else {
        return true;
    }
}
//get all prime number between 2 and a
function Primebetween(a) {
    if (a == 1) {
        return "1 is a special number!!!";
    }
    var x = "";
    var b = Number(a);
    for (var i = 2; i <= b; i++) {
        if (Prime(i)) {
            if (x == "") {
                x += String(i);
            } else {
                x += ", " + String(i);
            }
        }
    }
    return x;
}

//get all conjugates between 2 and a
function Conjugatebetween(a) {
    if (a == 1) {
        return "1 is a special number!!!";
    }
    var x = "";
    var b = Number(a);
    for (var i = 2; i <= b; i++) {
        if (!Prime(i)) {
            if (x == "") {
                x += String(i);
            } else {
                x += ", " + String(i);
            }
        }
    }
    return x;
}

//get a fibonacci series starting from a, ending at b
function fibonacci(a, b) { //b should be grater than a
    var x = Number(a);
    var y = Number(b);
    if (x >= y) {
        alert("b should be greater than a.");
        return null;
    }
    var z = [];
    z[0] = 0;
    z[1] = x;
    for (var i = 2; i < (y - x); i++) {
        z[i] = z[i - 1] + z[i - 2];
        if (z[i - 1] + z[i] >= y) {
            i = (y - x) + 1;
            return z;
        }
    }
    return z;
}
//remove an element from an array
function removeAt(array, index) { //remove an item in nth index
    var a = [];
    a = array;
    var b = Number(index);
    for (var i = b; i < a.length; i++) {
        a[i] = a[i + 1];
    }
    a.length = a.length - 1;
    return a;
}
//remove an elemnt from string
function StringRemoveAt(string, index) { //remove char at nth index
    var x = String(string);
    var a = x.split("");
    var b = Number(index);
    var o = "";
    for (var i = b; i < a.length; i++) {
        a[i] = a[i + 1];
    }
    a.length = a.length - 1;
    for (var l = 0; l < a.length; l++) {
        o += a[l];
    }
    return o;
}

//======================================================
//=====================Analog Clock=====================
//======================================================
function getAnalogClock(canvasID) { //get color as arguement
    var c = document.getElementById(canvasID);

    var ctx = c.getContext("2d");
    var r = c.height / 2;
    ctx.translate(r, r);
    r = r * 0.90;
    setInterval(drawClock, 1000);

    function drawClock() {
        drawFace();
        drawNumber();
        drawTime();
    }

    function drawFace() {
        var g;
        //clock round background
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(0, 0, r, 0, 2 * Math.PI);
        ctx.fill();
        //ouside border of clock
        g = ctx.createRadialGradient(0, 0, r * 0.95, 0, 0, r * 1.05);
        g.addColorStop(0, "black");
        g.addColorStop(0.5, "white");
        g.addColorStop(1, "black");
        ctx.strokeStyle = g;
        ctx.lineWidth = 0.1 * r;
        ctx.stroke();
        //innermost circle
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.1, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    function drawNumber() {
        var ang, num;
        ctx.font = r * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -r * 0.85);
            ctx.rotate(-ang);
            ctx.fillStyle = "black";
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, r * 0.85);
            ctx.rotate(-ang);
        }
    }

    function drawTime() {
        //get current time
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();

        h = h % 12;
        h = (h * Math.PI / (6)) + (m * Math.PI / (6 * 60)) + (s * Math.PI / (360 * 60));
        m = (m * Math.PI / (30)) + (s * Math.PI / (30 * 60));
        s = s * Math.PI / 30;
        drawHand(h, r * 0.5, r * 0.1, "black");
        drawHand(m, r * 0.7, r * 0.07, "black");
        drawHand(s, r * 0.9, r * 0.03, "black");

    }

    function drawHand(pos, len, wid, col) {
        ctx.beginPath();
        ctx.lineWidth = wid;
        ctx.lineCap = "round";
        ctx.strokeStyle = col
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -len);
        ctx.stroke();
        ctx.rotate(-pos);
    }
}

//get query string value from url
//var a = getQueryString()['queryStringName'];
function getQueryString() {
    var a = {};
    var u = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi, function (m, key, value) {
        a[key] = value;
    });
    return a;
}
//get Random colors
function getRandomColor() {
    var a = "1234567890ABCDEF";
    var clr = "#";
    for (var i = 0; i < 6; i++) {
        clr += a[Math.floor(Math.random() * 16)];
    }
    return clr;
}

//get a loading screen
//create an animation as below
/*
@keyframes newAn{
                0% {transform: scale(0.5);}
                25% {transform: scale(1);}
                75% {transform: scale(0.5);}
                100% {transform: scale(0);}
            }
*/
function getLoading_concentric_cirle(divElem, circle_count, circle_height, circle_width) {
    var a = Number(circle_count);
    var h = Number(circle_height);
    var w = Number(circle_width);
    var dv = document.getElementById(divElem);
    if (a == undefined || h == undefined || w == undefined) {
        alert("provide count, height,width");

        a = 5;
        h = 200;
        w = 200;
    }
    var wt = (dv.clientWidth) / 2;
    var ht = (dv.clientHeight) / 2;
    var int1;
    var int2;
    var elem;
    for (var i = 1; i <= a; i++) {
        elem = document.createElement("DIV");
        elem.style.position = "absolute";
        elem.style.backgroundColor = "transparent";
        elem.style.border = "10px solid black";
        elem.style.borderRadius = "50%";
        elem.style.animationName = "newAn";
        elem.style.animationIterationCount = "infinite";
        elem.style.animationTimingFunction = "linear";
        elem.style.borderWidth = String(0.10 * w) + "px";
        elem.style.left = String(wt - (w / 2)) + "px";
        elem.style.top = String(ht - (h / 2)) + "px";
        elem.style.width = String(h) + "px";
        elem.style.height = String(w) + "px";
        elem.style.borderColor = getRandomColor();
        elem.style.animationDuration = String((Number(a) + 1) - i) + "s";
        //elem.style.animationDelay=String(i)+"s";
        dv.appendChild(elem);
    }
}



//progress bar
function getProgressbar(divElem, backColor, fontColor, button, buttonEvent) {

    var dv = document.getElementById(divElem);
    var pb = document.createElement("DIV");
    pb.style.position = "absolute";
    pb.style.top = "0px";
    pb.style.left = "0px";
    pb.style.width = "0px" /*String(dv.clientWidth)+"px";*/
    pb.style.height = String(dv.clientHeight) + "px";
    pb.style.textAlign = "center";
    pb.style.color = fontColor;
    pb.style.padding = "5px";
    //pb.style.transition="width 10s";
    pb.style.backgroundColor = backColor;
    dv.appendChild(pb);
    var bt = document.getElementById(button);
    var k = 0;
    bt.addEventListener(butonEvent, function () {
        var a = setInterval(progress, 10);
    });

    function progress() {
        if (k >= 100) {
            clearInterval(a);
        } else {
            k++;
            pb.style.width = k + "%";
            pb.innerHTML = k + "%";

        }
    }
}



//calculate BMI

function getBMI(div) {
    var a = document.createElement("div");
    var b = document.createElement("input");
    var c = document.createElement("input");
    var d = document.createElement("SPAN");
    var e = document.createElement("SPAN");
    var f = document.createElement("SPAN");

    //CSS main div
    a.style.position = "absolute";
    a.style.top = '0px';
    a.style.left = "0px";
    a.style.height = "200px";
    a.style.width = "300px";
    //a.style.border="1px solid #0d7cd4";

    //css inputs
    b.style.position = "absolute";
    b.style.top = '20px';
    b.style.left = "10px";
    b.style.width = "280px";
    b.style.height = '30px';
    b.type = "number";
    b.placeholder = "Your weight in Kgs";
    b.style.border = "1px solid #0d7cd4";
    b.min = 0.1;
    c.style.position = "absolute";
    c.style.top = '70px';
    c.style.left = "10px";
    c.style.width = "280px";
    c.style.height = '30px';
    c.type = "number";
    c.placeholder = "Your height in cms";
    c.style.border = "1px solid #0d7cd4";
    c.min = 10;
    //css for span


    d.style.position = "absolute";
    d.style.top = "120px";
    d.style.left = '10px';
    d.style.width = "80px";
    d.style.height = "30px";
    d.style.lineHeight = "30px"
    d.style.textAlign = "center";
    d.style.color = "white";
    d.style.backgroundColor = "#0d7cd4";
    d.style.border = "1px solid #0d7cd4";
    var k = document.createTextNode("BMI");
    d.appendChild(k);

    e.style.position = "absolute";
    e.id = "bmi";
    e.style.top = "120px";
    e.style.left = '90px';
    e.style.width = "200px";
    e.style.height = "30px";
    e.style.lineHeight = "30px"
    e.style.textAlign = "center";
    e.style.border = "1px solid #0d7cd4";
    var l = document.createTextNode("NA");
    e.appendChild(l);

    f.style.position = "absolute";
    f.id = "statbmi";
    f.style.top = "160px";
    f.style.left = '10px';
    f.style.width = "280px";
    f.style.height = "30px";
    f.style.lineHeight = "30px"
    f.style.textAlign = "center";
    f.style.border = "1px solid #0d7cd4";
    var m = document.createTextNode("NA");
    f.appendChild(m);


    //create event
    b.onkeyup = function () {
        if (b.value > 0 && c.value > 0) {
            calcBMI(c.value, b.value)
        }
    };
    c.onkeyup = function () {
        if (b.value > 0 && c.value > 0) {
            calcBMI(c.value, b.value)
        }
    };

    a.appendChild(b);
    a.appendChild(c);
    a.appendChild(d);
    a.appendChild(e);
    a.appendChild(f);
    div.appendChild(a);

    function calcBMI(h, w) {
        var z = w / (h * h);
        z = z * 10000;
        document.getElementById("bmi").innerHTML = String(z);
        statBMI(z);

    }

    function statBMI(bmi) {
        if (bmi >= 19 && bmi <= 25) {
            document.getElementById("statbmi").innerHTML = "Good";
        } else if (bmi > 25 && bmi < 30) {
            document.getElementById("statbmi").innerHTML = "Fat";
        } else if (bmi > 30) {
            document.getElementById("statbmi").innerHTML = "Obese";
        } else if (bmi < 19) {
            document.getElementById("statbmi").innerHTML = "Anarexic";
        }
    }
}




//Conversion
//**********************************************************
//=====================================================================
// FORWARD conversion
//=====================================================================
//**********************************************************



//======================================================================
//1.  To convert a text to ASCII
//======================================================================

function convertTextToASCII(text) {
    var x, y, z, a, b, c, i, j, m;
    z = "";
    x = String(text);
    c = x.length;

    for (i = 0; i < c; i++) {
        m = ""
        y = x.substr(i, 1);

        m = String(y.charCodeAt(0));
        a = m.length;
        b = 3 - a;
        for (j = 0; j < b; j++) {
            m = "0" + m;
        }
        z = z + m;

    }

    return z;
}





//======================================================================
//2. To convert an  number to Binary
//======================================================================
function numberToBinary(asciiNum) {
    var x, y, z, a, b, i;
    x = asciiNum;

    if (x == 0) {
        a = '0';
    } else if (x == 1) {
        a = '1';
    } else {
        z = "";
        while (x > 1) {
            y = x % 2;

            if (y == 0) {
                x = x / 2;
            } else {
                x = (x - 1) / 2;
            }


            z = y + z;


        }

        a = "1" + z;
    }
    b = 8 - (a.length);
    for (i = 1; i <= b; i++) {
        a = "0" + a;
    }

    return a;
}
// for grouped ascii in a group of 3
function getBinaryFromGroupedASCII(inp) {
    var a, b, c, d, e, f, g, i;

    a = String(inp);
    b = a.length;
    c = "";

    for (i = 0; i < b; i += 3) {
        d = a.substr(i, 3);
        e = Number(d);

        c = c + numberToBinary(e);
    }
    return c;
}


//**********************************************************
//=====================================================================
// BACKWARD conversion
//=====================================================================
//**********************************************************



//======================================================================
// 1.To convert a Binary to ASCII
//======================================================================

function binaryToNumber(number) {
    var x, i, z, a, b, c, l, p;
    a = 0;
    x = String(number);

    for (i = 0; i < 8; i++) {
        y = x.substr(i, 1);

        p = Math.pow(2, 7 - i);

        z = parseInt(y) * p;

        a = a + z;
    }
    b = String(a);

    l = b.length
    c = 3 - l;

    for (i = 1; i <= c; i++) {
        b = "0" + b;
    }

    return b;
}

function getNumberFromBinary(number) {
    var a, b, c, d, e, i;

    a = String(number);

    b = a.length;

    e = "";
    for (i = 0; i < b; i += 8) {

        b = a.substr(i, 8);

        if (b != "") {
            c = Number(b);

            d = binaryToNumber(b);
            e = e + String(d);
        }

    }
    return e;
}

//======================================================================
// 2.To convert a ASCII to TEXT
//======================================================================
function convertAsciiToText(ascii) {
    var a, b;
    a = String(ascii);
    b = String.fromCharCode(a);
    return b;
}

function getTextFromASCIIinBatch(ascii) {
    var a, b, c, d, e, i;

    a = String(ascii);
    b = a.length;
    e = "";
    for (i = 0; i < b; i += 3) {
        c = a.substr(i, 3);
        if (c != "") {
            d = convertAsciiToText(c);
            e = e + d;
        }

    }
    return e;
}
//**********************************************************
//=====================================================================
// CONJUCTED conversion
//=====================================================================
//**********************************************************



//======================================================================
// To convert a Text to Binary
//======================================================================

function getBinaryFromText(txt) {
    var a, b, c, d, e, f;
    a = String(txt);

    b = convertTextToASCII(a);
    c = getBinaryFromGroupedASCII(b);
    return c;
}

function getTextFromBinary(bnr) {
    var a, b, c, d, e;
    a = String(bnr);
    b = getNumberFromBinary(a);
    c = getTextFromASCIIinBatch(b);
    return c;

}
//get three dot loader
function get_three_dots_loader(height, space, animTime, div) {
    var d1 = document.createElement("DIV");
    var d2 = document.createElement("DIV");
    var d3 = document.createElement("DIV");
    d1.id = "d1";
    d2.id = "d2";
    d3.id = "d3";
    //create style
    var s = document.createElement("style");
    s.type = "text/css";
    var a = "#d1, #d2, #d3{";
    a = a + "position:absolute;top:0px;top:0px;left:0px;width:" + height + "px; height:" + height + "px; border-radius:50%; animation-name:lol; animation-duration:" + animTime + "s; animation-timing-function: linear;animation-iteration-count: infinite;";
    a = a + "}";
    a = a + "#d1{left:" + space + "px; animation-delay:0s;}";
    a = a + "#d2{left:" + String((2 * space) + height) + "px; animation-delay:" + String(animTime / 3) + "s;}";
    a = a + "#d3{left:" + String((3 * space) + (2 * height)) + "px; animation-delay:" + String(2 * animTime / 3) + "s;}";
    a = a + "@keyframes lol{from{background-color: transparent;}to{background-color: gray;}}"

    s.innerHTML = a;
    document.getElementsByTagName('head')[0].appendChild(s);
    div.appendChild(d1);
    div.appendChild(d2);
    div.appendChild(d3);
}

//create CSS
function createCSS(name, stle) {
    var st = document.getElementsByTagName('style').length ? document.getElementsByTagName('style')[0] :
        document.createElement("style");
    st.type = 'text/css';
    st.innerHTML += " " + name + "{" + stle + "}";
    if (!document.getElementsByTagName('style').length) {
        document.getElementsByTagName("head")[0].appendChild(st);
    }
}

//  place dots in circular fashion
// create an instance of the function
// then call the init function
function dotsInCircle() {
    var wH, wW, cD, r;
    var dots = [];
    var canvas;
    dotsInCircle.prototype.init = function (noOfDots, targetElementId) {
        baseSetup(targetElementId);
        drawDots(noOfDots);
    };

    function baseSetup(targetElementId) {
        var targ = document.getElementById(targetElementId);
        canvas = document.createElement("DIV");
        wH = targ.clientHeight;
        wW = targ.clientWidth;
        cD = wH > wW ? wW : wH;
        canvas.style.height = cD + "px";
        canvas.style.width = cD + "px";
        canvas.style.top = ((wH > cD ? wH - cD : 0) / 2) + "px";
        canvas.style.left = ((wW > cD ? wW - cD : 0) / 2) + "px";
        r = (0.75 / 2) * cD;
        createCSS(".canvas-hpsprmpsp", "padding: 0px;margin: 0px;outline: none;position: absolute;left: 0px;");
        createCSS('.dot-hpsprmpsp',
            "position: absolute;height: 10px; width: 10px;border-radius: 100%;background-color: cadetblue;transform: translateX(-5px) translateY(-5px);"
        );
        canvas.classList.add('canvas-hpsprmpsp');
        targ.appendChild(canvas);
    }

    function createDot(posX, posY, angle, dotNumber) {
        let d = document.createElement('span');
        d.style.left = posX + "px";
        d.style.top = posY + "px";
        d.classList.add('dot-hpsprmpsp');
        let dot = {};
        dot.html = d;
        dot.x = posX;
        dot.y = posY;
        dot.angle = angle;
        dot.rollNumber = dotNumber;
        canvas.appendChild(d);
        dots.push(dot);
    }

    function drawDots(numberOfDots) {
        let minAngle = (2 * Math.PI) / numberOfDots;
        let x = 0;
        let y = 0;
        canvas.innerHTML = "";
        for (let i = 1; i <= numberOfDots; i++) {
            let angle = i * minAngle;
            if (angle < (Math.PI) / 2) { // 1st quadrant
                x = (r * Math.sin(angle)) + (cD / 2);
                y = (cD / 2) - (r * Math.cos(angle));
            } else if (angle <= Math.PI) { // second quadrant
                angle = Math.PI - angle;
                x = (r * Math.sin(angle)) + (cD / 2);
                y = (cD / 2) + (r * Math.cos(angle));
            } else if (angle > Math.PI && angle <= (1.5 * Math.PI)) { // 3rd quadrant
                angle = angle - Math.PI;
                x = (cD / 2) - (r * Math.sin(angle));
                y = (cD / 2) + (r * Math.cos(angle));
            } else { // fourth quadrant
                angle = (2 * Math.PI) - angle;
                x = (cD / 2) - (r * Math.sin(angle));
                y = (cD / 2) - (r * Math.cos(angle));
            }
            createDot(x, y, angle, i);
        }

    }
    dotsInCircle.prototype.dots = dots;

}


const hexToRGB = hex => {
    let alpha = false,
      h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return (
      'rgb' +
      (alpha ? 'a' : '') +
      '(' +
      (h >>> (alpha ? 24 : 16)) +
      ', ' +
      ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
      ', ' +
      ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
      (alpha ? `, ${h & 0x000000ff}` : '') +
      ')'
    );
  };