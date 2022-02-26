<template>
  <div class="calendar">
    <h1><span class="prev" @click="currentMonth--">{{"<"}}</span>{{monthString}}<span class="next" @click="currentMonth++">{{">"}}</span></h1>
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
      <div v-for="(_, i) in gapDayCount" :key="`blank_${i}`" class="cell blank"></div>
      <div v-for="(day, i) in endDateOfMonth" :key="i" class="cell">{{day}}</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date().getMonth(),
    }
  },
  computed: {
    monthString() {
      const temp = new Date();
      temp.setMonth(this.currentMonth)
      return temp.toLocaleString('default', { year: "numeric", month: "2-digit" });
    },
    gapDayCount() {
      const temp = new Date();
      temp.setMonth(this.currentMonth);
      temp.setDate(1);
      return (temp.getDay() || 7) - 1;
    },
    endDateOfMonth() {
      const temp = new Date();
      temp.setMonth(this.currentMonth + 1);
      temp.setDate(0);

      return temp.getDate();
    }
  },
};
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
  border: 1px solid black;
  border-radius: 1rem;
  margin: 0.5rem;
  height: 5rem;
  font-size: small;
}

.header>div:nth-child(7n-1), .cell:nth-child(7n-1) {
  color: blue;
}

.header>div:nth-child(7n), .cell:nth-child(7n) {
  color: red;
}


</style>
