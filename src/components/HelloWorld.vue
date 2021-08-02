<template>
  <h1>{{ props.msg }}</h1>
  <h2>{{ number }}</h2>
  <el-button type="primary">el-button</el-button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  msg: {
    type: String
  }
})
const number = 1
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
