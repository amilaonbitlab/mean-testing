// public/js/controllers/appController.js
var abc = sampleApp.controller('homeController', function($scope,$location) {

    $scope.homeLine = 'Now You are in Home Page ';

    $scope.changeLocation = function (){
        $location.path("/test");
    }

    $scope.customer = {
        name: 'James',
        address: 'Mellieha'
    };

    var array = {"data":[{"ID":1,"BrandID":1,"ProductID":1,"Name":"RI","Created":"2016-04-11T23:‌​19:03.463"},
                     {"ID":2,"BrandID":2,"ProductID":1,"Name":"BLE","Created":"2016-04-11T‌​23:19:03.48"} ]};

  $scope.brands = array.data;

     $scope.name = 'World';
  $scope.addresses = [
            {
                "addressLine1": "150 Address",
                "addressLine2": "LONDON",
                "addressLine3": "",
                "addressLine4": "EC00 00X"
            },
            {
                "addressLine1": "152 Address",
                "addressLine2": "LONDON",
                "addressLine3": "",
                "addressLine4": "EC00 00X"
            },
            {
                "addressLine1": "154 Address",
                "addressLine2": "LONDON",
                "addressLine3": "",
                "addressLine4": "EC00 00X"
            }
        ];
  
  $scope.model = {};

  // $scope.model.addressChoice = $scope.addresses[2]; // <-- WORKs! 


});


abc.directive('customerDirective', function() {
    return {
        template: 'Name: {{customer.name}}      Address: {{customer.address}}'
    };
});