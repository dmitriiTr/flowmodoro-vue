<script setup lang="ts">
import Timer from './components/Timer.vue'
import { ref } from 'vue'
import Stopwatch from './components/Stopwatch.vue'

const paperWidth = 500;
const lastFocus = ref<null | number>(null);

const handleExitStopwatch = (seconds: number) => {
  lastFocus.value = seconds;
};

const handleExitTimer = () => {
  lastFocus.value = null;
};
</script>

<template>
  <v-container class="d-flex align-center justify-center" style="height: 100vh;">
    <v-card variant="elevated" :width="paperWidth" :height="paperWidth * 1.4">
      <v-card-item>
        <div class="text-h4 pa-2 text-center text-grey-darken-1">
          Task: Rest
        </div>
        <Timer v-if="lastFocus" :handle-exit="handleExitTimer" :last-focus="lastFocus"/>
        <Stopwatch v-else :handle-exit="handleExitStopwatch"  />
      </v-card-item>
    </v-card>
  </v-container>
</template>

<style scoped></style>
