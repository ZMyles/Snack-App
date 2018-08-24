"use strict";

//"SearchService"($http) is our databasse for Api information
//"GET" is a method that puklls the information the Api
//Url is the loctaion of the Api

function SearchService($http){
    const vm= this;
    vm.recipeSearch =(ingredients,remove,diet) =>{
            return $http({
                method:"GET",
                url:`https://api.edamam.com/search?q=${ingredients}&app_id=033b0c0b&app_key=100411999bd3eff5af821e44acbb9209&excluded=${remove}&diet=${diet}`
            }).then((response) => {
                return response;
            })    
    };
    // this empty array was built to store info from api
    vm.favoriteFoods = [];
//2.) Set and getters are used to carry info from component to component
    vm.setFavorites=(newItem)=> {
        vm.favoriteFoods.push(newItem);
        console.log(vm.favoriteFoods);
        return vm.favoriteFoods;

    }
    vm.getFavorites=()=> {
        return vm.favoriteFoods;
    }
   
    
    
}

//1.) build your components and link module
angular.module("Food")
.service("SearchService",SearchService);



