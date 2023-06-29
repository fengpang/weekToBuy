<script setup lang="ts">
const router = useRouter()
const go = () => {
  router.push('/ingredients')
}
</script>

<template>
  <nav text-xl mt-6 @click="go">
    食材库
  </nav>
</template>
