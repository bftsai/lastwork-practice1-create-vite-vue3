<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
          <router-link class="navbar-brand" to="/">首頁</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link fs-md-4 fs-6" to="/dashboard/products">Products</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link fs-md-4 fs-6" to="/dashboard/orders">Orders</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link fs-md-4 fs-6" to="/dashboard/coupon">Coupon</router-link>
              </li>
              <li class="nav-item">
              <a class="nav-link  fs-md-4 fs-6" @click="logout">Log Out</a>
              </li>
          </ul>
          </div>
      </div>
  </nav>
</template>
<script>
import Swal from 'sweetalert2/dist/sweetalert2.js';
const api_url=import.meta.env.VITE_HEX_API;

export default {
    data(){
        return {

        }
    },
    methods:{
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
                    this.$router.push({name: 'member'});
                }
            } catch (err) {
                Swal.fire({
                    title: err.response.message,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500,
                });
                document.cookie=`hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC`;
                this.$router.push({name: 'member'});
            }
        },
    },
    mounted(){
        
    }
}
</script>
<style>
@import '@sweetalert2/theme-dark/dark.scss';
</style>