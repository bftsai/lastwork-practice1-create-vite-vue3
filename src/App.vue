<template>
  <header class="pt-3">
    <nav class="navbar navbar-expand-lg" v-show="!isDashboard">
      <div class="container align-items-start">
        <div class="col-8 col-lg-10">
          <button class="navbar-toggler btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link fs-md-4 fs-6" to="/" aria-current="page">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link fs-md-4 fs-6" to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link fs-md-4 fs-6" to="/dashboard">Dashboard</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link fs-md-4 fs-6" to="/member">Member</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-4 col-lg-2 d-flex justify-content-end">
          <RouterLink type="button" class="btn btn-outline-primary fs-md-4 fs-6 px-4" to="/member" v-if="isMember">{{ isLogin? '會員中心':'登入' }}</RouterLink>
          <div id="logBtn"></div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView @emit-member="isMemberPage" @emit-dashboard-page="isDashboardPage"></RouterView>
</template>
<script>
import Collapse from 'bootstrap/js/dist/collapse.js';
const api_url=import.meta.env.VITE_HEX_API;

export default {
  data(){
    return {
      collapse: {},
      token: '',
      isMember: true,
      isDashboard: false,
      isLogin: false,
    }
  },
  methods: {
    initBootstrapComponents(){
      const bsCollapse = new Collapse(this.$refs.collapse, {
        toggle: false
      });
      this.collapse=bsCollapse;
    },
    toggleCollapse(){
      this.collapse.toggle();
    },
    isMemberPage(value){
      this.isMember=value;
    },
    isDashboardPage(){
      return this.isDashboard=location.href.split('/#/')[1].includes('dashboard');
    },
    async checkLogin(){
      try {
        const token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1",);
        this.axios.defaults.headers.common['Authorization'] = token;
        const result = (await this.axios.post(`${api_url}v2/api/user/check`)).data;
        if(!result.success){
          this.isLogin=false;
        }else{
          this.isLogin=true;
        }
      } catch (err) {
        console.log(err.response);
        this.isLogin=false;
      }
    },
  },
  mounted(){
    this.isDashboardPage();
    this.initBootstrapComponents();
  }
}
</script>
<style lang="scss">
.collapse{
  transition: all 0.4s ease;
}
</style>
