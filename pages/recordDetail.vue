<template>
    			<div id="wrapper">

				<Header />

				<!-- Menu -->
					<nav id="menu">
						<h2>Menu</h2>
						<ul>
							<li><a href="main.html">Home</a></li>
							<li><a href="record_detail.html">달력 보기</a></li>
							<li><a href="record_detail.html">템플릿 보기</a></li>
							<li><a href="record_detail.html">내 정보</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
					</nav>

				<!-- Main -->
					<div id="main">
						<div class="inner">
							<section>
								<h1>오늘은 사케동을 먹었다.</h1>
								<span class="image main"><img src="../assets/main-images/pic13.jpg" alt="" /></span>
								<p>난 오늘 사케동을 먹었다. 사케동은 너무 맛있다. 난 연어 사케동을 제일 좋아한다. 이번 생은 다이어트 글렀나보다. 이 몸매를 유지하기 위해 더 많은 사케동을 먹어야겠다. 나는 사케동말고도 아구찜도 좋아한다. 순살 아구찜이 좋다. 근데 우리 집 주변에서 아구찜 맛있는 곳을 모르겠다. 다음에 투어 다녀야겠다. 배고프다. 오늘 점심 뭐먹지... 오늘 점심 뭐먹을까요?? 사케동이 먹고 싶긴 한데 아직도 회사 근처에 뭐가 있는지 잘 몰라서... 길치라서... 친구랑 같이 먹을까... 프로젝트 무사히 끝날 수 있기를... 기도할게요... 아 근데 진짜 배고프다 오늘 점심에 맛있는거 먹고 싶다 엄청 맛있는거는 뭐가 있을까 오늘 저녁은 안먹어야지... 다이어트해야돼...</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel venenatis mauris vehicula hendrerit.</p>
								<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
							</section>
							<a href="record_regist.html" class="button">수정하기</a>
							<a href="#" class="button">삭제하기</a>
						</div>
					</div>

				<!-- Footer -->
				<Footer />

			</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
	components:{
		Header,Footer
	},
}
</script>

<style scoped>
    @import '../assets/main-assets/css/main.css';
</style>