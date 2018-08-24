"use strict"
//this is like a "train Station" it allows us to travel amoungs our pages.
angular
.module("Food",["ngRoute"])
.config(["$routeProvider",($routeProvider)=>{
    $routeProvider
    .when("/search-criteria",{
        template:`<search-criteria></search-criteria>`
    })
    .when("/favorites-page",{
        template:`<favorites-page></favorites-page>`
    })
    .otherwise({
        redirectTo:`/search-criteria`
    })

}])