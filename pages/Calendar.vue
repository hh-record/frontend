<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Menu -->
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li><a href="main.html">Home</a></li>
        <li><a href="record_celendar.html">달력 보기</a></li>
        <li><a href="record_detail.html">템플릿 보기</a></li>
        <li><a href="record_detail.html">내 정보</a></li>
        <li><a href="elements.html">Elements</a></li>
      </ul>
    </nav>

    <div class="content">
      <dal />
    </div>
  </div>
</template>

<script>

import dal from '../components/Calendar.vue'
// Register components in your 'main.js'

export default {
    components: {

        dal
    }
}
</script>

<style>
	@import '../assets/main-assets/css/main.css';

.content {
  justify-content: center;
}
</style>
