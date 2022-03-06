<template>
  <ul>
    <li v-for="(record, i) in listRecord" :key="i">{{ record.title }}</li>
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
}
</script>
