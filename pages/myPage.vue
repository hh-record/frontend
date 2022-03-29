<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 order-md-1">
          <h4 class="mb-3">내 정보</h4>

          <div class="mb-3">
            <label for="address">ID</label>
            <div>
              {{ data.id }}
            </div>
          </div>
          <div class="mb-3">
            <label for="username">Username</label>
            <div class="input-group">
              {{ data.userName }}
            </div>
          </div>

          <div class="mb-3">
            <label for="email">Email</label>
            <div>{{ data.email }}</div>
          </div>

          <div class="mb-3">
            <label for="address2">phoneNumber </label>
            <div>
              {{ data.phoneNumber }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { myPageCheck } from '../utils/axios'
import { getSession } from '../utils/auth'
export default {
  middleware: 'authentication',
  data() {
    return {
      token: '',
      data: {},
    }
  },
  created() {
    this.token = getSession()
    this.myInfo(this.token)
  },
  methods: {
    myInfo(auth) {
      myPageCheck(auth).then((res) => {
        this.data = res.data.data
      })
    },
  },
}
</script>

<style scoped src="../assets/bootstrap.min.css">
.inner {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
