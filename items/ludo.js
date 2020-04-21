function ludo(containers, $) {

    var ludoContainer = $("#" + containers["ludo-container"]);
    var diceHolder = $("#" + containers["dice-holder"]);
    var diceController = $("#" + containers["dice-control"]);
    var userContainer = $("#" + containers["user-container"]);
    
    render();
    window.onresize = function(){render();};
    function render(){
        /*set dimention for ludo plate, a square box
        if width is above 764, then it is viewport height
        else it is viewport width
        */

        vH = document.documentElement.clientHeight;
        vW = document.documentElement.clientWidth;
        ludoD=0;
        if(vW <= 764){
            ludoD = vW - 20;
        }else{
            ludoD = vH - 20;
        }

        ludoContainer.css({
            "height" : ludoD + "px",
            "width"  : ludoD + "px"
        });
    }

}