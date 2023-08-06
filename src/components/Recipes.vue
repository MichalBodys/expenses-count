<template>
  <div class="new-recipe">
    <p>{{ recipe.text }}</p>
    <label>{{ recipe.typeOf }}</label>
    <div>
      <input type="number" /><p>$</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipes',
  props: ['recipe']
}
</script>

<style lang="scss" scoped></style>
