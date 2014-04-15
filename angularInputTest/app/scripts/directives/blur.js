'use strict';

angular.module('angularInputTestApp')
  .directive('ngBlur', function ($document) {
    return function( scope, elem, attrs ) {
	  	elem.bind('click', function(event) {
	      event.stopPropagation();
	    });
	    $document.bind('click', function(event) {
	    	if(!$(event.target).hasClass('link')){
	  			scope.$apply(function(){
	  				scope.visions = false;
	  			});
	  		}
	  		else{
	  			scope.$apply(function(){
	  				scope.visions = true;
	  			});
	  		}
	  	});
	  };
  });
