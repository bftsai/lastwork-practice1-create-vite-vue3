<template>
  <Loading :prop-boolean="isLoading"></Loading>
  <main>
    <div class="container">
      <h1 class="fs-4 fs-lg-1">Vue3 practice</h1>
    </div>
  </main>
</template>

<script>
const api_url=import.meta.env.VITE_HEX_API;

import Loading from '../components/Loading.vue';

export default {
  data(){
    return {
      isLoading: false,
    }
  },
  components: {
    Loading,
  },
  emits: ['emit-member','emit-dashboard-page'],
  methods: {
    isMemberPage(){
      if(location.href.split('#/')[1]==='member'){
            this.$emit('emit-member',false);
          }else{
            this.$emit('emit-member',true);
          }
    },
    isDashboardPage(){
      this.$emit('emit-dashboard-page');
    },
    async checkLogin(){
      try {
        const token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1",);
        this.axios.defaults.headers.common['Authorization'] = token;
        this.isLoading = true;
        const result = (await this.axios.post(`${api_url}/v2/api/user/check`)).data;
        this.isLoading=false;
        if(!result.success){
          console.log(result);
        }
      } catch (err) {
        this.isLoading=false;
        console.log(err.response.data.message);
      }
    },
  },
  mounted(){
    this.checkLogin();
    this.isMemberPage();
    this.isDashboardPage();
  }
}
</script>
