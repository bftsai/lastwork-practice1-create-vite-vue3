<template>
    <Loading :prop-boolean="isLoading"></Loading>
    <h1 class="text-center text-primary">Orders List</h1>
</template>
<script>
const api_url=import.meta.env.VITE_HEX_API;
const api_path=import.meta.env.VITE_HEX_APIKEY;

// plugin
import Loading from '../components/Loading.vue';

export default {
    data(){
        return {
            pagination: {},
            orders: [],
            isLoading: false,
        }
    },
    inject: ['Swal'],
    components: {
        Loading,
    },
    methods: {
        async getOrders(page=1){
            try {
                this.isLoading=true;
                const result=(await this.axios.get(`${api_url}/v2/api/${api_path}/admin/orders?page=${page}`)).data;
                console.log(result);
                this.isLoading=false;
                if(result.success){
                    this.Swal.fire({
                        title: '已取得訂單列表!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.orders=result.orders;
                    this.pagination=result.pagination;
                }else{
                    this.Swal.fire({
                        title: 'Error!',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } catch (err) {
                this.isLoading=false;
                console.log(err);
                this.Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.$router.push({name:'member'});
            }
        }
    },
    mounted(){
        this.getOrders();
    }
}
</script>