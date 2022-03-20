<template>
  <div id="wrapper">
    <!-- Main -->
    <div id="main">
      <div class="inner">
        <section>
          <h1>{{record.title}}</h1>
          <span class="image main"
            ><img v-for="(item,index) in record.fileUrl" :key="index" :src="record.fileUrl[index]" alt=""
          /></span>
          <p v-html="record.content"></p>

        </section>
        <router-link :to="'/modify/'+record.record_seq" class="button">수정하기</router-link>
        <a class="button" @click="this.delete">삭제하기</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getSession } from '~/utils/auth'
import {recordsGetId,recordsDelete} from "~/utils/axios"
export default {
  middleware: 'authentication',
  async asyncData({params}) {
    const auth= getSession()
    const response = await recordsGetId(auth,params.id)
    // const product = response.data
    const record = response.data.data;
    return { record }
  },
  data() {
    return {
      data: '',
      token:"",
    }
  },
  created() {
    this.token= getSession()
  },
  methods: {
    delete(){
      recordsDelete(
        this.record.record_seq,
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlcyI6W119.mVQhY-fm8FQGBrCSPdNnx3FMSB622v0t7hlB3KKSACA',
        this.record.record_seq,
      ).then(
        this.$router.push('/')
      )
    }
  }
}
</script>

<style scoped src="~/assets/main-assets/css/main.css"></style>
