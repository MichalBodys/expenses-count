<template>
  <div class="new-recipe">
    <p>{{ recipe.type }} {{ recipe.cost }} $</p>


  </div>
</template>

<script>
export default {
  name: 'Recipes',
  props: ['recipe']
}
</script>

<style lang="scss" scoped>
  .new-recipe {
    display: flex;
    border: solid white;
  }
</style>
