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
        <a href="record_regist.html" class="button">수정하기</a>
        <a href="#" class="button">삭제하기</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getSession } from '~/utils/auth'
import {recordsGetId} from "~/utils/axios"
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
    
  }
}
</script>

<style scoped src="~/assets/main-assets/css/main.css"></style>
