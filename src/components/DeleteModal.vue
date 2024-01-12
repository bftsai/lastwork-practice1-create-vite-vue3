<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title fs-md-4 fs-6 fw-bold text-danger">Delete Product</h5>
                <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hideModal">X</button>
            </div>
            <div class="modal-body d-flex flex-column">
                <h2 class="fs-md-5 fs-6 mb-3">是否要刪除此商品？</h2>
                <h3 class="fs-6">商品資訊：</h3>
                <p>ID：{{ tempProduct.id }}</p>
                <p>Title：{{ tempProduct.title }}</p>
                <p>Category：{{ tempProduct.category }}</p>
                <img :src="tempProduct.imageUrl" alt="商品圖片" class="w-50 align-self-center object-fit-cover">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="hideModal">Close</button>
                <button type="button" class="btn btn-danger text-primary" @click="sendProduct">Delete Product</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import MixinsModal from '../assets/mixins/mixinsModal.js';
export default {
    data(){
        return {
            tempProduct: {},
        }
    },
    mixins: [MixinsModal],
    props: {
        product: {
            type: Object,
            default() {return {};},
        }
    },
    watch: {
        product(){
            this.tempProduct=JSON.parse(JSON.stringify(this.product));
        }
    },
    methods: {
        sendProduct(){
            this.$emit('emit-deleteProduct',this.tempProduct);
            this.tempProduct={};
        }
    }
}
</script>
<style lang="scss">
.btn-danger{
    background-color: #dc3545;
}
</style>