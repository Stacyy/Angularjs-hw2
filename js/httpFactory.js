angular.module('myApp')
    .factory('lightBox', lightBox)

function lightBox($http) {
    var image = {};
    image.getImage = function () {
        var imgArr = [];
        $http.get('https://api.myjson.com/bins/46d2e').success(function (imgObject) {
            for (property in imgObject) {
                imgArr.push(imgObject[property]);
            }
        });
        return imgArr;
    }
    return image;
}