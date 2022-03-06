<template>
  <div class="calendar">
    <h1>
      <span class="prev" @click="$emit('update:calendar', -1)">{{ '<' }}</span>
      {{ monthString }}
      <span class="next" @click="$emit('update:calendar', 1)">{{ '>' }}</span>
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
        :class="{ holiday: isHoliday(day), selected: isSelected(day) }"
        @click="selectDate(day)"
      >
        {{ day }}
        <span v-if="isWrittenDay(day)">📝</span>
      </div>
    </div>
    <calendar-list v-if="selectedDate" :date="selectedDate" />
  </div>
</template>

<script>
import CalendarList from './CalendarList.vue'
export default {
  components: { CalendarList },
  props: {
    listRecord: {
      type: Array,
      required: false,
      default: () => [],
    },
    listHoliday: {
      type: Array,
      required: false,
      default: () => [],
    },
    year: {
      type: Number,
      required: false,
      default: new Date().getFullYear(),
    },
    month: {
      type: Number,
      required: false,
      default: new Date().getMonth(),
    },
  },
  data() {
    return {
      selectedDate: null,
    }
  },
  computed: {
    monthString() {
      const temp = new Date()
      temp.setFullYear(this.year)
      temp.setMonth(this.month - 1)
      return temp.toLocaleString('default', {
        year: 'numeric',
        month: '2-digit',
      })
    },
    gapDayCount() {
      const temp = new Date()
      temp.setFullYear(this.year)
      temp.setMonth(this.month - 1)
      temp.setDate(1)
      return (temp.getDay() || 7) - 1
    },
    endDateOfMonth() {
      const temp = new Date()
      temp.setFullYear(this.year)
      temp.setMonth(this.month - 1)
      temp.setDate(0)

      return temp.getDate()
    },
  },
  watch: {},
  methods: {
    getDateString(day) {
      const temp = new Date()
      temp.setFullYear(this.year)
      temp.setMonth(this.month - 1)
      temp.setDate(day)

      const dateString = `${temp.getFullYear()}-${(temp.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${temp.getDate().toString().padStart(2, '0')}`

      return dateString
    },
    isWrittenDay(day) {
      return this.listRecord.includes(this.getDateString(day))
    },
    isHoliday(day) {
      return this.listHoliday?.includes?.(this.getDateString(day))
    },
    selectDate(day) {
      this.selectedDate = this.getDateString(day)
    },
    isSelected(day) {
      return this.selectedDate === this.getDateString(day)
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

.calendar > div {
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
  cursor: pointer;
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

.cell.selected {
  box-shadow: 0 0 5px #585858;
}
</style>
