<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <div class="content">
      <Calendar
        :list-record="listRecord"
        :list-holiday="listHoliday"
        :year="year"
        :month="month"
        @update:calendar="updateCalendar"
      />
    </div>
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue'
import { getSession } from '../utils/auth'
import { getCalendar, fetchHoliday } from '@/utils/axios'
// Register components in your 'main.js'

export default {
  components: {
    Calendar,
  },
  middleware: 'authentication',
  async asyncData({ query }) {
    const token = getSession()
    const year = parseInt(query.year) || new Date().getFullYear()
    const month = parseInt(query.month) || new Date().getMonth() + 1
    const listRecord = await getCalendar(token, { year, month })
    const listHoliday = await fetchHoliday({
      year,
      month: month.toString().padStart(2, '0'),
    })
    return {
      listRecord,
      listHoliday,
      year,
      month,
    }
  },
  watchQuery: true,
  methods: {
    updateCalendar(data) {
      if (data === -1) {
        if (this.month > 1) this.month--
        else {
          this.month = 12
          this.year--
        }
      } else if (this.month < 12) {
        this.month++
      } else {
        this.month = 1
        this.year++
      }

      this.$router.replace({
        path: this.$route.path,
        query: {
          year: this.year,
          month: this.month,
        },
      })
    },
  },
}
</script>

<style>
@import '../assets/main-assets/css/main.css';

.content {
  justify-content: center;
}

.calendar {
  margin: auto;
}
</style>
