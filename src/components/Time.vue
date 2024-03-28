<script setup lang="ts">
import { ref } from 'vue';

const { hours, minutes, seconds, } =
  defineProps<{ hours: number, minutes: number, seconds: number, overtime?: boolean }>()

const formatTime = (time: number) => time < 10 ? '0' + time : time;

const showSeconds = ref(false);

const minutesSum = minutes + hours * 60;

</script>

<template>
  <div class="text-h1 text-center" :color="overtime ? 'primary' : undefined" @click="showSeconds = !showSeconds">
    <template v-if="showSeconds">
      {{ `${formatTime(minutesSum)}:${formatTime(seconds)}` }}
    </template>
    <template v-else>
      {{ minutesSum }}
      <div class="text-body-1 text-center d-inline">
        min
      </div>
    </template>
  </div>
</template>

<style scoped></style>
