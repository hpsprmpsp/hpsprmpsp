(function(data) {
    //Insert header, body, and pageFooter
    $('<div>', {
        "class": "container-fluid wrapper",
        id: 'wrapper-body'
    }).appendTo('body');
    $('<div>', {
        "class": 'row resume-header',
        id: "resume-header"
    }).appendTo('#wrapper-body');
    $('<div>', {
        "class": 'row resume-body',
        id: "resume-body"
    }).appendTo('#wrapper-body');

    $("<div>", {
        "class": 'row resume-body-scrollsply',
        id: 'resume-body-scrollsply'
    }).appendTo('body');


    $('<div>', {
        "class": 'row resume-footer',
        id: "resume-footer"
    }).appendTo('#wrapper-body');

    $("<p />",{
        text: "I undertake that all information provided by me in this resume is correct as per my understanding, knowledge and beliefs and originals shall be made available on request.",
        css : {color: '#eee'}
    }).appendTo("#resume-footer")

    //set up metadata
    document.title = data.pageMeta.title;
    if (data.pageMeta.icon) {
        $('head').append('<link rel="icon" type="image/x-icon" href="' + data.pageMeta.icon + '"/>');
    }
    if (data.pageMeta.cssLibrary && data.pageMeta.cssLibrary.length > 0) {
        $.each(data.pageMeta.cssLibrary, function(idx, cssLib) {
            $('head').append('<link rel="stylesheet" type="text/css" href="' + cssLib + '" />');
        });

    }
    if (data.pageMeta.jsLibrary && data.pageMeta.jsLibrary.length > 0) {
        $.each(data.pageMeta.jsLibrary, function(idx, jsLib) {
            $('head').append('<script src="' + jsLib + '"></script>');
        });
    }
    debugger;
    //setup Header

    $("<div class='resume-header-title' id='resume-header-title'><h1>" + data.pageHeader.title +
        "</h1></div>").appendTo('#resume-header');
    $('#resume-header-title').on('click', function() {

        eval(data.pageHeader.onclick);
    });

    var socialBox = $("<div />",{"class":"social-box"});
    data.social.forEach(function(s,i){
        $("<a />",{
            "class" : "ligh_font",
            html : "<i class='fa "+s.icon+"' style='font-size:30px;'></i>",
            target : "_blank",
            'data-toggle': 'tooltip',
            'data-placement': 'auto',
            title: s.tooltip, 
            href : s.target,
            click : function(e){e.stopPropagation();}
        }).appendTo(socialBox);
    });
    socialBox.appendTo('#resume-header');
    //setup left pan Menu
    /*
    var scrollMenu="<div class='row'><nav class='col-sm-12' id='resume-scroll-menu'><ul class='nav nav-stacked'>";
      data.bodyMenu.forEach(function(m,idx){
        scrollMenu+="<li id='"+m.name+"'><a href='"+m.src+"'>"+(m.icon?"<span class='"+m.icon+"'>  <span>"+m.label : m.label)+"</a></li>"
      });
    scrollMenu +="</ul></nav></div>";
    $('#resume-body-scrollsply').append(scrollMenu);
    */
    //setup body
    data.bodyContent.forEach(function(bc, idx) {
        $("<div id='" + bc.id + "' class='row  holders'><h1 class='header-text-container'>" + bc.title + "</h1></div>").appendTo("#resume-body");
        //add content based on type

        //timeline
        if (bc.type == 'timeline') {
            $("#" + bc.id).addClass('timeline-holder');
            let tm = "<div class='timeline'>";
            bc.content.forEach(function(c, i) {
                tm += "<div class='tlcontainer " + (i % 2 == 0 ? "left" : "right") + "'><div class='content'>" +
                    "<h4>" + (c.time?setDate(c.time): "NA" )+ "</h4><h3>" + c.timelineEvent + "</h3>";
                tm += "</div></div>";
            });
            tm += "</div>";
            $(tm).appendTo("#" + bc.id);
        }

        //about
        if (bc.type == "about") {
            $("#" + bc.id).addClass('about-holder');

            $("<p>" + bc.content + "</p>").appendTo("#" + bc.id);
        }

        //experiance
        if(bc.type == 'experiance'){
            bc.content.forEach(function(c, i){
                var contDiv = $("<div />",{
                    "class" : "cont-div"
                });
                var timePeriod =(function(){
                    if(c.endTime){
                        return setDate(c.startTime,'no-separation')+ " &mdash; " + setDate(c.endTime,'no-separation');
                    }else{
                        return setDate(c.startTime,'no-separation')+ " &mdash; Till date";
                    }
                }());
                $("<div />",{
                    "class":"cont-div-header corner-border-light1",
                    html : "<span class='left-float'>"+c.company+"</span><span class='right-float'>"+timePeriod+"</span>"
                }).appendTo(contDiv);

                c.projects.forEach(function(p,idx){
                    var tbl = $("<table />",{"class":"table"});
                    $("<tr><td class='horizonatal-header right-align'>Title</td><td class='left-allign'>"+p.title+"<td></tr>"+
                    "<tr><td class='horizonatal-header right-align'>Project Type</td><td class='left-allign'>"+p.type+"</td></tr>"+
                    "<tr><td class='horizonatal-header right-align'>Environment</td><td class='left-allign'>"+p.env+"</td></tr>"+
                    "<tr><td class='horizonatal-header right-align'>Description</td><td class='left-allign'>"+p.desc+"</td></tr>").appendTo(tbl);
                    tbl.appendTo(contDiv);
                    if(idx < (c.projects.length - 1)) $("<hr />").appendTo(contDiv);
                });
                contDiv.appendTo("#"+bc.id);
            });


        }
        //summery
        if(bc.type == 'summary'){
            bc.content.forEach(function(c,i){
                var contDiv = $("<div />",{
                    "class" : "cont-div"
                });
                $("<div />",{
                    "class":"cont-div-header corner-border-light1",
                    html : "<span class='left-float'>"+c.label+"</span>"
                }).appendTo(contDiv);
                var op = "<ul>";
                c.cont.forEach(function(cnt, idx){
                    op += "<li>"+cnt+"</li>";
                });
                op+="</ul>";
                $(op).appendTo(contDiv);
                contDiv.appendTo("#"+bc.id);
            });
        }
        //personal information
        if(bc.type == 'personalInformation'){
            var tbl = $('<table />',{
                'class' : 'table table_striped'
            });
            var tr="";
            bc.content.forEach(function(c,i){
                var cnt;
                if(c.type=='email'){
                    cnt = $('<a />',{
                        'class' : 'anchor',
                        target : '_blank',
                        href : "mailTo:"+c.content,
                        text : c.content
                    })[0].outerHTML;
                }else if(c.type == 'date'){
                    cnt = setDate(c.content);
                }else{
                    cnt = c.content;
                }
                tr += "<tr><td class='right-align horizonatal-header'>"+c.label+"</td><td class='left-allign horizonatal-content'>"+cnt+"</td></tr>"
            });
            $(tr).appendTo(tbl);
            tbl.appendTo("#"+bc.id);
        }
        
        //education
        if(bc.type == 'education'){
            var tbl = $('<table />',{
                'class' : 'table table_highlight_header table_separator_bottom'
            });
            var tr_head = $("<tr class='corner-border-light1'><th>Degree and date</th><th>Institute</th><th>Major and Specialization</th><th>Percentage of mark</th></tr>");
            var trs_body = "";
            bc.content.forEach(function(cont, idx){
                var time_per;
                if(cont.start && cont.end){
                    time_per=setDate(cont.start) +" &mdash; "+setDate(cont.end)
                }else{
                    time_per = "&mdash;";
                }

                trs_body += "<tr><td>"+cont.degree+"<br />"+time_per+"</td><td>"+cont.inst+"</td><td>"+(cont.major?cont.major:"&mdash;")+"</td><td>"+cont.mark+"</td></tr>";
            });
            trs_body = $(trs_body);
            tbl.append(tr_head);
            tbl.append(trs_body);
            tbl.appendTo("#"+bc.id);
        }

        
    });


    
    function setDate(dObj,mode) {
        //mode is applicable if only month and year are there
        var retVal="";
        //check if all three are there
        if(dObj['date'] && dObj['month'] && dObj['year']){
          return dObj['date'] +"/"+ dObj['month'] +"/"+ dObj['year'];
        }
        else if(dObj['month'] && dObj['year']){
            if(mode == 'no-separation'){
                return dObj['month'] +" "+ dObj['year']
            }else{
                return dObj['month'] +"/"+ dObj['year'];
            }
        }
        else if(dObj['year']){
          return dObj['year'];
        }
        else
            return 'NA';
    }

}(data));
