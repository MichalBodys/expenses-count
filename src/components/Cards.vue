<template>
  <div class="card">
    <h2>{{ card.title }}</h2>
    <form action="" @submit="addRecipe">
      <button type="submit" @click.prevent="addRecipe">Add recipe</button>
      <select name="recipes" id="recipes" v-model="value">
        <option value="taxi">Taxi</option>
        <option value="hotel">Hotel</option>
        <option value="air ticket">Air ticket</option>
        <option value="train">Train</option>
      </select>
      <label for="cost">Price</label>
      <input type="number" v-model="price" />
    </form>

    <Recipes v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    <p>recipes total {{ recipesTotal }}</p>

    <form action="">
      <label for="start-date">Start</label>
      <input id="start-date" type="date" v-model="startDate" @change="dateCalc" />
      <label for="end-date">End</label>
      <input id="end-date" type="date" v-model="endDate" @change="dateCalc" />
      <!-- <button @click.prevent="dateCalc">calculate days</button> -->

      <label for="fuel">Personal car mileage</label>
      <input id="fuel" type="number" v-model="millage" @keyup="calculateMilage" />
    </form>
    <p>due {{ mileageRate }}$</p>
    <p>days {{ dailyAllowance }}</p>
    <button @click.prevent="calcSummary">Summary</button>
    <p v-show="showAmount">{{ totalAmount }}</p>
  </div>
</template>

<script>
import Recipes from './Recipes.vue'
import { mapState } from 'pinia'
import useDataStore from '@/stores/data'
export default {
  name: 'cards',
  data() {
    return {
      recipes: [],
      price: '',
      startDate: '',
      endDate: '',
      dailyAllowance: 0,
      millage: '',
      mileageRate: 0,
      value: '',
      recipesTotal: 0,
      totalAmount: 0,
      showAmount: false
    }
  },
  computed: {
    ...mapState(useDataStore, ['cards', 'carRate'])
  },
  components: {
    Recipes
  },
  props: ['card'],
  methods: {
    addRecipe() {
      if (!this.price) {
        alert('enter price')
        return
      } else if (this.recipes.length > 4) {
        alert('you reached 5 recipes which is maximum')
        return
      }
      const newId = this.recipes.length + 1

      this.recipes.push({ id: newId, text: this.title, typeOf: this.type, cost: this.price, type: this.value })
      this.recipesTotal += this.price
      this.title = ''
      this.price = ''
    },
     dateCalc() {
      if(this.startDate === isNaN && this.endDate === isNaN){
        return;
      }
      const start = new Date(this.startDate).getTime()
      const end = new Date(this.endDate).getTime()
      const timeDifference = end - start
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

      this.dailyAllowance = daysDifference
    },
    calculateMilage() {
      this.mileageRate = (this.millage * this.carRate).toFixed(2)
    },
    calcSummary(){
      this.totalAmount = this.recipesTotal+ this.mileageRate+ this.dailyAllowance
      this.showAmount = true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 350px;
  height: 450px;
  padding: 1em;
  background-color: rgb(0, 0, 0);
  border: 10px solid;
  border-image-source: linear-gradient(to left, #036943, #0c0575);
  border-image-slice: 1;
  border-width: 3px;
}
</style>
