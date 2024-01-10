<template>
    <h1>Products List</h1>
    <table class="table-dark table table-hover mt-4">
    <thead>
        <tr class="line-height-60">
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th class="text-center" width="120">原價</th>
            <th class="text-center" width="120">售價</th>
            <th class="text-center" width="100">是否啟用</th>
            <th class="text-center" width="210">編輯</th>
        </tr>
    </thead>
    <tbody>
        <tr class="line-height-60" v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-end">{{ item.origin_price }}</td>
            <td class="text-end">{{item.price}}</td>
            <td class="text-center">
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span class="text-secondary" v-else>未啟用</span>
            </td>
            <td>
                <button type="button" class="btn btn-outline-primary btn-sm me-3">編輯</button>
                <button type="button" class="btn btn-outline-primary btn-sm">刪除</button>
            </td>
        </tr>
    </tbody>
    </table>
</template>
<script>
const api_url=import.meta.env.VITE_HEX_API;
const api_path=import.meta.env.VITE_HEX_APIKEY;

import Swal from 'sweetalert2/dist/sweetalert2.js'
export default {
    data(){
        return {
            products: [],
            pagination: {},
        }
    },
    methods:{
        async getProducts(page){
            try {
                const result = (await this.axios.get(`${api_url}v2/api/${api_path}/admin/products?page=${page}`)).data;
                if(result.success){
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.products=result.products;
                    this.pagination=result.pagination;
                }else{
                    Swal.fire({
                        title: 'Error!',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                console.log(this.products,this.pagination);
            } catch (err) {
                console.log(err.response);
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.$router.push({name:'member'});
            }
        }
    },
    created(){
        this.getProducts(1)
    }
}
</script>
<style lang="scss">
.line-height-60{
    line-height: 60.5px;
}
</style>