
	var x = new XMLHttpRequest();
	x.open("GET","Quiz.txt",true);
	x.send();
	var theData;
	x.onreadystatechange=function(){
		if(x.readyState==4 && x.status==200){
			theData={"content":JSON.parse(x.responseText)};
			var tampScript=$("#quiztemp").html();
			var hbjComp=Handlebars.compile(tampScript);
			$(document.body).append(hbjComp(theData));
		}
	};

Handlebars.registerHelper("lisrboxeswithradio",function(name,options){
	var rl=options.fn();
	rl=rl.trim().split("|");

	var op="";
	for(var x in rl){
		var item=rl[x].trim();
		op+="<li class='list-group-item><label><input type='radio' name='"+item+"' value='"+x+"'/>"+item+"</label></li>";
	}
	return op;
})

var answers_provided={};

function setAnswer(indx){
	
}

function checkAnswer(inx){

}
function skipped(){}
function rightAnswer(){}
function wrongAnswer(){}


