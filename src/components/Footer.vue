<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const isIngredients = ref(route.name === 'ingredients')
watch(() => route.name, (newName) => {
  isIngredients.value = newName === 'ingredients'
})
const go = () => {
  if (isIngredients.value)
    router.push('/')

  else
    router.push('/ingredients')
}
</script>

<template>
  <nav text-xl mt-6 @click="go">
    {{ isIngredients ? 'home' : '食材库' }}
  </nav>
</template>
