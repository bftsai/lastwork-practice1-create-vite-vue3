<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal" data-bs-backdrop="static" data-bs-keyboard="false">
        <v-form class="modal-dialog modal-xl" @submit="sendProduct" v-slot="{ errors }" novalidate>
            <div class="modal-content border-0">
            <div class="modal-header">
                <h5 class="modal-title fs-md-4 fs-6 fw-bold">新增產品</h5>
                <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hideModal">X</button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="mb-3" v-if="imageUrl">
                            <img :src="imageUrl" alt="主圖照片" class="object-fit-cover w-100">
                        </div>
                        <div class="mb-3">
                            <label for="imageInput" class="d-flex flex-column">
                                輸入圖片網址
                                <v-field name="image" :class="{'is-invalid': errors.image}" id="imageInput" type="text" placeholder="請輸入圖片連結" v-model="imageUrl" :disabled="tempProduct?.imagesUrl?.length>=5" :rules="isImage"></v-field>
                                <error-message name="image" class="invalid-feedback"></error-message>
                                <span class="text-danger" :class="{'d-none': tempProduct?.imagesUrl?.length!==5}" >上傳照片數量已滿</span>
                            </label>
                        </div>
                        <div class="mb-3">
                            <label for="imageUpload" class=" d-flex flex-column">
                                或 上傳圖片
                                <div class="d-flex align-items-center">
                                    <input id="imageUpload" type="file" :disabled="tempProduct?.imagesUrl?.length>=5" @change="getImageUrl">
                                    <img src="../assets/images/imageUpload-loading-50px.svg" alt="loading" v-if="loading">
                                </div>
                                <span class="text-danger" :class="{'d-none': tempProduct?.imagesUrl?.length!==5}" >上傳照片數量已滿</span>
                            </label>
                        </div>
                        <div class="mb-3" v-if="tempProduct.imageUrl">
                            <img class="w-45 me-3 mb-3" :src="tempProduct?.imageUrl" alt="" v-if="tempProduct?.imageUrl">
                            <img :src="item" alt="附圖 key" v-for="(item,key) in tempProduct.imagesUrl" :key="'key' + key" class="w-45 me-3">
                        </div>
                        <button type="button" class="btn btn-outline-primary w-100" :class="{'disabled': tempProduct?.imagesUrl?.length===5}" @click="addImage">新增圖片</button>
                    </div>
                    <div class="col-sm-8">
                        <div class="mb-3">
                            <label for="title" class="d-flex flex-column">
                                標題
                                <v-field name="標題" :class="{'is-invalid': errors.標題}" id="title" type="text" placeholder="請輸入標題" v-model="tempProduct.title" rules="required"></v-field>
                                <error-message name="標題" class="invalid-feedback"></error-message>
                            </label>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label for="category" class="d-flex flex-column">
                                        分類
                                        <v-field name="分類" :class="{'is-invalid': errors.分類}" id="category" type="text" placeholder="請輸入分類" v-model="tempProduct.category" rules="required"></v-field>
                                        <error-message name="分類" class="invalid-feedback"></error-message>
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label for="unit" class="d-flex flex-column">
                                        單位
                                        <v-field name="單位" :class="{'is-invalid': errors.單位}" id="unit" type="text" placeholder="請輸入單位" v-model="tempProduct.unit" rules="required"></v-field>
                                        <error-message name="單位" class="invalid-feedback"></error-message>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label for="origin_price" class="d-flex flex-column">
                                        原價
                                        <v-field name="原價" :class="{'is-invalid': errors.原價}" id="origin_price" type="number" placeholder="請輸入原價" v-model="tempProduct.origin_price" rules="required|integer"></v-field>
                                        <error-message name="原價" class="invalid-feedback"></error-message>
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label for="price" class="d-flex flex-column">
                                        售價
                                        <v-field name="售價" :class="{'is-invalid': errors.售價}" id="price" type="number" placeholder="請輸入售價" v-model="tempProduct.price" rules="required|integer"></v-field>
                                        <error-message name="售價" class="invalid-feedback"></error-message>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="d-flex flex-column">
                                產品描述
                                <v-field name="產品描述" rules="required" v-model="tempProduct.description">
                                    <textarea name="產品描述" :class="{'is-invalid': errors.產品描述}" id="description" cols="30" rows="3" placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                                    <error-message name="產品描述" class="invalid-feedback"></error-message>
                                </v-field>
                            </label>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="d-flex flex-column">
                                說明內容
                                <v-field name="說明內容" rules="required" v-model="tempProduct.content">
                                    <textarea name="content" :class="{'is-invalid': errors.說明內容}" id="content" cols="30" rows="3" placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                                    <error-message name="說明內容" class="invalid-feedback"></error-message>
                                </v-field>
                            </label>
                        </div>
                        <div class="mb-3">
                            <label for="is_enabled" class="d-flex align-items-center">
                                <input type="checkbox" name="is_enabled" id="is_enabled" class="me-2" :checked="tempProduct?.is_enabled" v-model="tempProduct.is_enabled">
                                是否啟用
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="hideModal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </v-form>
    </div>
</template>
<script>
const api_url=import.meta.env.VITE_HEX_API;
const api_path=import.meta.env.VITE_HEX_APIKEY;
import MixinsModal from '../assets/mixins/mixinsModal';

// vee-validate 相關變數
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email,regex, integer } from '@vee-validate/rules';
// 各國語言
import { localize, setLocale } from '@vee-validate/i18n';
// 下載語言
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

defineRule('required', required);
defineRule('email', email);
defineRule('integer', integer);
defineRule('regex', regex);
// 設定所在地區
setLocale('zh_TW');
// 載入需要使用到的語言
configure({
  // Generates an English message locale generator
  generateMessage: localize({
    zh_TW,
  }),
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
export default {
    data(){
        return {
            modal: {},
            tempProduct: {},
            imageUrl: '',
            loading: false,
        }
    },
    props: {
        product: {
            type: Object,
            default() {return {};}
        },
        editProduct: {
            type: Object,
            default(){return {};}
        },
    },
    components: {
        VForm: Form,
        VField: Field,
        ErrorMessage,
    },
    mixins:[MixinsModal],
    watch:{
        product(){
            this.tempProduct=JSON.parse(JSON.stringify(this.product));
            this.imageUrl='';
            const imageUpload=document.querySelector('#imageUpload');
            imageUpload.value='';
        },
        editProduct(){
            this.tempProduct=JSON.parse(JSON.stringify(this.editProduct));
        },
    },
    methods: {
        isImage(){
            // console.log(this.tempProduct?.imagesUrl.length);
            if(this.tempProduct.imageUrl&&this.tempProduct?.imagesUrl.length>=1){
                return true;
            }else{
                return '請至少新增兩張產品圖片';
            }
        },
        async getImageUrl(e){
            try {
                this.loading=true;
                const file=e.target.files[0];
                // console.log(e.target.files[0].name);
                const formData=new FormData();
                formData.append('file-to-upload',file);
                const result = (await this.axios.post(`${api_url}v2/api/${api_path}/admin/upload`,formData)).data;
                // console.log(result);
                if(result.success){
                    this.imageUrl=result.imageUrl;
                }
                this.loading=false;
            } catch (err) {
                console.log(err.response);
                this.loading=false;
            }
        },
        addImage(){
            this.tempProduct.imageUrl? this.tempProduct.imagesUrl.push(this.imageUrl):this.tempProduct.imageUrl=this.imageUrl;
            this.imageUrl='';
        },
        sendProduct(){
            try {
                if(this.tempProduct?.id){
                    if(this.tempProduct.is_enabled!==true&&!this.tempProduct.is_enabled){
                        this.tempProduct.is_enabled=0;
                    }else{
                        this.tempProduct.is_enabled===true? this.tempProduct.is_enabled=1:''
                    }
                    console.log('path',this.tempProduct);
                    this.$emit('emit-path-product',this.tempProduct);
                }else{
                    if(this.tempProduct.is_enabled===true){
                        this.tempProduct.is_enabled=1;
                    }else{
                        this.tempProduct.is_enabled=0;
                    }
                    console.log('new',this.tempProduct);
                    this.$emit('emit-post-product',this.tempProduct);
                }
                
                this.tempProduct={};
            } catch (err) {
                console.log(err);
            }
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss">
.btn-close{
    width: 24px;
    height: 24px;
}
</style>