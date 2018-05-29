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

    //setup Header

    $("<div class='resume-header-title' id='resume-header-title'><h1>" + data.pageHeader.title +
        "</h1></div>").appendTo('#resume-header');
    $('#resume-header-title').on('click', function() {

        eval(data.pageHeader.onclick);
    });


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


    });


    function setDate(dObj) {
        var retVal="";
        //check if all three are there
        if(dObj['date'] && dObj['month'] && dObj['year']){
          return dObj['date'] +"/"+ dObj['month'] +"/"+ dObj['year'];
        }
        else if(dObj['month'] && dObj['year']){
          return dObj['month'] +"/"+ dObj['year'];
        }
        else if(dObj['year']){
          return dObj['year'];
        }
        else
            return 'NA';
    }

}(data));
