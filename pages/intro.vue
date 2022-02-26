<template>
  <div id="wrapper">
    <div id="bg"></div>
    <div id="overlay"></div>
    <div id="main">
      <!-- Header -->
      <header id="header">
        <h1 class="hanFont">자신만의 이야기를 담고 싶으신가요?</h1>
        <p class="hanFont">나만의 일기 만들러 가기</p>
        <nav>
          <ul>
            <li>
              <a class="icon brands fa-dribbble" @click="toggleLogin"></a>
            </li>
            <li>
              <a
                id="sginUpBtn"
                class="icon solid fa-envelope"
                @click="toggleSignUp"
              ></a>
            </li>
            <br />
            <span
              style="margin-left: 0.5em; margin-right: 1.5em"
              @click="toggleLogin"
              >Sign In</span
            >
            <span style="margin-left: 1em" @click="toggleSignUp">Sign Up</span>
          </ul>
        </nav>
      </header>
      <!-- Sgin In Modal -->
      <div v-if="loginShow" id="sginInModal" class="modal">
        <div class="modal-body">
          <div class="mt-1">
            <span class="hanFont text-black mr-5">로그인</span>
            <span class="text-black close" @click="toggleLogin">X</span>
          </div>
          <form>
            <div class="textForm">
              <input
                v-model="loginId"
                name="loginId"
                type="text"
                class="id"
                placeholder="아이디"
              />
            </div>
            <div class="textForm">
              <input
                v-model="loginPassword"
                name="loginPw"
                type="password"
                class="pw"
                placeholder="비밀번호"
              />
            </div>
            <div class="forgetBox">
              <ul class="text-black font-size-small">
                <li><a href="#">아이디를 잊어버리셨나요?</a></li>
                <li><a href="#">비밀번호를 잊어버리셨나요?</a></li>
              </ul>
            </div>
            <input class="btn" value="L O G I N" @click="loginSubmit" />
          </form>
        </div>
      </div>
      <!-- Sign Up Modal -->
      <div v-if="signUpShow" class="modal">
        <div class="modal-body">
          <div class="mt-1">
            <span class="hanFont text-black mr-5">회원가입</span>
            <span class="text-black close" @click="toggleSignUp">X</span>
          </div>
          <form onsubmit="return false;">
            <div class="textForm">
              <input
                v-model="signUpId"
                name="loginId"
                type="text"
                class="id"
                placeholder="아이디"
              />
            </div>
            <div class="textForm">
              <input
                v-model="signUpPassword"
                name="loginPw"
                type="password"
                class="pw"
                placeholder="비밀번호"
              />
            </div>
            <div class="textForm">
              <input
                v-model="signUpPasswordCheck"
                name="loginPwConfirm"
                type="password"
                class="pw"
                placeholder="비밀번호 확인"
              />
            </div>
            <div class="textForm">
              <input
                v-model="signUpName"
                name="name"
                type="text"
                class="name"
                placeholder="이름"
              />
            </div>
            <div class="textForm">
              <input
                v-model="signUpEmail"
                name="email"
                type="text"
                class="email"
                placeholder="이메일"
              />
            </div>
            <div class="textForm">
              <input
                v-model="signUpPhoneNumber"
                name="cellphoneNo"
                type="number"
                class="cellphoneNo"
                placeholder="전화번호"
              />
            </div>
            <input
              type="submit"
              class="btn"
              value="J O I N"
              @click="signUpSubmit"
            />
          </form>
        </div>
      </div>
      <!-- Footer -->
      <footer id="footer">
        <span class="copyright"
          >copyright 2022 &copy; Design for html5up Make for
          <a href="#">HH</a>.</span
        >
      </footer>
    </div>
  </div>
</template>

<script>
import { login, signUp } from '@/utils/axios'

export default {
  name: 'IndexPage',
  components: {},
  layout: 'single',
  data: () => ({
    active: false,
    value: null,
    loginShow: false,
    signUpShow: false,
    loginId: '',
    loginPassword: '',
    signUpId: '',
    signUpPassword: '',
    signUpPasswordCheck: '',
    signUpName: '',
    signUpPhoneNumber: '',
    signUpEmail: '',
  }),
  methods: {
    loginSubmit() {
      const request = {
        id: this.loginId,
        password: this.loginPassword,
      }
      login(request)
        .then((response) => {
          const data = response.data
          console.log(response)
          if (data.code === 200) {
            console.log(data)
            sessionStorage.setItem('SESSION', data.data.AUTH_TOKEN)
            this.$router.replace('/')
            // } else {
            // alert("아이디와 비밀번호를 확인하신 후 다시 시도해 주세요.");
            // }
          } else {
            alert(data.status)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signUpSubmit() {
      if (this.signUpPassword !== this.signUpPasswordCheck) {
        alert('비밀번호가 일치하지 않습니다.')
        return false
      }
      const request = {
        id: this.signUpId,
        userName: this.signUpName,
        email: this.signUpEmail,
        phoneNumber: this.signUpPhoneNumber,
        password: this.signUpPassword,
      }
      signUp(request)
        .then((response) => {
          console.log(response)
          if (response.data.code === 200) {
            alert(response.data.data)
            this.toggleSignUp()
          } else {
            alert('회원가입에 실패하였습니다.')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    toggleLogin() {
      this.loginShow = !this.loginShow
    },
    toggleSignUp() {
      this.signUpShow = !this.signUpShow
    },
    onConfirm() {
      this.value = 'Agreed'
    },
    onCancel() {
      this.value = 'Disagreed'
    },
  },
}
</script>
<style scoped src="~/assets/intro-assets/css/intro.css"></style>
