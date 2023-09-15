<script setup lang="ts">
import type { Day } from '../types'
const dayList = ref<Day[]>([
  { name: '星期一', dishName: '', ingredients: [] },
  { name: '星期二', dishName: '', ingredients: [] },
  { name: '星期三', dishName: '', ingredients: [] },
  { name: '星期四', dishName: '', ingredients: [] },
  { name: '星期五', dishName: '', ingredients: [] },
  { name: '星期六', dishName: '', ingredients: [] },
  { name: '星期日', dishName: '', ingredients: [] },
])
const addDay = () => {
  dayList.value.push({ name: '星期一', dishName: '番茄炒蛋', ingredients: [{ name: '番茄', id: 'xxxx', weight: 250, icon: '222' }, { name: '蛋', weight: 1, id: 'wwwwww', icon: '333333' }] })
}
const reset = () => {
  dayList.value.forEach((day) => {
    day.dishName = ''
    day.ingredients = []
  })
}
const calculate = () => {
  const resultList = dayList.value.map(day => day.ingredients).flat()
  const resultObject: any = resultList.reduce((result: any, ingredient) => {
    if (!result[ingredient.name])
      result[ingredient.name] = 0
    result[ingredient.name] += ingredient.weight
    return result
  }, {})
  return Object.keys(resultObject).reduce((result, key) => {
    result += `${key}: ${resultObject[key]}`
    return result
  }, '')
}
</script>

<template>
  <div>
    <h1>type it</h1>
    <div v-for="(day, index) in dayList" :key="index" class="day">
      <input v-model="day.name" type="text">
      <input v-model="day.dishName" type="text">
      <div v-for="ingredient in day.ingredients" :key="ingredient.id" class="ingredients" />
    </div>
    <button @click="reset">
      reset
    </button>
    <br>
    <!-- <button @click="addDay">
      addDay
    </button> -->
    <br>
    <div class="week-to-buy">
      {{ calculate() }}
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
