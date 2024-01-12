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
        <div class="col-4 col-lg-2">
          <RouterLink type="button" class="btn btn-outline-primary fs-md-4 fs-6 px-4" to="/member" v-if="isMember">{{ checkLogin? '會員中心':'登入' }}</RouterLink>
          <div id="logBtn"></div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView @emit-member="isMemberPage" @emit-dashboard-page="isDashboardPage"></RouterView>
</template>
<script>
// import bootstrap from 'bootstrap';
const api_url=import.meta.env.VITE_HEX_API;

import Swal from 'sweetalert2/dist/sweetalert2.js';

export default {
  data(){
    return {
      token: '',
      isMember: true,
      isDashboard: false,
      isLoading: false,
    }
  },
  methods: {
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
          Swal.fire({
              title: result.message,
              icon: 'error',
              showConfirmButton: false,
              timer: 1500,
          });
        }
        return true;
      } catch (err) {
        console.log(err.response);
        Swal.fire({
            title: err.response,
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
        });
      }
    },
    toggleCollapse(){
      if(this.$refs.collapse.className.includes('show')){
        this.$refs.collapse.classList.remove('show');
      }else{
        this.$refs.collapse.classList.add('show');
      }
    },
  },
  created(){
    this.isDashboardPage();
  },
  mounted(){
    
  }
}
</script>
<style lang="scss">
.collapse{
  transition: all 0.4s ease;
}
</style>
