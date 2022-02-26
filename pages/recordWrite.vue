<template>
    			<div id="wrapper">

				<!-- Header -->
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
                            <input type="text" class="임시제목" placeholder="제목을 입력해주세요.">
                            <div style="margin-top: 3em;">
                                <p style="margin: 0;">이미지 썸네일 업로드</p>
                                <input type="file">
                            </div>
							<editor ref="editor" :config="config" :initialized="onInitialized"/>
                            <input type="button" value="저장">
                            <input type="button" value="삭제">
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
            Header,
            Footer,
        },
    
    data() {
    return {
        config: {
            image: {
            // Like in https://github.com/editor-js/image#config-params
            endpoints: {
                byFile: 'http://localhost:8090/image',
                byUrl: 'http://localhost:8090/image-by-url',
            },
            field: 'image',
            types: 'image/*',
            },
        }
    }
    },
    metaInfo: {

    }
}
</script>

<style scoped>
    @import '../assets/main-assets/css/main.css';
</style>