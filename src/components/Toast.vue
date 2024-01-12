<template>
    <div class="toast-container position-fixed bottom-0 end-0 p-3 bg-dark">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
            <img src="../assets/images/imageUpload-loading-50px.svg" class="rounded me-2" alt="...">
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn btn-close" data-bs-dismiss="toast" aria-label="Close">X</button>
            </div>
            <div class="toast-body">
            Hello, world! This is a toast message.
            </div>
        </div>
    </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast.js'
export default {
    data(){
        return {

        }
    },
    methods: {
        init(){
            const toastElList = document.querySelectorAll('.toast');
            [...toastElList].map(toastEl => new Toast(toastEl, {
                animation: true,
                autohide: true,
                delay: 400,
            }))
        },
        showToast(){

        },
        hideToast(){

        },
    },
    mounted(){
        this.init();
    },
}
</script>
<style lang="scss">
.btn-close{
    width: 24px;
    height: 24px;
}
</style>