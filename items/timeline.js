var timeline = {
    /*
        items required
        it requires a bunch of timeline content
        each content has
        1. header data
            1.1 title
            1.2 html template
        2. status of the timestop
        3.content of timestop
    
    */
    crate: function (items) {
        if (!items) {
            console.warn("Empty value give, will move on with defaults");
            items = this.base;
        }
        this.init(items);
        return this.style() + this.body();
    },
    items: [],
    init: function (items) {
        items.forEach(function (item) {
            items.push({
                title = item.title,
                headerContent = item.headerContent,
                status: item.status,
                content: item.content
            });
        });
    },
    base: {
        title: "Timeline",
        headerContent: "<p>This is a timeline.</p>",
        status: 0,
        content: "<p>This is the content.</p>"
    },
    body: {
        style: "",
        html: ""
    },
    style: function () {
        var sls = "<script>";

        sls += "</script>";
        body.style = sls;
    },
    body: function () {
        var bdy = "<div>";
        bdy += "</div>";
        body.html = bdy;
    },
};