<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <div class="content">
      <Calendar :list-record="dummy" />
    </div>
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue'
// Register components in your 'main.js'

export default {
  components: {
    Calendar,
  },
  middleware: 'authentication',
  asyncData() {
    return {
      dummy: [
        { test: '2022-02-01' },
        { test: '2022-02-02' },
        { test: '2022-02-03' },
      ],
    }
  },
}
</script>

<style>
@import '../assets/main-assets/css/main.css';

.content {
  justify-content: center;
}
</style>
