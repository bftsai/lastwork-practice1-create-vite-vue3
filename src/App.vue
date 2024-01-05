<template>
  <header class="pt-3">
    <nav class="navbar navbar-expand-lg">
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
                <RouterLink class="nav-link fs-md-4 fs-6" to="/member">Member</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-4 col-lg-2">
          <RouterLink type="button" class="btn btn-outline-primary fs-md-4 fs-6 px-4" to="/member" v-if="isMember">{{ isLogin? '會員中心':'登入' }}</RouterLink>
          <div id="logBtn"></div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView @emit-member="isMemberPage" :isLogin="isLogin"/>
</template>
<script>
// import bootstrap from 'bootstrap';

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
    toggleCollapse(){
      if(this.$refs.collapse.className.includes('show')){
        this.$refs.collapse.classList.remove('show');
      }else{
        this.$refs.collapse.classList.add('show');
      }
    },
  },
  created(){
    this.checkLogin();
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
