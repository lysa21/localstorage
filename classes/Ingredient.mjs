class Ingredient {
    constructor(name, isDone) {
        this.isDone = isDone;
        this.name = name
    }

    renderIngredient(list, i) {
        list.innerHTML += `<li class='ingredient'>
    <input data-i=${i} id='ingredient${i}' type="checkbox" ${this.isDone ? 'checked' : ''}>
    <label for='ingredient${i}' ></label>
     ${this.name}</li>
  `
    }
}

export default Ingredient;
