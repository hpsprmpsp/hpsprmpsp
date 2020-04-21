function flappybird(boxSelector) {

    var canvas = document.createElement("CANVAS");
    var box =  document.querySelectorAll(boxSelector)[0];
    var scoreObject = {
        current: 0,
        highest: 0
    };
    var ctx = canvas.getContext("2d");


    init();

    function init() {
        setScore(0);
        setDimention(canvas);
        //insertCanvas
        box.innerHTML = "";
        box.appendChild(canvas);
        

    }

    function drawStatic_1(){
        // draw static images of pipe, bird, and other obstacles
    }

    function setDimention(c) {
        //set lowest value between height and width of viewport
        var H = box.clientHeight;
        var W = box.clientWidth;
        var d = H>W ? W : H;
        c.style.position = "absolute";
        c.style.height = d + "px";
        c.style.width = d + "px";
        if (H > W) {
            c.style.top = "50%";
            c.style.transform = "translateY(-50%)";
        }else{
            c.style.left = "50%";
            c.style.transform = "translateX(-50%)";
        }
        
    }

    function setScore(score) {
        scoreObject.current = score;
        if (score > scoreObject.highest) scoreObject.highest = score;
        
    }

}