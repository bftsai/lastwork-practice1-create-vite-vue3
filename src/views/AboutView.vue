<template>
  <Loading :prop-boolean="isLoading"></Loading>
  <div class="about">
    <div class="container">
      <h1>This is an about page</h1>
    </div>
  </div>
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
  emits:['emit-member','emit-dashboard-page'],
  components: {
    Loading,
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
      try {
        this.isLoading = true;
        const token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1",);
        this.axios.defaults.headers.common['Authorization'] = token;
        const result = (await this.axios.post(`${api_url}/v2/api/user/check`)).data;
        this.isLoading=false;
        if(!result.success){
          // this.$router.push({name:'member'});
        }
      } catch (err) {
        this.isLoading=false;
        console.log(err.response.data.message);
        // this.$router.push({name:'member'});
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
<style lang="scss">

</style>
