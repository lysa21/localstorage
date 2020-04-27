import Ingredient from "./Ingredient.mjs";

class Tapas {
    constructor() {
        this.addItems = document.querySelector('.add-items')
        this.itemsList = document.querySelector('.plates')
        this.histories = JSON.parse(localStorage.getItem('ingrédients')) || [];
        this.renderHistory();
        this.listenEvents();
    }

    renderHistory() {
        this.itemsList.firstElementChild.style.display = 'none'
        this.histories.forEach((ingredient, i) => {
            ingredient = new Ingredient(ingredient.name, ingredient.isDone)
            ingredient.renderIngredient(this.itemsList, i)
        })
    }

    addIngredient = (e) => {
        e.preventDefault();
        console.log(this)
        let newIngredient = new Ingredient(e.target.firstElementChild.value, false);
        let total = document.getElementsByClassName('ingredient').length;
        console.log(total)
        newIngredient.renderIngredient(this.itemsList, total + 1)
        this.histories.push(newIngredient)
        e.target.firstElementChild.value = '';
        localStorage.setItem('ingrédients', JSON.stringify(this.histories))

    }

    toggleDone(e) {
        if (!e.target.dataset.i)
            return;
        const index = e.target.dataset.i;
        console.log(e.target)
        console.log(index)
        console.log(this.histories[index])
        this.histories[index].isDone = !this.histories[index].isDone;
        localStorage.setItem('ingrédients', JSON.stringify(this.histories));
    }

    listenEvents() {
        this.addItems.addEventListener('submit', this.addIngredient);
        this.itemsList.addEventListener('click', this.toggleDone.bind(this))
    }
}

export default Tapas;
