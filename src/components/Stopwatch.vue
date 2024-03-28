<script setup lang="ts">
import { ref } from 'vue'
import { useStopwatch } from 'vue-timer-hook';
import Time from './Time.vue'

const props = defineProps<{ handleExit: (seconds: number) => void }>()

const toTotalSeconds = (hours: number, minutes: number, seconds: number) => seconds + minutes * 60 + hours * 3600;

const baseDuration = 30;
const focusTime = ref(baseDuration)

const { seconds, minutes, hours, isRunning, start } = useStopwatch(0, false);

const handleExitClick = () => {
  props.handleExit(toTotalSeconds(seconds.value, minutes.value, seconds.value));
}

</script>

<template>
  <div class="d-flex flex-column">
    <Time :hours="hours" :minutes="minutes" :seconds="seconds" />
    <div class="d-flex flex-column">
      <v-text-field :disabled="isRunning" v-model="focusTime" height="30" label="Duration, min" variant="outlined" />
      <v-btn v-if="isRunning" variant="outlined" @click="handleExitClick">
        Rest
      </v-btn>
      <v-btn v-else variant="outlined" @click="start()">
        Start
      </v-btn>
    </div>
  </div>
</template>

<style scoped></style>
