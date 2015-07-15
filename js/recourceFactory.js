angular.module('myApp')
	.factory("imageBox", imageBox);
	
	function imageBox($resource){
		return{
			getImage: function(){
				var image = [];
				$resource('https://api.myjson.com/bins/46d2e').query(function(imageObject){
					for(property in imageObject){
						image.push(imageObject[property]);
					}
				});
				return image;
			}
		}
	}