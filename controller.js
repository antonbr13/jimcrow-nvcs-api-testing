angular.module('bjsStats')

.controller('mainCtrl', function(mainService) {

   var vm = this;

   var data = function() {
   mainService.getData()
   .then(function(response) {

      vm.dataSets = response;

      console.log(vm.dataSets);
   });
};

data();


});
