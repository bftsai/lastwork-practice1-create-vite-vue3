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
            console.log('member');
            this.$emit('emit-member',false);
          }else{
            this.$emit('emit-member',true);
          }
    },
  },
  created(){
    this.isMemberPage();
  }
}
</script>
<style lang="scss">

</style>
