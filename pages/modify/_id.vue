<template>
  <div id="wrapper">
    <!-- Main -->
    <div id="main">
      <div class="inner">
        <input
          v-model="record.title"
          type="text"
          class="임시제목"
          placeholder="제목을 입력해주세요."
        />

        <tiptap-editor v-model="record.content" />
        <div style="margin-top: 3em">
          <p style="margin: 0">이미지 썸네일 업로드</p>
          <form>
            <input
              id="photo"
              type="file"
              name="photo"
              accept="image/*"
              @change="imgMainUpload"
            />
          </form>
        </div>
        <input type="button" value="수정" @click="regist" />
        <input type="button" value="삭제" />
      </div>
    </div>
  </div>
</template>

<script>
import TiptapEditor from '~/components/TiptapEditor.vue'
import { recordsModify } from '@/utils/axios'
import { getSession } from '~/utils/auth'
import { recordsGetId } from '~/utils/axios'

export default {
  components: {
    TiptapEditor,
  },
  middleware: 'authentication',
  async asyncData({ params }) {
    const auth = getSession()
    const response = await recordsGetId(auth, params.id)
    // const product = response.data
    const record = response.data.data
    return { record }
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  computed: {
    fileUrl() {
      return this.record.fileUrl[0]
    },
    themeUse() {
      return this.record.themeUse
    },
  },
  metaInfo: {},
  methods: {
    async imgMainUpload(fileList) {
      const frm = new FormData()
      await frm.append('file', fileList.target.files[0])
      this.$axios({
        method: 'post',
        url: 'http://ec2-3-36-30-114.ap-northeast-2.compute.amazonaws.com:9999/hh-record/record-file',
        data: frm,
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Disposition': 'form-data'
        },
      }).then((response) => {
        this.fileUrl = response.data.data
      })
    },
    regist() {
      recordsModify(
        this.record.record_seq,
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlcyI6W119.mVQhY-fm8FQGBrCSPdNnx3FMSB622v0t7hlB3KKSACA',
        this.record.record_seq,
        this.title,
        this.content,
        this.fileUrl,
        this.fileUrl,
        this.themeUse
      ).then((res) => {
        this.$router.push('/')
      })
    },
  },
}
</script>

<style scoped src="@/assets/main-assets/css/main.css"></style>
<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  border: 1px solid #222;
  margin-top: 10px;
  padding: 0 10px;
  border-radius: 10px;
  min-height: 300px;
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
    background-color: #e9ecef;
    color: #495057;
  }
}
</style>
