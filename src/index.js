// import * as resumeData from '../data/data_resume';

window.onload = function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('a').attr('target','_blank');
    
    $('#updateWork').on('click', () => {
       // getWorkTpl($('#load_work'));
       window.open('./work.html', '_blank');
    });
    
    // build body
    let myData = this.data.bodyContent;
    $('p#aboutMe').html(myData[0].content);
    $('#abt_js').html(this.svgchart.create({
        'current': 92,
        'total': 100,
        'color': 'orange',
        'title': 'JavaScript'
    }));
    $("#abt_csshtml").html(this.svgchart.create({
        'current': 90,
        'total': 100,
        'color': 'green',
        'title': 'CSS & HTML'
    }));
    $("#abt_other").html(this.svgchart.create({
        'current': 85,
        'total': 100,
        'color': 'purple',
        'title': 'Others'
    }));
    $("#abt_webdev").html(this.svgchart.create({
        'current': 95,
        'total': 100,
        'color': 'cyan',
        'title': 'Web Developments',
        'font_size': 12
    }));
    
    // populate my work
    let mw = document.getElementById('container_mw');
    populateMyWork(files, mw);
    
    // populate work experience
    let we = document.getElementById('container_we');
    workExp(myData[3].content, we);
    
    // populate education
    let ed = document.getElementById('education_wrapper');
    educationExp(myData[4].content, ed);
    
    
    function workExp(weData, parent){
        let tmplt_each_comp = document.getElementById('we_each_company');
        let projCont = tmplt_each_comp.content.querySelector('.container-fluid');
        let tmpl_proj_table = document.getElementById('we_each_project_table');
        let tbl = tmpl_proj_table.content.querySelector('table');
        weData.forEach((company) => {
            let timePeriod =(function(){
                if(company.endTime){
                    return setDate(company.startTime,'no-separation')+ " - " + setDate(company.endTime,'no-separation');
                }else{
                    return setDate(company.startTime,'no-separation')+ " - Till date";
                }
            }());
            // get a deep copy of container template
            let container = document.importNode(projCont, true);
            // set company name and time period
            container.querySelector('h4').innerHTML = '<b>' + company.company  + '</b>';
            container.querySelector('h5').textContent = timePeriod;

            // update project detail
            company.projects.forEach((project, index) => {
                let table = document.importNode(tbl, true);
                table.querySelector('.title').textContent = project['title'];
                table.querySelector('.type').textContent = project['type'];
                table.querySelector('.env').textContent = project['env'];
                table.querySelector('.desc').textContent = project['desc'];
                container.appendChild(table);
                if (index !== company.projects.length - 1) {
                    container.appendChild(document.createElement('hr'));
                }
            });
            parent.appendChild(container);
        });
        
        
    }

    function educationExp(eduData, parent) {
        let tmp_edu = document.getElementById('education_each');
        let edu = tmp_edu.content.querySelector('.education_box');
        eduData.forEach(edc => {
            let t = (function(){
                if (edc.graduated) {
                    return  'Graduated in ' + setDate(edc.graduated,'no-separation' )
                } else {
                    return setDate(edc.start,'no-separation')+ " - " + setDate(edc.end,'no-separation');
                }
            }());
            let edu_c = document.importNode(edu, true);
            edu_c.querySelector('.degree').textContent = edc.degree;
            edu_c.querySelector('.institution').textContent = edc.inst;
            edu_c.querySelector('.major').textContent = edc.major;
            edu_c.querySelector('.period').textContent = t;
            edu_c.querySelector('.mark-scored').textContent = 'Graduated with ' + edc.mark;
            parent.appendChild(edu_c);
        })
    }
    function populateMyWork(data, parent) {
        let tmp_cnt = document.getElementById('content');
        let cnt = tmp_cnt.content.querySelector('.row');
        let tmp_crd = document.getElementById('cardTmp');
        let crd = tmp_crd.content.querySelector('.card');
        for (let i = 0; i < data.length; i += 3) {
            let t_cnt = document.importNode(cnt, true);
            for (let j = 0; j < 3; j++) {
                let t_crd = document.importNode(crd, true);
                t_crd.querySelector('img').setAttribute('src','./images/' + data[ i + j].thumbnail + '.png' );
                t_crd.querySelector('.card-title').textContent = data[ i + j].name;
                if (data[ i + j].desc) {
                    t_crd.querySelector('.card-text').textContent = data[ i + j].desc;
                }
                t_crd.addEventListener('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    window.open('./html/' + data[ i + j].href, '_blank');
                });
                t_cnt.querySelector('[col-idx="' + (j + 1) +'"]').appendChild(t_crd);
            }
            parent.appendChild(t_cnt);
        }
    }

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

};