(function () {
'use strict'
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject= ['$scope'];
    function LunchCheckController($scope){
        $scope.nombre="";
         $scope.mensaje="";
        $scope.listado=[];
        $scope.contador=0;
       
        $scope.calculo=function(){
            $scope.contador=0;
            //revisar si es vacio
            if($scope.nombre==="" || ($scope.nombre).length==0){
                $scope.mensaje="Please enter data first";
               
            }
           else {
              $scope.listado=$scope.nombre.split(','); 
               
               for(var i=0;i<$scope.listado.length;i++ )
                   {
                     if($scope.listado[i].length>1)
                        $scope.contador++; 
                       console.log($scope.listado[i]);
                   }
            console.log($scope.listado);
            console.log($scope.listado.length); 
            console.log($scope.contador); 
             if($scope.contador>0 )
            if($scope.contador<=3 && $scope.contador>0){
               $scope.mensaje="Enjoy!";
               }
            else {
                $scope.mensaje= "Too much!";
            }else{
                 $scope.mensaje="Please enter data first";
            }
            
           }
        }
       
      
    }

})();