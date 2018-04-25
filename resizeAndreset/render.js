


function updateDataFromLayout(layout) {
    let d = [];
     let l=layout;
    l.forEach(function(el){
        let d_tmp={};
        let element=$("#"+el);
        d_tmp['elment_id']=el;
        d_tmp['cssClass']=element.attr('class').toString();
        d_tmp['content']=element.find(".card-content").first().html().toString();debugger;
        d_tmp['style']=element.attr('style')?element.attr('style').toString():"";
        d.push(d_tmp);
    });
    /*var ele = $(element);
    ele.find('.card').each(function() {
        let d_tmp = {};
        d_tmp['elment_id'] = $(this).attr('id').toString();
        d_tmp['cssClass'] = $(this).attr('class').toString();
        d_tmp['content'] = $(this).html().toString();
        d_tmp['style']=$(this).attr('style').toString();
        d.push(d_tmp);
    });*/
    return d;
}


function initialise(data, plan) {
    var d = data;
    var currD=localStorage.timestamp;
    if(timespamp>currD) return {data:d, activePlan:"default"};
    var activePlan = plan;
    if (typeof(Storage) != undefined && localStorage.activePlan) {
        activePlan = localStorage.activePlan;
    }
    if (typeof(Storage) != undefined && localStorage[localStorage.activePlan]) {
        d = JSON.parse(localStorage[activePlan]);
    }
    return { data: d, activePlan: activePlan };
}


function save_layout(layout, name, active) {
    localStorage.customeLayout += ","+name;
    localStorage[name] = JSON.stringify(layout);
    if (typeof(active) == 'boolean' && active) localStorage.activePlan = name;
    var currD=new Date();
    currD=currD.getTime();
    localStorage.timestamp=currD;
}