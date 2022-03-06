<template>
  <ul>
    <li v-for="(record, i) in listRecord" :key="i">
      <nuxt-link :to="'/record/' + record.record_seq">{{
        record.title
      }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
import { recordsGetByDate } from '@/utils/axios'
import { getSession } from '~/utils/auth'
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      listRecord: [],
    }
  },
  async fetch() {
    this.listRecord = await recordsGetByDate(getSession(), this.date)
  },
  watch: {
    date() {
      this.$fetch()
    },
  },
}
</script>

<style scoped>
ul {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}
</style>
