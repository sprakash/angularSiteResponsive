function TopShowController($scope) { 
	$scope.shows = [{text:'Game of Thrones', fav:true},
					{text:'Stranger Things', fav:false},
					{text:'Twin Peaks', fav:true},
					{text:"Orange Is The New Black", fav:false}];

	$scope.addShow = function(){
		$scope.shows.push({text:$scope.formShowText, fav:false});
	}

	$scope.totalShows = $scope.shows.length; 

}