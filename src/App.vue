<template>
  <div class="wrapper">
    <form action="">
      <label for="">Trip Name</label>
      <input type="text" v-model="destination" v-on:keyup.enter="addCard" />
      <button @click.prevent="addCard">Add reimbrusment</button>
    </form>

    <div class="white-board">
      <!-- CARDS -->
      <Cards v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'

export default {
  name: 'App',
  data() {
    return {
      cards: [

      ],
      destination: ''
    }
  },
  components: {
    Cards
  },
  methods: {
    addCard() {
      if (!this.destination) {
        alert('Please enter your destination')
        return
      }

      const newId = (this.cards.length) +1

      this.cards.push({
        title: this.destination,
        id: newId,
      })
      this.destination = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: auto;
}

.white-board {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin: auto;
  border: solid red;
  width: 100%;
  height: 800px;

  .card {
    width: 350px;
    height: 450px;
    border: solid white;
    .new-recipe {
      border: solid white;
    }
  }
}
</style>
