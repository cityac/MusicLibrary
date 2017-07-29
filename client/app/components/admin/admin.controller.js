class AdminController {
  constructor($scope, Users) {
    this.Users = Users;
    $scope.gridOptions = {
      enableFiltering: false,
      columnDefs: [
        { name: "id", width: "40%"},
        { name: "username"},
        { name: "token"},
        { name: "lastVisit", width: "20%",  }
      ],
      onRegisterApi: function(gridApi) {
        $scope.gridApi = gridApi;
      }
    };
    this.getUsers($scope);
    this.Users.visit(window.localStorage.getItem("musiclibrary-token"));
  }

  getUsers(scope) {
    this.Users
      .get()
      .then(() => {
        scope.gridOptions.data = this.Users.getState();
      })
      .catch(e => {
        console.log(e);
      });
  }
}
AdminController.$inject = ["$scope", "Users"];
export { AdminController };
