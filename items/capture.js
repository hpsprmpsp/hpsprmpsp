function capture(element){
    html2canvas(ele).then(function(canvas){
        var p =  new DOMParser();
        var image = "<img src='" + canvas.toDataURL("image/png") + "' alt='chema' class='image-contain'/> ";
        image =  p.parseFromString(image,"text/xml");
       addPopup(image);
     });

     function addPopup(content){
        var modalOut =  document.createElement("DIV");
        var modalIn =  document.createElement("DIV");
        var modalContent =  document.createElement("DIV");
        var modalButton =  document.createElement("DIV");
     }
}