angular.module('myApp')
    .directive('openImage', openImage)
    .controller("imagesController", imagesController);

function imagesController(lightBox, imageBox) {
    var vm = this;
    vm.image = lightBox.getImage();
    /* vm.image = imageBox(); */
}

function openImage() {
    return {
        replace: true,
        scope: {
            image: "="
        },
        restrict: "A",
        link: function (scope, element, attrs) {

            var ourElement = element[0].addEventListener("click", function (a) {
                var mainWrap = document.createElement('div');
                var pageView = document.createElement('div');
                var wrapImg = document.createElement('div');
                var largeImg = document.createElement('img');

                document.body.style.overflow = "hidden"
                document.body.appendChild(mainWrap);
                mainWrap.appendChild(pageView);

                mainWrap.className = 'mainWrap';

                pageView.appendChild(wrapImg);
                wrapImg.className = 'wrapImg';

                largeImg.src = scope.image.image;
                largeImg.className = 'imgFull';

                pageView.className = 'fullView';
                wrapImg.appendChild(largeImg);
                mainWrap.addEventListener("click", function (a) {
                    document.body.style.overflow = "scroll";
                    mainWrap.parentNode.removeChild(mainWrap);
                });
            });


        },
        template:
            "<div><img ng-src='{{image.thumbnail}}'>" +
            "<div>{{image.title}}</div></div>"
    }
}