import {
    data
} from './data/data_resume.js';


// basic functionality 

// side menu position control on scrolling
window.onscroll = function(e){
    const max = (document.documentElement || document.body.parentNode || document.body).scrollHeight;
    const scrolltop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const navBody = document.getElementById('sideMenu');
    navBody.style.top = 60 + (scrolltop / max) * (0.3 * window.innerHeight) + 'px';
};




var app = angular.module("myProfile", []);


app.controller("myProfile", function ($scope) {
    $scope.data = data;
    $scope.eduCarIndex = 0;
    $scope.eduCarSlide = function (index) {
        $scope.eduCarIndex = index;
    }



});



/*
    FILTERS
*/
app.filter('safeHTML', function ($sce) {
    return function (x) {
        return $sce.trustAsHtml(x);
    };
});

app.filter('runningLettter', function () {
    return function (x) {
        return x.slice(0, 1).toLocaleUpperCase() + x.slice(1, x.length).toLocaleLowerCase();
    }
});
/*
    DIRECTIVES
*/
app.directive('piechartDirectory', function () {
    return {
        restrict: 'E',
        scope: {
            options: '=options'
        },
        compile: function (element, attr) {
            return function ($scope, element, attr) {
                let s = svgchart.create($scope.options);
                element.html(s);
            };
        }
    };
});

app.directive('workSlider', () => {
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        templateUrl: './src/slider/slider.html',
        compile: (element, attr) => {
            return (scope, element, attr) => {
                scope.paginatedData = [];
                scope.currentPage = 0;
                scope.itemsPerPage = 4;

                scope.prev = () => {
                    if (scope.currentPage === 0) {
                        scope.currentPage = scope.paginatedData.length - 1;
                    } else {
                        scope.currentPage -= 1;
                    }
                };
                scope.next = () => {
                    if (scope.currentPage >= scope.paginatedData.length - 1) {
                        scope.currentPage = 0;
                    } else {
                        scope.currentPage += 1;
                    }
                };

                function buildData() {
                    // build the data
                    scope.paginatedData = [];
                    for (let i = 0; i < (scope.data.length / scope.itemsPerPage); i++) {
                        scope.paginatedData.push({
                            'start': i * scope.itemsPerPage,
                            'end': ((i + 1) * scope.itemsPerPage) - 1,
                            'visible': false,
                            'items': []
                        });
                    }
                    scope.data.forEach((d, idx) => {
                        for (let i = 0; i < scope.paginatedData.length; i++) {
                            let cd = scope.paginatedData[i];
                            if (idx >= cd.start && idx <= cd.end) {
                                cd.items.push(d);
                                break;
                            }
                        }
                    });
                    return true;
                };

                scope.$watch(function () {
                    return element.find('.slideCards').width();
                }, (w) => {
                    if (w > 768) {
                        scope.itemsPerPage = 4;
                    } else if (w > 500) {
                        scope.itemsPerPage = 2;
                    } else {
                        scope.itemsPerPage = 1;
                    }

                    buildData();
                });

                scope.$watch('currentPage', () => {
                    scope.paginatedData.forEach(item => {
                        item.visible = false;
                    });
                    scope.paginatedData[scope.currentPage].visible = true;
                });


            }
        }
    }
});

app.directive('workSliderBySingle', () => {
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        templateUrl: './src/slider/slider-one.html',
        compile: (element, attr) => {
            return (scope, element, attr) => {
                scope.firstItemIndex = 0;
                scope.elementsToMove = 3;

                scope.contentHolderLeft = element.find('.prev').width();
                scope.cardHeight = element.find('.content-holder').height();
                
                const w = window.innerWidth;
                scope.contentHolderWidth = w - element.find('.prev').width();
                if (w > 1000) {
                    scope.elementsToMove = 3;
                } else if (w > 768) {
                    scope.elementsToMove = 2;
                } else {
                    scope.elementsToMove = 1;
                    scope.contentHolderLeft = 0;
                }

                scope.cardWidth = scope.contentHolderWidth / (scope.elementsToMove + 1);

                scope.next = () => {
                    if (scope.firstItemIndex >= scope.data.length - scope.elementsToMove) {
                        // do nothing
                    } else {
                        scope.contentHolderLeft -= (scope.cardWidth * scope.elementsToMove);
                        scope.contentHolderWidth = scope.contentHolderWidth + (scope.cardWidth * scope.elementsToMove);
                        scope.firstItemIndex += scope.elementsToMove;
                    }

                }
                scope.prev = () => {
                    if (scope.firstItemIndex === 0) {
                        // do nothing
                    } else {
                        scope.contentHolderLeft += scope.cardWidth * scope.elementsToMove;
                        scope.contentHolderWidth = scope.contentHolderWidth - (scope.cardWidth * scope.elementsToMove);
                        scope.firstItemIndex -= scope.elementsToMove;
                    }

                }
                
                window.onresize = function () {
                    scope.$apply();
                };

            }
        }
    }
});

app.directive('carousel', ($timeout) => {
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        templateUrl: './src/carousel/carousel.html',
        compile: function(element, attr) {
            return function(scope, element, attr) {
                scope.currentIndex = 0;
                scope.prev = function() {
                    scope.currentIndex === 0 ? scope.currentIndex = scope.data.length - 1 : scope.currentIndex--;
                };
                scope.next = function() {
                    scope.currentIndex === scope.data.length - 1 ? scope.currentIndex = 0 : scope.currentIndex ++;
                };
                scope.setIndex = function(idx) {
                    scope.currentIndex = idx;
                };
                scope.$watch('currentIndex', function() {
                    scope.data.forEach(d => {
                        d.visible = false;
                    });
                    scope.data[scope.currentIndex]['visible'] = true;
                });
                let timer;
                const slideFn = function() {
                    timer = $timeout(() => {
                        scope.next();
                        timer = $timeout(slideFn, 3000);
                    }, 3000);
                };
                slideFn();
                scope.$on('$destroy', () => {
                    $timeout.cancel(timer);
                });
            };
        }
    };
});

app.directive('eduSlide', () => {
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        templateUrl: './src/educational_slide/edu_slide.html',
        compile: function(element, attr) {
            return function(scope, element, attr) {

            };
        }
    };
});

app.directive('imageGallery', () => {
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        templateUrl: './src/image-random/image_random.html',
        compile: function (element, attr) {
            return function(scope, element, attr) {
                scope.imageBundle = [];
                let bndl1 = [], bndl2 = [], bndl3= [], bndl4 = [];
                scope.data.forEach((d, i) => {
                    const r = i % 4;
                    if (r === 0){
                        bndl1.push(d);
                    } else if (r === 1){
                        bndl2.push(d);
                    } else if (r === 2){
                        bndl3.push(d);
                    } else if (r === 3){
                        bndl4.push(d);
                    }
                });
                scope.imageBundle.push(bndl1);
                scope.imageBundle.push(bndl2);
                scope.imageBundle.push(bndl3);
                scope.imageBundle.push(bndl4);
            }
        }
    };
});