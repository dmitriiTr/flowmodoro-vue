<script setup lang="ts">
import { useTimer } from 'vue-timer-hook';
import Time from './Time.vue'

const props =
  defineProps<{ handleExit: (seconds: number) => void, lastFocus: number }>()

const time = new Date()
time.setSeconds(time.getSeconds() + props.lastFocus)
const { seconds, minutes, hours, isRunning } = useTimer(time, true);
</script>

<template>
  <div class="d-flex flex-column">
    <Time v-if="isRunning" :hours="hours" :minutes="minutes" :seconds="seconds" />
    <div v-else class="text-h1 pa-2 text-center">
      Time Up
    </div>
    <v-btn @click="handleExit" variant="outlined">
      End rest
    </v-btn>
  </div>
</template>

<style scoped></style>
