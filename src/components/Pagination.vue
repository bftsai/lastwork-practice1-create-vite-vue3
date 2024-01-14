<template>
    <nav aria-label="..." class="py-3">
        <ul class="pagination pagination-lg justify-content-center">
            <li class="page-item" :class="{'disabled': !propPaginationObj.has_pre}">
                <a class="page-link" @click="changePage(propPaginationObj.current_page-1)">Previous</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#" :class="{'active': propPaginationObj.current_page===1,'text-dark': propPaginationObj.current_page===1}" @click.prevent="changePage(1)">{{ 1 }}</a>
            </li>
            <li class="page-item"><span class="page-link disabled" v-if="propPaginationObj.current_page>3">...</span></li>
            <li class="page-item" v-for="(page,key) in propPaginationObj.total_pages" :key="'item' + key">
                <a class="page-link" href="#" :class="{'active': propPaginationObj.current_page===page,'text-dark': propPaginationObj.current_page===page}" @click.prevent="changePage(page)" v-if="page!==1&&page!==propPaginationObj.total_pages&&page>propPaginationObj.current_page-2&&page<propPaginationObj.current_page+2">{{ page }}</a>
            </li>
            <li class="page-item"><span class="page-link disabled" v-if="propPaginationObj.current_page<propPaginationObj.total_pages-2">...</span></li>
            <li class="page-item">
                <a class="page-link" href="#" :class="{'active': propPaginationObj.current_page===propPaginationObj.total_pages,'text-dark': propPaginationObj.current_page===propPaginationObj.total_pages}" @click.prevent="changePage(propPaginationObj.total_pages)">{{ propPaginationObj.total_pages }}</a>
            </li>
            <li class="page-item" :class="{'disabled': !propPaginationObj.has_next}">
                <a class="page-link" href="#" @click.prevent="changePage(propPaginationObj.current_page+1)">Next</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props: ['propPaginationObj'],
    watch: {
        propPaginationObj(){
            console.log(this.propPaginationObj);
        }
    },
    methods: {
        changePage(page){
            if(page===this.propPaginationObj.current_page){
                return ;
            }else{
                this.$emit('emit-page',page);
            }
            // if(Number(e.target.textContent)===this.propPaginationObj.current_page){
            //     return ;
            // }else if(e.target.textContent==='Previous'){
            //     this.$emit('emit-page',this.propPaginationObj.current_page-1);
            // }else if(e.target.textContent==='Next'){
            //     this.$emit('emit-page',this.propPaginationObj.current_page+1);
            // }else{
            //     this.$emit('emit-page',e.target.textContent);
            // }
        },
    },
    mounted(){

    },
}
</script>
<style lang="scss">
.pagination{
    .active{
        cursor: auto;
    }
    .active:focus{
        box-shadow: 0 0 0 0;
    }
}
</style>