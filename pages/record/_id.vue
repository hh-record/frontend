<template>
  <div id="wrapper">
    <!-- Main -->
    <div id="main">
      <div class="inner">
        <section>
          <h1>{{record.title}}</h1>
          <span class="image main"
            ><img :src="record.fileUrl" alt=""
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
    console.log(auth)
    const response = await recordsGetId(auth,params.id)
    // const product = response.data
    console.log(response)
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
