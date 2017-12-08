
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



