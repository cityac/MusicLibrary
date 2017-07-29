class AlbumController {
  constructor($scope, $sce, Movies, API) {
    $scope.trustSrc = function(src, index) {
      return $sce.trustAsResourceUrl(src + "?autoplay=" + (index==0 ? "1" : "0"));
    };

    this.API = API
    this.Movies = Movies;
    this.albumId = $scope.$parent.album.id;
    this.getMovies();

  }

  getMovieSource(sourceId) {
    return this.API.youtubeEmbedApi + sourceId;
  }

  getMovies() {
    this.Movies.get({ albumId: this.albumId }).then(() => {
      this.movies = this.Movies.getState();
    });
  }
}

AlbumController.$inject = ["$scope", "$sce", "Movies", "API"];

export { AlbumController };
