<script>
import TheWelcome from '../components/TheWelcome.vue';
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
  components: {
    TheWelcome
  },
  created(){
    this.isMemberPage();
  }
}
</script>

<template>
  <main>
    <div class="container">
      <TheWelcome />
    </div>
  </main>
</template>

