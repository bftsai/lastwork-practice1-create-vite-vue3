<template>
    <div class="toast-container position-absolute pe-3 top-0 end-0">
        <Toast v-for="(msg,key) in message" :key="key" :msg="msg">

        </Toast>
        <toast></toast>
    </div>
</template>
<script>
import Toast from '@/components/Toast.vue';
export default {
    data(){
        return {
            message: [],
            message1:''
        }
    },
    components: {
        Toast,
    },
    inject: ['emitter'],
    mounted(){
        this.emitter.on('push-message',(message) => {
            const { style='success',title, content }= message;
            this.message.push({style,title,content});
        });
        this.emitter.on('add-message',(message) => {
            const {style='success',title,content}=message;
            this.message1=message;
        })
    },
}
</script>