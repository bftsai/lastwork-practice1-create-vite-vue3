<template>
    <div class="container">
        <h1>dashBoard</h1>
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
  },
  created(){
    this.isMemberPage();
  }
}
</script>
