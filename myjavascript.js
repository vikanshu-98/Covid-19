angular.module("Covid-19",[]).controller("mycontrol",function($scope,$http){
    $scope.tittle="Stay Home Stay Safe";
    $http({
        method:"GET",
        url:"https://covid19.mathdro.id/api"
    }).then(function mySuccess(response){
        $scope.totaldata=response.data;
    },
    function myError(response){
        $scope.totaldata="Something Went Wrong....";
    }
            );
    
    
    //////
    
    $scope.myfun=function(){
      let country=  $scope.count;
        if(country==" ")
        {
        $scope.count_data=undefined;   
            return;
        }
       $http({
           method:"GET",
           url:'https://covid19.mathdro.id/api/countries/'+country+''
       }).then(
               function mySuccess(response){
                   $scope.count_data=response.data;
                   
                   
               },function myError(response){
                   $scope.count_data=response.data;
               });
        
        
        
        
        
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
