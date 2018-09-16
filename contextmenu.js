var menu={
  cssClass:'default',
    menuItem:[
      {
        label: 'Reload',
        icon:false,
        action:'window.location.reload()',
        hr:true
      },
      {
        label:'close',
        icon:false,
        href: '#'
      }
    ]
};


var oDiv=document.createElement('div');
var ul= document.createElement('ul');
oDiv.setAttribute('class',menu.cssClass);
menu.menuItem.forEach(function(mi,idx){
  let li=document.createElement('li');
  let a=document.createElement('a');
  let a_txt=document.createTextNode(mi.label);
  if(mi.icon){
    let sp=document.createElement('SPAN');
    sp.setAttribute('class',mi.icon);
    a.appendChild(sp);
  }
  a.appendChild(a_txt);

  if(mi.href && !mi.action){
    a.setAttribute('href',mi.href);
  }else{
    a.addEventListener('click',function(){
      eval(mi.action);
    });
  }

  li.appendChild(a);
  ul.appendChild(li);
  if(mi.hr){
    //append <li><hr /></li> here
    let li_hr=document.createElement('li');
    let hr_hr=document.createElement('hr');
    li_hr.appendChild(hr_hr);
    ul.appendChild(li_hr);
  }


});

oDiv.appendChild(ul);
oDiv.setAttribute('id','hpsprmpsp_context_menu')
document.body.oncontextmenu=function(e){
  e.preventDefault();
  var e_x=0;
  var e_y=0;
  if(e.pageX){
    e_x=e.pageX;
  }else{
    e_x=e.clientX+ (document.body.scrollLeft?document.body.scrollLeft:document.documentElement.scrollLeft);
  }

  if(e.pageY){
    e_y=e.pageY;
  }else{
    e_y=e.clientY+ (document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop);
  }

  let b_width=200;
  let b_height=(function(){
    return oDiv.getElementsByTagName('li').length*50;

  }());
  b_height=b_height<200?200:b_height;
  if(document.body.clientWidth-e_x<b_width){
    e_x= e_x-(b_width-20);
  }
  if(document.body.clientHeight-e_y<b_height){
    e_y= e_y-(b_height-20);
  }
  oDiv.style.left=String(e_x)+'px';
  oDiv.style.top=String(e_y)+'px';
  document.body.appendChild(oDiv);
};
document.body.onclick=function(){
  if(document.getElementById('hpsprmpsp_context_menu')){
    document.body.removeChild(document.getElementById('hpsprmpsp_context_menu'));
  }
}
