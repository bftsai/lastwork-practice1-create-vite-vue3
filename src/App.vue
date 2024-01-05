<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="pt-3">
    <div class="container">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-10">
          <nav>
            <RouterLink class="fs-md-4 fs-6" to="/">Home</RouterLink>
            <RouterLink class="fs-md-4 fs-6" to="/about">About</RouterLink>
            <RouterLink class="fs-md-4 fs-6" to="/member">Member</RouterLink>
          </nav>
        </div>
        <div class="col-2">
          <RouterLink type="button" class="btn btn-outline-primary fs-md-4 fs-6" to="/member" v-if="isMember">{{ isLogin? '會員中心':'登入' }}</RouterLink>
          <div id="logBtn"></div>
        </div>
      </div>
    </div>
  </header>

  <RouterView @emit-member="isMemberPage" :isLogin="isLogin"/>
</template>
<script>
export default {
  data(){
    return {
      token: '',
      isMember: true,
      isLogin: false,
    }
  },
  methods: {
    isMemberPage(value){
      this.isMember=value;
      this.checkLogin();
    },
    findCookie(str){
      const reg=new RegExp(`${str}`);
      if(reg.test(document.cookie)){
        this.token=document.cookie.split(`${str}=`)[1];
        this.isLogin=true;
        return true;
      }else{
        this.isLogin=false;
      }
    },
    checkLogin(){
      return this.findCookie('hexToken');
    },
    logOut(e){
      if(e.target.textContent==='登出'){
        console.log('logout');
      }else{
        return;
      }
    },
  },
  created(){
    this.checkLogin();
  }
}
</script>
<style lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
