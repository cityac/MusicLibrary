import "./app.styl";
import template from "./app.html";

export const appDirective = () => {
  return {
    template,
    restrict: "E",
    scope: {},
    replace: true,
    controller: function($state, $scope, $rootScope, Auth ) {
      $scope.isAuth = Auth.isAuth();

      $rootScope.$on("authChanged", function() {
        $scope.isAuth = Auth.isAuth();
      });

      $scope.logout = function() {
        Auth.logout();
      };
    }
  };
};
