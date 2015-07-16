angular.module('ringApp', [])
  .controller('MathsController', function($scope) {
    //var mathsGenerator = this;
    $scope.X = 0;
    $scope.Y = 0;
    $scope.AnsLeft = 0;
    $scope.AnsRight = 0;
    $scope.Ans = 0;
    $scope.Scores = 0;

    $scope.random = function() {
      $scope.X = Math.floor((Math.random() * 10));
      $scope.Y = Math.floor((Math.random() * 10));
      $scope.Ans = $scope.X + $scope.Y;
      $scope.AnsLeft = $scope.AnsRight = $scope.Ans;
      var wrongAns = $scope.Ans;
      while (wrongAns == $scope.Ans) {
        wrongAns = Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10));
      }
      if (Math.random() > 0.5)
        $scope.AnsLeft = wrongAns;
      else
        $scope.AnsRight = wrongAns;
    };

    $scope.reset = function() {
      $scope.Scores = 0;
      $scope.random();
    };

    $scope.answer = function(value) {
      var ans = (value == 'left' ? $scope.AnsLeft : $scope.AnsRight);
      $scope.Scores += (ans == $scope.Ans ? 100 : 0)
      $scope.random();
    }
  });
