<template>
    <div class="toast bg-dark" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
        <div class="toast-header">
            <span :class="`bg-${msg.style}`" class="p-2 d-inline-block"></span>
            <strong class="me-auto">{{ msg.title }}</strong>
            <strong class="me-auto">Bootstrap</strong>
            <button type="button" class="btn btn-close p-0" data-bs-dismiss="toast" aria-label="Close" @click="closeToast">X</button>
        </div>
        <div class="toast-body" v-if="msg.content">
                {{msg.content}}
        </div>
    </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast.js';

export default {
    name: 'Toast',
    data(){
        return {
            toast:{},
        }
    },
    props: ['msg',''],
    methods: {
        closeToast(){
            console.dir(this.$refs.toast);
            // this.$refs.toast.hide();
        }
    },
    mounted(){
        const toastEl = this.$refs.toast;
        const toast=new Toast(toastEl, {
            // animation: true,
            // autohide: false,
            delay: 1000,
        })
        toast.show();
        
    },
}
</script>
<style lang="scss">
.btn-close{
    width: 24px;
    height: 24px;
}
</style>