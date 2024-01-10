<template>
  <div class="about">
    <div class="container">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

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
  },
  created(){
    this.isMemberPage();
    this.isDashboardPage();
  }
}
</script>
<style lang="scss">

</style>
