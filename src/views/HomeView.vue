<template>
  <main>
    <div class="container">
      <h1 class="fs-4 fs-lg-1">Vue3 practice</h1>
    </div>
  </main>
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
  },
}
</script>
