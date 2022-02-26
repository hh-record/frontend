<template>
  <div class="calendar">
    <h1>
      <span class="prev" @click="prevMonth()">{{ '<' }}</span>
      {{ monthString }}
      <span class="next" @click="nextMonth()">{{ '>' }}</span>
    </h1>
    <div class="header">
      <div>MON</div>
      <div>TUE</div>
      <div>WED</div>
      <div>THU</div>
      <div>FRI</div>
      <div>SAT</div>
      <div>SUN</div>
    </div>
    <div class="date">
      <div
        v-for="(_, i) in gapDayCount"
        :key="`blank_${i}`"
        class="cell blank"
      ></div>
      <div
        v-for="(day, i) in endDateOfMonth"
        :key="i"
        class="cell"
        :class="{ holiday: isHoliday(day) }"
      >
        {{ day }}
        <span v-if="isWrittenDay(day)">👽</span>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchHoliday } from '@/utils/axios'

export default {
  props: {
    listRecord: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      listHoliday: [],
    }
  },
  async fetch() {
    this.listHoliday = await fetchHoliday({
      year: this.currentYear,
      month: (this.currentMonth + 1).toString().padStart(2, '0'),
    })
  },
  computed: {
    monthString() {
      const temp = new Date()
      temp.setFullYear(this.currentYear)
      temp.setMonth(this.currentMonth)
      return temp.toLocaleString('default', {
        year: 'numeric',
        month: '2-digit',
      })
    },
    gapDayCount() {
      const temp = new Date()
      temp.setFullYear(this.currentYear)
      temp.setMonth(this.currentMonth)
      temp.setDate(1)
      return (temp.getDay() || 7) - 1
    },
    endDateOfMonth() {
      const temp = new Date()
      temp.setFullYear(this.currentYear)
      temp.setMonth(this.currentMonth + 1)
      temp.setDate(0)

      return temp.getDate()
    },
  },
  watch: {
    async currentMonth() {
      this.listHoliday = await fetchHoliday({
        year: this.currentYear,
        month: (this.currentMonth + 1).toString().padStart(2, '0'),
      })
    },
  },
  methods: {
    prevMonth() {
      if (this.currentMonth > 0) this.currentMonth--
      // Date object 기준 1월
      else {
        this.currentMonth = 11 // Date object 기준 12월
        this.currentYear--
      }
    },
    nextMonth() {
      if (this.currentMonth < 11) this.currentMonth++
      // Data object 기준 12월
      else {
        this.currentMonth = 0 // Date object 기준 1월
        this.currentYear++
      }
    },

    isWrittenDay(day) {
      const temp = new Date()
      temp.setFullYear(this.currentYear)
      temp.setMonth(this.currentMonth)
      temp.setDate(day)

      const dateString = `${temp.getFullYear()}-${(temp.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${temp.getDate().toString().padStart(2, '0')}`

      return this.listRecord.map((value) => value.test).includes(dateString)
    },
    isHoliday(day) {
      const temp = new Date()
      temp.setFullYear(this.currentYear)
      temp.setMonth(this.currentMonth)
      temp.setDate(day)

      const dateString = `${temp.getFullYear()}-${(temp.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${temp.getDate().toString().padStart(2, '0')}`

      console.log({ day, flag: this.listHoliday?.includes?.(dateString) })
      return this.listHoliday?.includes?.(dateString)
    },
  },
}
</script>

<style scoped>
.calendar {
  display: grid;
  align-content: stretch;
  justify-content: stretch;
  max-width: 600px;
  text-align: center;
}

.calendar h1 {
  text-align: center;
  display: flex;
  justify-content: space-around;
}

.calendar > * {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: stretch;
  justify-items: stretch;
  align-content: center;
  justify-content: center;
  text-align: center;
  background: white;
}

.calendar .header {
  font-weight: bolder;
}

.cell:not(.blank) {
  border: 1px solid #585858;
  border-radius: 1rem;
  margin: 0.5rem;
  height: 5rem;
  font-size: small;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.header > div:nth-child(7n-1),
.cell:nth-child(7n-1) {
  color: blue;
}

.cell.holiday,
.header > div:nth-child(7n),
.cell:nth-child(7n) {
  color: red;
}

.cell:not(.blank) span {
  font-size: x-large;
  margin: auto;
}
</style>
