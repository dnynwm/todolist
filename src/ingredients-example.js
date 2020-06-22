class ingredient {
    constructor(name) {
        this.name = name;
    }
}

class shoppingCart {
    constructor(ingredients) {
        this.ingredients = ingredients; //array of instances of ingredient class
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}

const banana = new ingredient("banana");
const potato = new ingredient("potato");
const apple = new ingredient("apple");
const pear = new ingredient("pear");

const ingredients = [banana, potato, apple];

const cart = new shoppingCart(ingredients)
cart.addIngredient(pear)

console.log(cart);