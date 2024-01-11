<template>
  <div class="loadingBlock position-absolute z-1" v-if="loading">
    <img src="../assets/images/loading2.svg" alt="" class="position-absolute start-50 top-50 translate-middle">
  </div>
  <Navbar></Navbar>
  <div class="container-fluid">
    <router-view @emit-toggle-loading="toggleLoading"></router-view>
  </div>
</template>
<script>
const api_url=import.meta.env.VITE_HEX_API;
const api_path=import.meta.env.VITE_HEX_APIKEY;

import Swal from 'sweetalert2/dist/sweetalert2.js'

import Navbar from '../components/Navbar.vue';
export default {
  data(){
    return {
      loading: false,
    }
  },
  emits: ['emit-member','emit-toggleLoading','emitToggleLoading','emit-dashboard-page'],
  props: ['isLogin'],
  components: {
    Navbar,
  },
  methods: {
    toggleLoading(){
      this.loading=!this.loading;
    },
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
    async logout(){
        try {
            const result = (await this.axios.post(`${api_url}v2/logout`)).data;
            console.log(result);
            if(result.success){
                document.cookie=`hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC`;
                Swal.fire({
                    title: result.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                })
                this.$router.push('member');
            }
        } catch (err) {
            console.log(err.response);
            document.cookie=`hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC`;
            this.$router.push('member');
        }
    },
    async getProducts(page){
      try {
        const result = (await this.axios.get(`${api_url}v2/api/${api_path}/admin/products?page=${page}`)).data;
        // console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  },
  created(){
    this.isMemberPage();
    this.isDashboardPage()
  }
}
</script>
<style lang="scss">
.loadingBlock{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000000a4;
}
</style>