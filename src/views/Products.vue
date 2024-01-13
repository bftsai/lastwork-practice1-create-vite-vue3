<template>
    <Loading :prop-boolean="isLoading"></Loading>
    <ToastList></ToastList>
    <h1>Products List</h1>
    <div class="text-end">
        <button type="button" class="btn btn-primary" @click="openAddProductModal">增加產品</button>
    </div>
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
                <button type="button" class="btn btn-outline-primary btn-sm me-3" @click="openEditProductModal(item)">編輯</button>
                <button type="button" class="btn btn-outline-primary btn-sm" @click="deleteProductModal(item)">刪除</button>
            </td>
        </tr>
    </tbody>
    </table>
    <ProductModal ref="productModal" :product="tempProduct" :edit-product="tempProduct" @emit-post-product="postProduct" @emit-path-product="pathProduct" @emit-hide-modal="hideModal"></ProductModal>
    <DeleteModal ref="deleteModal" :product="tempProduct" @emit-hide-modal="hideModal" @emit-delete-product="deleteProduct"></DeleteModal>
</template>
<script>
const api_url=import.meta.env.VITE_HEX_API;
const api_path=import.meta.env.VITE_HEX_APIKEY;

import Swal from 'sweetalert2/dist/sweetalert2.js';

import ProductModal from '../components/ProductModal.vue';
import DeleteModal from '../components/DeleteModal.vue';
import ToastList from '../components/ToastMessage.vue';
import Loading from '../components/Loading.vue';
export default {
    data(){
        return {
            products: [],
            pagination: {},
            tempProduct: {},
            isLoading: false,
        }
    },
    inject: ['emitter'],
    components: {
        ProductModal,
        DeleteModal,
        ToastList,
        Loading,
    },
    methods:{
        async checkLogin(){
            try{
                this.isLoading=true;
                const token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1",);
                this.axios.defaults.headers.common['Authorization'] = token;
                const result=(await this.axios.post(`${import.meta.env.VITE_HEX_API}/v2/api/user/check`)).data;
                // console.log(result);
                this.isLoading=false;
                if(!result.success){
                    this.$router.push({name:'member'});
                }else{
                    this.getProducts(1);
                }
            }catch(err){
                this.isLoading=false;
                console.log(err);
                this.$router.push({name:'member'});
            }
        },
        async getProducts(page){
            try {
                this.isLoading=true;
                const result = (await this.axios.get(`${api_url}v2/api/${api_path}/admin/products?page=${page}`)).data;
                if(result.success){
                    Swal.fire({
                        title: '已取得產品列表!',
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
                this.isLoading=false;
                console.log(this.products,this.pagination);
            } catch (err) {
                console.log(err.response);
                this.isLoading=false;
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.$router.push({name:'member'});
            }
        },
        async postProduct(item){
            try {
                this.$refs.productModal.hideModal();
                this.isLoading=true;
                const result = (await this.axios.post(`${api_url}v2/api/${api_path}/admin/product`,{data:item})).data;
                this.isLoading=false;
                if(result.success){
                    Swal.fire({
                        title: result.message,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.getProducts(1);
                }else{
                    Swal.fire({
                        title: result.message,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                this.tempProduct={};
            } catch (err) {
                this.isLoading=false;
                console.log(err.response);
                    Swal.fire({
                        title: err.response,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                this.tempProduct={};
            }
        },
        async pathProduct(item){
            try {
                this.$refs.productModal.hideModal();
                this.isLoading=true;
                const id=item.id;
                const result = (await this.axios.put(`${api_url}v2/api/${api_path}/admin/product/${id}`,{data:item})).data;
                this.isLoading=false;
                if(result.success){
                    Swal.fire({
                        title: result.message,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.getProducts(1);
                }else{
                    Swal.fire({
                        title: result.message,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                console.log(result);
                this.tempProduct={};
            } catch (err) {
                this.isLoading=false;
                console.log(err.response);
                Swal.fire({
                        title: err.response,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                this.tempProduct={};
            }
        },
        async deleteProduct(item){
            try {
                this.$refs.deleteModal.hideModal();
                this.isLoading=true;
                const result = (await this.axios.delete(`${api_url}v2/api/${api_path}/admin/product/${item.id}`)).data;
                this.isLoading=false;
                if(result.success){
                    Swal.fire({
                        title: result.message,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.getProducts(1);
                }else{
                    Swal.fire({
                        title: result.message,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } catch (err) {
                this.isLoading=false;
                console.log(err.response);
                Swal.fire({
                        title: err.response,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
            }
        },
        openAddProductModal(){
            this.tempProduct={
                imageUrl:'',
                imagesUrl:[]
            };
            this.$refs.productModal.showModal();
        },
        openEditProductModal(product){
            this.tempProduct=product;
            this.$refs.productModal.showModal();
        },
        deleteProductModal(product){
            this.tempProduct=product;
            this.$refs.deleteModal.showModal();
        },
        hideModal(){
            this.tempProduct={};
        },
        successToast(){
            this.emitter.emit('push-message',{
                style: 'success',
                title: '更新成功'
            });
        },
        errorToast(){
            this.emitter.emit('push-message',{
                style: 'danger',
                title: '更新失敗',
                content: '更新失敗內容' // result.message
            });
        }
    },
    mounted(){
        this.checkLogin();
    }
}
</script>
<style lang="scss">
.line-height-60{
    line-height: 60.5px;
}
</style>