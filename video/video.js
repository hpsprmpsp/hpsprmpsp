var video=[];
video.source="";
video.inp=[];
video.inp.actual=$("<input type='file' class='hidden' accept='video/mp4'/>");
video.inp.toShow=$("<div class='input-holder'><input readonly class='input-group' data-ride='file-name'/><button class='input-group'>Browse</button></div>");





video.clear=function(){
	video.container.empty();
}




video.inp.initiate=function(){
	$('#div-container-input').html(video.inp.actual);
	$('#div-container-input').append(video.inp.toShow);
	video.inp.toShow.find('button').on('click',function(){
		video.inp.actual.click();
		video.inp.actual.on('change',function(){
			video.inp.toShow.find('input').val(video.inp.actual.val());
				video.initiate();
			});	
	});
};

video.inp.clear=function(){
	$('#div-container-input').empty();
};




video.initiate=function(){

};