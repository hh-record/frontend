<template>
  <div></div>
</template>

<script>
export default {
  created() {
    sessionStorage.removeItem('SESSION')
    this.$router.replace('/')
  },
}
</script>
