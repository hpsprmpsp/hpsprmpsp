function bmi(){
    var a=document.createElement("div");
            var b=document.createElement("input");
            var c=document.createElement("input");
            var d=document.createElement("SPAN");
            var e=document.createElement("SPAN");
            var f=document.createElement("SPAN");
            
            //CSS main div
            a.style.position="absolute";
            a.style.top='0px';
            a.style.left="0px";
            a.style.height="250px";
            a.style.width="300px";
            //a.style.border="1px solid #0d7cd4";
            
            //css inputs
            b.style.position="absolute";
            b.style.top='20px';
            b.style.left="10px";
            b.style.width="280px";
            b.style.height='30px';
            b.type="number";
            b.placeholder="Your weight in Kgs";
            b.style.border="1px solid #0d7cd4";
            c.style.position="absolute";
            c.style.top='70px';
            c.style.left="10px";
            c.style.width="280px";
            c.style.height='30px';
            c.type="number";
            c.placeholder="Your height in cms";
            c.style.border="1px solid #0d7cd4";
            //css for span
            
            
            d.style.position="absolute";
            d.style.top="120px";
            d.style.left='10px';
            d.style.width="80px";
            d.style.height="30px";
            d.style.lineHeight="30px"
            d.style.textAlign="center";
            d.style.color="white";
            d.style.backgroundColor="#0d7cd4";
            d.style.border="1px solid #0d7cd4";
            var k=document.createTextNode("BMI");
            d.appendChild(k);
            
            e.style.position="absolute";
            e.id="bmi";
            e.style.top="120px";
            e.style.left='90px';
            e.style.width="200px";
            e.style.height="30px";
            e.style.lineHeight="30px"
            e.style.textAlign="center";
            e.style.border="1px solid #0d7cd4";
            var l=document.createTextNode("NA");
            e.appendChild(l);
            
            f.style.position="absolute";
            f.id="statbmi";
            f.style.top="160px";
            f.style.left='10px';
            f.style.width="280px";
            f.style.height="30px";
            f.style.lineHeight="30px"
            f.style.textAlign="center";
            f.style.border="1px solid #0d7cd4";
            var m=document.createTextNode("NA");
            f.appendChild(m);
            
            
            //create event
            b.onkeyup=function(){
                if(b.value>0 && c.value>0){
                    calcBMI(c.value,b.value)
                }
            };
            c.onkeyup=function(){
                if(b.value>0 && c.value>0){
                    calcBMI(c.value,b.value)
                }
            };
            
            a.appendChild(b);
            a.appendChild(c);
            a.appendChild(d);
            a.appendChild(e);
            a.appendChild(f);
            document.body.appendChild(a);
            
            function calcBMI(h,w){
                var z=w/(h*h);
                z=z*10000;
                document.getElementById("bmi").innerHTML=String(z);
                statBMI(z);
                
            }
            function statBMI(bmi){
                if(bmi>=19 && bmi<=25){
                    document.getElementById("statbmi").innerHTML="Good";
                }
                else if(bmi>25 && bmi<30){
                    document.getElementById("statbmi").innerHTML="Fat";
                }
                else if(bmi>30){
                   document.getElementById("statbmi").innerHTML="Obese";
                }
                else if(bmi<19){
                    document.getElementById("statbmi").innerHTML="Anarexic";
                }
            }
}