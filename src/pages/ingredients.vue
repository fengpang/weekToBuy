<script setup lang="ts">
import type { Ingredient } from '../types'
const ingredientList = ref<Ingredient[]>([])
const add = () => {
  ingredientList.value.push({ name: '土豆', weight: 666, icon: 'xxxx', id: 'xxxxx' })
}
</script>

<template>
  <div v-for="ingredient in ingredientList" :key="ingredient.id" class="ingredients">
    <div class="icon" :class="ingredient.icon" />
    <div class="name">
      {{ ingredient.name }}
    </div>
    <div class="weight">
      {{ ingredient.weight }}
    </div>
  </div>
  <button @click="add">
    add
  </button>
</template>

<route lang="yaml">
meta:
  layout: home
  </route>
