// src/views/LoginPage.vue
<script>
import AuthService from '../services/AuthService.js';

export default {
  name: "LoginPage",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      let credentials = {username: this.username, password: this.password};
      AuthService
          .login(credentials)
          .then( response =>
              this.$store.dispatch('login', {token: response.data.token, user: response.data.username}))
          .then( () => {
              this.username = this.password = '';
              return this.$router.push('/')})
          .catch (error =>
              console.log('LoginPage.vue error:'+error, error))
    }
  }
};
</script>

<template>
  <div id="login-page" @keyup.enter="login">
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <input type="submit" @click="login" value="Send"/>
  </div>
</template>

<style scoped>
#login-page {
  width: 300px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  color: #4d4d4d;
  font-size: 24px;
  padding: 20px 0 20px 0;
}
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 15px;
  border: 1px solid #dddddd;
  margin-bottom: 15px;
  box-sizing:border-box;
}

input[type="submit"] {
  width: 100%;
  padding: 15px;
  background-color: #535b63;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
}
</style>
