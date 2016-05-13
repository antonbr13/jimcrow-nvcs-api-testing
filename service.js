angular.module('bjsStats')

.service('mainService', function($http) {


   this.getData = function() {
      return $http({
         method   : "GET",
         url      : "http://www.bjs.gov:8080/bjs/ncvs/v2/personal/2011?format=json",
         dataType : 'json'
      })
      .then(function(response) {
         console.log(response.data);
         return response.data.personalData;
      });
   };

});
