<template>
  <div id="wrapper">
    <!-- Main -->
    <div id="main">
      <div class="inner">
        <section class="mt-5">
          <h3>내 기록들</h3>
          <div class="sort-end">
            <input
              id="search"
              type="text"
              name="search"
              placeholder="search"
              class="mb-1"
            />
            <a
              href="record_celendar.html"
              class="icon regular fa-eye sort-end mt-1"
            >
              검색</a
            >
          </div>
          <div class="mt-5">
            <ul class="alt list">
              <li v-for="(item,index) in data" :key="index">
                <router-link :to="'/record/'+item.record_seq">
                  {{item.modDate}} {{item.title}}
                </router-link>
              </li>
            </ul>
          </div>
        </section>
        <!-- <div class="pagination">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#" class="active">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">7</a>
          <a href="#">8</a>
          <a href="#">9</a>
          <a href="#">10</a>
          <a href="#">&gt;</a>
          <a href="#">&raquo;</a>
        </div> -->
      </div>
    </div>
    <!-- Main -->
    <div id="main">
      <div class="inner">
        <header>
          <h1>One Day Record에 오신 것을 환영합니다.</h1>
          <p>
            오늘 하루도 행복하게 보내셨나요? 오늘 느꼈던 감정들을 기억하며
            기록해보세요!
          </p>
        </header>
        <div class="sort-end">
          <router-link to="/record/write" class="icon regular fa-edit">
            오늘 일기 쓰러가기</router-link
          >
        </div>
        <section class="tiles">
          <article v-for="(item,index) in data" :key="index" :class="'style'+parseInt(index+1)">
            <span class="image">
              <img v-if="item.thumbnailUrl" :src="item.thumbnailUrl" alt="" />
              <img v-if="!item.thumbnailUrl" src="../assets/main-images/pic05.jpg" alt="" />
            </span>
            <router-link :to="'/record/'+item.record_seq">
              <h2>{{item.modDate}}</h2>
              <div class="content">
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </article>
          
        </section>
      </div>
      <!-- <div class="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#" class="active">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">7</a>
        <a href="#">8</a>
        <a href="#">9</a>
        <a href="#">10</a>
        <a href="#">&gt;</a>
        <a href="#">&raquo;</a>
      </div> -->
    </div>

    <!-- Footer -->
  </div>
</template>

<script>
import { getSession } from '../utils/auth'
import { recordsGet } from '@/utils/axios'
export default {
  middleware: 'authentication',

  data() {
    return {
      data: '',
      token:"",
    }
  },
  created() {
    this.token= getSession()
    this.get(this.token)
  },
  metaInfo: {
    // title 입력하기
    title: 'One Day Record',
  },
  methods: {
    get(token) {
      recordsGet(token).then((res) => {
        this.data = res.data.data
      })
      .catch(err =>{console.log(err)})
    },
  },
}
</script>

<style scoped src="~/assets/main-assets/css/main.css"></style>
