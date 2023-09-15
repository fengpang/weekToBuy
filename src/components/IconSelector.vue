<script setup lang="ts">
const emit = defineEmits(['input'])
const iconList: string[] = ['blueberries']
const emitIcon = (icon: string) => {
  emit('input', icon)
}
</script>

<template>
  <div v-for="icon in iconList" :key="icon" class="ingredients">
    <div class="icon" :class="`i-fluent-emoji-flat-${icon}`" @click="emitIcon(icon)" />
  </div>
</template>
