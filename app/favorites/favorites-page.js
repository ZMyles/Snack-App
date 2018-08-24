"use strict";
const favoritesPage={
    template:`
    <section id="favPage">
        <h1> My Favorite Foods</h1>
        <ul class="favBody">
       
            <li ng-repeat="newItem in $ctrl.newItem"newItem="newItem">    <img src="{{newItem.image}}" >{{newItem.label}}<button ng-click="$ctrl.remove(index)">X</button></li>
            <button ng-click="$ctrl.search();"></button>
        </ul>   
    </section>
    `,
    //this controller injects our service function and allows us to view our Array of "favoritefoods" and remove that we don't want in our favorites list
controller: ["SearchService", "$location",function(SearchService, $location){
        const vm =this;
        vm.favFoods=SearchService.favoriteFoods;
        vm.remove = (index)=>{
            vm.favFoods.splice(index,1);
        }
        vm.newItem=SearchService.getFavorites();

        vm.search = () => {
            $location.path("/search-criteria")
        }
        
}
]}

//1.) build your components and link module
angular
.module("Food")
.component("favoritesPage",favoritesPage);
