<template>
		<div id="wrapper">
  				<!-- Header -->
					<header id="header">
						<div class="inner">

							<!-- Logo -->
							<router-link to="/" class="logo">
								<span class="symbol"><img src="../assets/main-images/logo.svg" alt="" /></span><span class="title">HH</span>
							</router-link>

							<!-- Nav -->
							<nav>
								<ul>
									<li><a class="disableLink" href="#" @click="menuToggle">Menu</a></li>
								</ul>
							</nav>
							
						</div>
					</header>
						<!-- Menu -->
						<body :class="{'is-menu-visible':isActive}">

						<nav id="menu">
							<div class="inner">
								<h2>Menu</h2>
								<ul>
									<li><router-link to='/Main' >Home</router-link></li>
									<li><router-link to="/Calendar" >달력 보기</router-link></li>
									<li><router-link to="/Detail" >템플릿 보기</router-link></li>
									<li><router-link to="/mypage" >내 정보</router-link></li>
									<li><router-link to="/Calendar" >Elements</router-link></li>
									<li><router-link to="/Intro" >인트로</router-link></li>
								</ul>
							</div>
							<a class="close disableLink" href="#" @click="menuToggle">Close</a>
						</nav>
						
						</body>
			</div>

</template>

<script>
export default {
	data(){
		return{
			isActive:false,
		}
	},

	methods:{
		menuToggle(){
			this.isActive = !this.isActive;
		}
	}
}
</script>

<style scoped src="@/assets/main-assets/css/main.css">
	.inner{
        margin : 0 !important;
        padding : 0 !important;
    }
</style>