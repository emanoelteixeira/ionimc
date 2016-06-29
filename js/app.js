(function(){

var app=angular.module('conversor', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('imc', {
    url: '/imc',
    templateUrl: 'templates/imc.html'
  });
  $stateProvider.state('conversao', {
    url: '/conversao',
    templateUrl: 'templates/conversao.html'
  });


  $urlRouterProvider.otherwise('/imc');
});

app.controller('ImcControlador',function($scope,$state){
  $scope.peso=80;
  $scope.altura=1.80;
  $scope.lista=[];


  $scope.calcula = function() {
    $scope.imc=$scope.peso/($scope.altura*$scope.altura);
    if ($scope.imc<17){
      $scope.situacao='Muito abaixo do peso';
    }
    else if ($scope.imc<18.49){
      $scope.situacao='Abaixo do peso';
    }
    else if ($scope.imc<24.99){
      $scope.situacao='Peso normal';
    }
    else if ($scope.imc<29.99){
      $scope.situacao='Acima do peso';
    }
    else {
      $scope.situacao='Obeso';
    }
    $scope.lista.push({peso:$scope.peso,altura:$scope.altura,situacao:$scope.situacao});
  };

  $scope.calcula();
  $scope.vaiParaConversao = function() {
    $state.go('conversao');
  };
});

app.controller('ConverteControlador',function($scope,$state){
  $scope.centimetros=2.54;
  $scope.polegadas=1;
  $scope.cm2pol = function() {
    $scope.polegadas=$scope.centimetros/2.54;
  };
  $scope.pol2cm = function() {
    $scope.centimetros=$scope.polegadas*2.54;
  };


});



app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
}());
