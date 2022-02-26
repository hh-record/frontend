<template>
  <div id="wrapper">
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
        <input v-model="title" type="text" class="임시제목" placeholder="제목을 입력해주세요.">

        <tiptap-editor v-model="content"/>
        <div style="margin-top: 3em;">
            <p style="margin: 0;">이미지 썸네일 업로드</p>
            <form >
                <input id="photo" type="file" name="photo" accept="image/*" @change="imgMainUpload">
            </form>
        </div>
        <input type="button" value="저장" @click="regist">
        <input type="button" value="삭제">
      </div>
    </div>
  </div>
</template>

<script>
import TiptapEditor from '~/components/TiptapEditor.vue'
import {recordsRegist} from '@/utils/axios'

export default {
  components: {
    TiptapEditor
  },
  middleware: "authentication",
  data() {
    return {
        title:'',
        content:'',
        fileUrl:'',
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

  },
  methods:{
    async imgMainUpload(fileList) {
      const frm = new FormData()
      await frm.append('file', fileList.target.files[0]);
      this.$axios({
        method: "post",
        url: "http://ec2-3-36-30-114.ap-northeast-2.compute.amazonaws.com:9999/hh-record/record-file",
        data: frm,
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Disposition': 'form-data'
          },
        }).then((response) => {
          this.fileUrl = response.data.data
      });
    },
    regist(){
      recordsRegist('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlcyI6W119.mVQhY-fm8FQGBrCSPdNnx3FMSB622v0t7hlB3KKSACA',this.title,this.content,this.fileUrl,this.fileUrl).then(
        res=>{
          console.log(res)
          }
      )
      }
    }
}
</script>

<style scoped src='@/assets/main-assets/css/main.css'>
</style>
<style lang="scss">
/* Basic editor styles */
.ProseMirror{
    border:1px solid #222;
    margin-top:10px;
    padding:0 10px;
    border-radius:10px;
    min-height:300px;
}
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}

.content {
  padding: 1rem 0 0;

  h3 {
    margin: 1rem 0 0.5rem;
  }

  pre {
    border-radius: 5px;
    color: #333;
  }

  code {
    display: block;
    white-space: pre-wrap;
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
    background-color:#e9ecef;
    color: #495057;
  }
}
</style>
