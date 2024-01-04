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
  created(){
    console.log(import.meta.env.VITE_HEX_APIKEY);
    console.log(import.meta.env.VITE_HEX_API);
  }
}
</script>
<style lang="scss">

</style>
