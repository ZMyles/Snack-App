"use strict";
const favoritesPage={
    template:`
    <div class="main-head">
    <a href="#!/search-criteria" class="nav-text">Search</a>
    <div class="logo">
    <h3>Snack-App</h3>
    </div>
    <a href="#!/favorites-page" class="nav-text">My Favorites</a>
</div>
    
    <section id="favPage">
    <h1 class="hd-position"> My Favorites</h1>
        <div class="favbody"></div>
        <ul class="favBody">
       

        
            <li  class="data" ng-repeat="newItem in $ctrl.newItem"newItem="newItem">
            <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                <div class="flipper">
            <div class="front">
                 <p id="foodNames"> {{newItem.label}}
                    <img  src="{{newItem.image}}" >
             </div>

             </div>
             <div class="back"> 
                 <h2>Ingredients</h2>
                 <p  class="ingredients" ng-repeat="newItem in newItem.recipe.ingredientLines"track by $index>{{newItem}}</p>
         
              </div>
            </div>
            </div>

             
             <button ng-click="$ctrl.remove(index)">Remove</button></li>
            <button ng-click="$ctrl.search();">Hungry for more?</button>
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
