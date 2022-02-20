const url="https://covid19.mathdro.id/api";

let app =angular.module('MyApp',[]);
app.controller('MyCtrl',($scope,$http) =>{
    $scope.name="Stay Home Stay Safe";
console.log("App loaded");

$http.get(url).then( 
    (response)=>{
        
      console.log(response);
      $scope.all_data=response.data;
    },
    (error)=>{
     console.log(error);
    }    );
    $scope.get_c_data=()=>{
       let country = $scope.c;
       if(country==''){
           $scope.c_data=undefined;
           return;
       }
       $http.get(`${url}/countries/${country}`)
       .then( 
           (respone)=>{
               console.log(respone.data);
               $scope.c_data=respone.data;
           },(error)=>{
               console.log(error);
           }  );
    };
});

