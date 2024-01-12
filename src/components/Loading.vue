<template>
    <div class="vld-parent">
        <Loading :active="isLoading" :loader="'bars'" :enforce-focus="true" :lock-scroll="true" :can-cancel="false" :background-color="'#000012'" :opacity="0.3" :color="'#ffeba7'" :blur="'4px'" :is-full-page="true"></Loading>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isLoading: false,
        }
    },
    props:['propBoolean'],
    watch: {
        propBoolean(){
            this.toggleLoading();
        }
    },
    methods: {
        toggleLoading(){
            this.isLoading=this.propBoolean;
        }
    },

}
</script>