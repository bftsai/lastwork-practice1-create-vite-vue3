<template>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast bg-dark" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
            <img src="../assets/images/imageUpload-loading-50px.svg" class="rounded me-2" alt="...">
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn btn-close p-0" data-bs-dismiss="toast" aria-label="Close">X</button>
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
            toasts:[],
        }
    },
    methods: {
        init(){
            const toastElList = document.querySelectorAll('.toast');
            this.toasts=[...toastElList].map(toastEl => new Toast(toastEl, {
                animation: true,
                autohide: true,
                delay: 10000,
            }))
        },
        showToast(){

        },
        hideToast(){

        },
    },
    mounted(){
        this.init();
        console.log(this.toasts);
        this.toasts.forEach(item=>{
            item.show()
        })
    },
}
</script>
<style lang="scss">
.btn-close{
    width: 24px;
    height: 24px;
}
</style>