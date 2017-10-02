<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Number to Roman</title>
        <style>
            *{
                box-sizing: border-box;
            }
            input[name="number"]{
                position: absolute;
                top:50px;
                left:100px;
                height:50px;
                width:450px;
                border:1px solid cornflowerblue;
                color:cornflowerblue;
                font-size: large;
                font-weight: 900;
                line-height: 50px;
                padding-left:10px;
                padding-right: 110px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            button[name="btnGo"]{
                position: absolute;
                top:50px;
                left:450px;
                height:50px;
                width:100px;
                border:1px solid cornflowerblue;
                color:white;
                font-size: large;
                font-weight: 900;
                line-height: 50px;
                text-align: center;
                background-color: cornflowerblue;
            }
            .error{
                position: absolute;
                top:120px;
                left:100px;
                height:50px;
                width:450px;
                border:1px solid transparent;
                color:red;
                font-size: x-large;
                font-weight: 900;
                line-height: 50px;
                text-align: center;
                background-color: transparent;
            }
            svg{
                position: absolute;
                top:210px;
                padding:20px;
            }
            path{
                stroke:gray;
                fill:none;
                stroke-width:20;
            }
        </style>
    </head>
    <body>
        <?php
        $err="";
        $op="";
        $num=0;
        if($_SERVER['REQUEST_METHOD']=="POST"){
            if(!empty($_POST['number'])){
                if(preg_match("/^[0-9]*$/",$_POST['number'])){
                    if($_POST['number']<=5000){
                        $num=$_POST['number'];
                        $op=printRom($num);
                    }else{
                        $err="Large Number, Won't look good. Max is 5000.";
                    }
                }else{
                    $err="Invalid Number";
                    
                }    
            }else
               {
                   $err="Empty";
                   
               }
            
            
        }
        function printRom($nm){
            $rom=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
            $dec=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
            $otp="";
            for($i=0;$i<13;$i++){
                while($nm>=$dec[$i]){
                    $nm=$nm-$dec[$i];
                    $otp.=$rom[$i];
                }
            }
            return $otp;
        }
        ?>
        
        <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
        <input name="number"placeholder="Number only" value="<?php echo $num; ?>" /><button name="btnGo">Go</button>
            <span class="error"><?php echo $err; ?></span>
        </form>
        <svg width="1000" height="220"></svg>
        <script>
            var op="<?php echo $op; ?>";
            var s=document.getElementsByTagName("svg")[0];
            if(op!=""){
                var l=op.length;
                var x=0;
                var y=0;
                clearSvg();
                for(i=0;i<l;i++){
                    x=(i*110)+20;
                    y=180;
                    drawNum(x,op[i],x,y);
                }
            }
            
            function drawNum(svg,val,x,y){
                var d="M"+x+" "+y;
                var p=document.createElementNS('http://www.w3.org/2000/svg',"path");
                if(val.toUpperCase()=="X"){
                    d+=" l100 -100 m-100 0 l100 100";
                }
                else if(val.toUpperCase()=="M"){
                    d+=" l0 -100 l 50 50 l50 -50 l0 100";
                }
                else if(val.toUpperCase()=="C"){
                    d+=" m 100 0 c-100 0 -100 -100 0 -100";
                }
                else if(val.toUpperCase()=="D"){
                    d+=" l0 -100 c100 00 100 100 -10 100";
                }
                else if(val.toUpperCase()=="I"){
                    d+=" l100 0 m-50 0 l0 -100 m-50 0 l100 0";
                }
                else if(val.toUpperCase()=="V"){
                    d+=" m0 -100 l50 100 l50 -100";
                }
                else if(val.toUpperCase()=="L"){
                    d+=" l0 -100 m-10 100 l100 0";
                }
                p.setAttribute("d",d);
                s.appendChild(p);
            }
            function clearSvg(){
                s.innerHTML="";
            }
        </script>
    </body>
</html>