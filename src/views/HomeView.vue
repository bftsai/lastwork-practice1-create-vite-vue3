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

import Swal from 'sweetalert2/dist/sweetalert2.js';
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
        this.isLoading=true;
        const token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1",);
        this.axios.defaults.headers.common['Authorization'] = token;
        const result = (await this.axios.post(`${api_url}v2/api/user/check`)).data;
        this.isLoading=false;
        if(!result.success){
          Swal.fire({
              title: result.message,
              icon: 'error',
              showConfirmButton: false,
              timer: 1500,
          });
          this.$router.push({name:'member'});
        }
        return true;
      } catch (err) {
        console.log(err.response);
        this.isLoading=false;
        Swal.fire({
            title: err.response,
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
        });
        this.$router.push({name:'member'});
      }
    },
  },
  mounted(){
    this.isMemberPage();
    this.isDashboardPage();
    this.checkLogin();
  }
}
</script>
