function randomMove(boxId, $) {
    $(boxId).mouseenter(function() {
        placeBox(boxId);
    });

    function placeBox(boxSelector) {
        var box = $(boxSelector);
        var curPx = box.position().left;
        var curPy = box.position().top;
        var x = xCordinate();
        var y = yCordinate()

        while (x > (window.innerWidth - box.width()) || Math.abs(curPx - x) < (box.width() + 10)) {
            x = xCordinate();
        }
        while (y > (window.innerHeight - box.height()) || Math.abs(curPx - y) < (box.height() + 10)) {
            y = yCordinate();
        }

        box.css('left', x + "px");
        box.css('top', y + 'px');

    }

    function xCordinate() {
        return Math.floor(Math.random() * window.innerWidth);
    }

    function yCordinate() {
        return Math.floor(Math.random() * window.innerHeight);
    }
}