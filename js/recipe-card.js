
function recipeCard() {
    this.title = 'Guacamole';
    this.servings = 4;
    this.ingredients = ['3 Avocados','1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Paper'];
    this.showRecipe = function() {
        console.log(`${this.title}`) ;
        console.log(`Serves: ${this.servings}`);
        console.log('Ingredients:');
        for (i=0; i<this.ingredients.length; i++) {
            console.log(this.ingredients[i]);   
        }
        
    }
   
}
const guacamole = new recipeCard();
guacamole.showRecipe();

