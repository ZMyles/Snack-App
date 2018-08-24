"use strict"
const searchCriteria = {
    // inputs for the user to type, "ng-model" gathers data from user
    template:`
    
    <div id="body">
    
  <div id="searchPage">  
    <h1>Search for Recipes</h1>
    
    <input type="text" ng-model="$ctrl.ingredientOne" placeholder="Ingredients">
    
    <input type="text" ng-model="$ctrl.excludes" placeholder="Exclude">

    <!-- allows user to select from a drop-down-menu of options and gather data using "ng-model"--> 
    <label>Select Die</label>
    <select ng-model="$ctrl.diet" class="dropDown">
    <option value="balanced">Balanced
    <option value="high-protein">High Protein
    <option value="high-fiber">High Fiber
    <option value="low-fat">Low fat
    <option value="low-carb">Low Carb
    </select>

    <!-- sends user input from models and "injects" it into our Api search request -->
    <button ng-click="$ctrl.search($ctrl.ingredientOne,$ctrl.excludes,$ctrl.diet);">Search</button>
  
    
   </div>
     
   <ul>
   <li class="data" ng-repeat="item in $ctrl.recipes" track by $index>

    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
        <div class="flipper">
            <div class="front">
       <p id="foodNames">{{item.recipe.label}}
       <img src="{{item.recipe.image}}" >
       
            </div>
           <div class="back"> 
           <h2>Ingredients</h2>
           <p  class="ingredients" ng-repeat="list in item.recipe.ingredientLines"track by $index>{{list}}</p>
       
            </div>
       </div>
    </div>

    <div class="flex-button">
    <button  class="linkBtn position"ng-click="$ctrl.add(item.recipe)">Add</button></p>
    <button class="linkBtn" href="{{item.recipe.url}}" target="_blank">Learn More?</button>
    </div>
   </li>
</ul>
<footer></footer>
   </div>
    `,

    // <!-- ng-repeat loops through Api reults and displays them one by one on the page -->
    // <p ng-repeat="item in $ctrl.recipes">{{item.recipe.label}}

    // <img src="{{item.recipe.image}}"> <a href="{{item.recipe.url}}" target="_blank">Learn More?</a>
    
    // <!-- adds the "label" of an item to our Array "favorite food" -->
    // <button ng-click="$ctrl.add(item.recipe.label)">add to favorites </button>

    // <!-- "list" is looping through  array in the object "item" -->
    
    //the controller pulls our information from the apir
    controller: ["SearchService",function(SearchService){
        const vm=this;
        vm.search=(ingredientOne,excludes,diet)=>{
            SearchService.recipeSearch(ingredientOne,excludes,diet).then((response)=>
            {console.log(response);
                vm.recipes =response.data.hits;
            });   
        }
        //this sets our information to the Array
        vm.add= (newItem)=>{
            SearchService.setFavorites(newItem);
            
        }
    }]
};


//1.) build your components and link module
angular.module("Food")
.component("searchCriteria",searchCriteria);