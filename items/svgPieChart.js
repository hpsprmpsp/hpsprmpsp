function pieChart(chartObject) {
    /*
        chartObject should be like
        {
            title: <title>,
            width: <width>,
            height: <height>,
            titleClass: <css class for title>,
            items: [
                [activity name, activity spent unit],
                [avtivity value1, activity spent value1],
                [avtivity value2, activity spent value2]
            ]
        }
     */
    function setBase() {
        pieChart.prototype.base = {
            title: "Pie Chart",
            width: 400,
            height: 400,
            titleClass: "",
            headers: this.chartObject.items[0],
            items: this.chartObject.items.slice(1)
        };
    }
    
}