<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <router-view></router-view>
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

    }
  },
  emits: ['emit-member','emit-toggleLoading','emitToggleLoading','emit-dashboard-page'],
  props: ['isLogin'],
  components: {
    Navbar,
  },
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
      try{
        this.$emit('emit-toggleLoading');
        const token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1",);
        this.axios.defaults.headers.common['Authorization'] = token;
        const result=(await this.axios.post(`${import.meta.env.VITE_HEX_API}/v2/api/user/check`)).data;
        // console.log(result);
        this.$emit('emit-toggleLoading');
        if(!result.success){
          Swal.fire({
            icon: "error",
            title: `${result.message}`,
            showConfirmButton: false,
            timer: 800
          });
          this.logout();
          this.$router.push('member')
        }
      }catch(err){
        console.log(err);
        this.$router.push('member');
        this.$emit('emit-toggleLoading');
      }
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
    this.checkLogin();
  }
}
</script>
