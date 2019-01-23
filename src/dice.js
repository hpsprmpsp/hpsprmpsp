//we will create a canvas, roll button
function dice(canvasContainer, buttonContainer, $) {
    //create canvas
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "source-over";
    $(canvas).css({
        "background-color": "transparent",
        "margin" : "auto",
        "border-radius" : "2px",
        "box-shadow" : "0px 0px 5px 0px rgba(0,0,0,0.5)"
    });

    //create button
    var btn = document.createElement('BUTTON');
    $(btn).css({
        'position': 'relative',
        'margin': '10px',
        'width': 'calc(100% - 20px)',
        'height': '50px',
        'box-shadow': '0px 0px 5px 0px rgba(0,0,0,0.4)',
        'line-height': '50px',
        'text-align': 'center',
        'font-size': '25px',
        'font-weight': '900',
        'background-color': 'white',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        "z-index" : "10"
    }).text("Rolle Me");

    //create cover for canvas
    var cnvCover = $("<div />",{
    	id: "cnvCover",
    	css: {
    		"z-index" : "100",
    		"position" : "absolute",
    		"top" : "0px",
    		"left" : "0px",
    		"height": "0px",
    		"width" : "100%",
    		"cursor" : "not-allowed",
    		
    	}
    });



    var cnvCnt = $(canvasContainer).eq(0);
    var H = cnvCnt.height();
	var W = cnvCnt.width();
	var d = H<=W ? H : W;
	canvas.height = d;
	canvas.width = d;

	if(H<W){
		canvas.style.marginLeft = ((W-H)/2) + "px";
	}
	if(H>W){
		canvas.style.marginTop = ((H-W)/2) + "px";
	}
	//set highest radius on dot
	var r = d/7;

    //draw dots based on outcome 
    function draw(dotCollection){
    	ctx.clearRect(0,0,d,d);
    	cnvCover.css('height', "100%");
    	$(btn).prop('disabled','disabled');
    	$(btn).css('cursor', 'not-allowed');
    	setTimeout(function(){
    		cnvCover.css('height', "0px");
    		$(btn).prop('disabled','');
    		$(btn).css('cursor', 'pointer');
    	},(630 * (dotCollection.length)));
    	dotCollection.forEach(function(dot, index){
    		
    		setTimeout(function(){
    			animateCircle(dot.x,dot.y,dot.r,ctx);
    		},(index * 630));
    	});
    }

    function update(){
    	let rnd = (Math.floor(Math.random() * 6) + 1).toString();console.log(rnd);
    	moveDice();
    	draw(cordingateCollection[rnd]);

    }
	function animateCircle(x,y,r, cntx){
		let ang = 0;
		let int;
		int = setInterval(function(){
			if(ang > 6.3){
				ang =0;
				clearInterval(int);
				
			}
			cntx.beginPath();
			cntx.moveTo(x,y);
			cntx.arc(x,y,r,0, ang);
			cntx.fill();
			ang += 0.1;
		},10);
	} 

    var cordingateCollection = {
    	"1" : [
    		{ x: d/2, y: d/2 , r: r}
    	],
    	"2" : [
    		{ x: d * 2/7, y: d * 2/7 , r: r * 6/7},
    		{ x: d * 5/7, y: d * 5/7 , r: r * 6/7}
    	],
    	"3" : [
    		{ x: d * 2/7, y: d * 2/7 , r: r * 5/7},
    		{ x: d * 3.5/7, y: d * 3.5/7 , r: r * 5/7},
    		{ x: d * 5/7, y: d * 5/7 , r: r * 5/7}
    	],
    	"4" : [
    		{ x: d * 2/7, y: d * 2/7 , r: r * 5/7},
    		{ x: d * 5/7, y: d * 2/7 , r: r * 5/7},
    		{ x: d * 5/7, y: d * 5/7 , r: r * 5/7},
    		{ x: d * 2/7, y: d * 5/7 , r: r * 5/7}
    	],
    	"5" : [
    		{ x: d * 2/7, y: d * 2/7 , r: r * 5/7},
    		{ x: d * 5/7, y: d * 2/7 , r: r * 5/7},
    		{ x: d * 5/7, y: d * 5/7 , r: r * 5/7},
    		{ x: d * 2/7, y: d * 5/7 , r: r * 5/7},
    		{ x: d * 3.5/7, y: d * 3.5/7 , r: r * 5/7}

    	],
    	"6" : [
    		{ x: d * 2/7, y: d * 1.5/7 , r: r * 5/7},
    		{ x: d * 5/7, y: d * 1.5/7 , r: r * 5/7},
    		{ x: d * 5/7, y: d * 3.5/7 , r: r * 5/7},
    		{ x: d * 2/7, y: d * 3.5/7 , r: r * 5/7},
    		{ x: d * 2/7, y: d * 5.5/7 , r: r * 5/7},
    		{ x: d * 5/7, y: d * 5.5/7 , r: r * 5/7}
    	]
    };

    //move dice here and there TODO
    function moveDice(){

    }

    
    draw(cordingateCollection["6"])

    $(btn).on("click", function(){
    	update();
    });
    $(canvas).on("click", function(){
    	update();
    });
    $(buttonContainer).eq(0).append(btn);
    cnvCnt.append(canvas);
    cnvCnt.append(cnvCover);

}