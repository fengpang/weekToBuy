<script setup lang="ts">
import type { Ingredient } from '../types'
const ingredientList = ref<Ingredient[]>([])
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
</template>
