<template>
  <Loading :prop-boolean="isLoading"></Loading>
  <Navbar></Navbar>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>
<script>
const api_url=import.meta.env.VITE_HEX_API;
const api_path=import.meta.env.VITE_HEX_APIKEY;

import Swal from 'sweetalert2/dist/sweetalert2.js';
import emitter from '@/methods/emitter.js';

import Navbar from '../components/Navbar.vue';
import Loading from '../components/Loading.vue';

export default {
  data(){
    return {
      isLoading: false,
    }
  },
  emits: ['emit-member','emit-dashboard-page'],
  components: {
    Navbar,
    Loading,
  },
  provide(){
    return {
      emitter,
      Swal,
      Loading,
    }
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
    async logout(){
        try {
            this.isLoading=true;
            const result = (await this.axios.post(`${api_url}v2/logout`)).data;
            console.log(result);
            this.isLoading=false;
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
            this.isLoading=false;
            document.cookie=`hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC`;
            this.$router.push('member');
        }
    },
  },
  created(){
    this.isMemberPage();
    this.isDashboardPage();
  }
}
</script>
