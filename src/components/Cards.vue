<template>
  <div>
    <h2>{{ card.title }}</h2>
    <form action="" @submit="addRecipe">
      <button type="submit" @click.prevent="addRecipe">Add recipe</button>
      <label for="title">title</label>
      <input type="text" id="title" v-model="title" />
      <select name="recipes" id="recipes" v-model="type">
        <option value="taxi">Taxi</option>
        <option value="hotel">Hotel</option>
        <option value="air ticket">Air ticket</option>
        <option value="train">Train</option>
      </select>
    </form>

    <Recipes v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>

    <form action="">
      <label for="start-date">Start</label>
      <input id="start-date" type="date" />
      <label for="end-date">End</label>
      <input id="end-date" type="date" />

      <label for="fuel">Personal car mileage</label>
      <input id="fuel" type="number" />
    </form>
  </div>
</template>

<script>
import Recipes from './Recipes.vue'
export default {
  name: 'cards',
  data() {
    return {
      recipes: [],
      title: '',
      type: ''
    }
  },
  components: {
    Recipes
  },
  props: ['card'],
  methods: {
    addRecipe() {
      if(!this.title){
        alert("Title please");
        return
      }
      const newId = (this.recipes.length) + 1;
      this.recipes.push({id:newId, text: this.title, typeOf: this.type })

      this.title = ''
      this.typeOf = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
