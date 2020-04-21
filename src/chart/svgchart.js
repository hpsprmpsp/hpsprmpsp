export const svgchart = {
    create: function (svgParameter) {
        if (!svgParameter) {
            console.warn("ccsvgchart---Invalid arguements. Moving on with default values");
            svgParameter = this.default;
        }
        this.init(svgParameter);
        return this.drawSVG();
    },
    default : {
        current: 0,
        total: 1,
        color: "#2ecc71",
        title: ''
    },
    
    init : function(svgParameter){
        this.current = svgParameter.current ? svgParameter.current : this.default.current;
        this.total = svgParameter.total ? svgParameter.total : this.default.total;
        this.color =  svgParameter.color ? svgParameter.color : this.default.color;
        this.title =  svgParameter.title ? svgParameter.title : this.default.title;
    },
    drawArc : function (percentage, color, secondTime) {
        var angle = 2 * (Math.PI * percentage);
        var yc = 75 * Math.cos(angle);
        yc = 75 - yc;
        var xc = 75 * Math.sin(angle);
        var sp = "";
        if (secondTime) {
            xc *= -1;
            yc *= -1;
            sp = "0,75";
        } else {
            sp = "0,-75";
        }
        return "<path stroke = '" + color + "' stroke-width = '4' fill = 'none'" +
            "d = 'M 100,100 m " + sp + "a  75,75 0 0,1 " + xc + "," + yc + "'  />";
    },
    drawSVG : function () {
        let percentage = this.current / this.total;
        //create svg string
        var svg = '<svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
            '<path purpose="background" stroke="#dde1e2" stroke-width="4" fill="none" d="M 100 100 m -75 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0 " />';

        var path = "";
        var secondTime = false;
        if (percentage > 0.5) {
            path += this.drawArc(0.5, this.color, secondTime);
            secondTime = true;
            percentage = percentage - 0.5;
        }
        path += this.drawArc(percentage, this.color, secondTime);
        var text = "";
        var title = '';
        if (this.current) {
            text += "<text x='100' y='100' alignment-baseline='middle' text-anchor='middle' stroke-width='0' fill='black'>" ;
                
            if (this.total === 100) {
                text += "<tspan x= " + (this.current < 100 ? (this.current < 10 ? "'107'" : "'102'") : "'97'") + " y='110' font-size='22'>" + this.current + "%</tspan>" 
            } else {
                text += "<tspan x= " + (this.current < 100 ? (this.current < 10 ? "'93'" : "'88'") : "'83'") + " y='110' font-size='22'>" + this.current + "</tspan>" +
                "<tspan x='115' y='110' font-size='14'>/" + this.total + "</tspan>";
            }
            text += "</text>";
        } else {
            text += "<text x='100' y='100' alignment-baseline='middle' text-anchor='middle' stroke-width='0' fill='#dde1e2' font-size='18'>NA</text>"
        }
        if (this.title) {
            let fontSize = this.font_size || 14;
            title += "<text x='100' y='125' alignment-baseline='middle' text-anchor='middle' stroke-width='0' fill='black' font-size='"+ fontSize + "'  >" + 
                    this.title + "</text>";
        }
        svg += path;
        svg += text;
        svg += title;
        svg += "</svg>";
        return svg;
    }
};