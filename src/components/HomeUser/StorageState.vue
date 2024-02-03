<template>

    <div class="col-md-11 col-11 mb-5 mb-md-0">
        <div class="item shadow storagestate ">
            <p class=" text-center text-dark py-2 text-white fs-3" style="font-weight: 500;">
                Storage State</p>

            <span class="row">
                <div class="col-12">
                    <div class=" d-flex justify-content-center">
                       <ChartStorage></ChartStorage>
                    </div>
                </div>

               
            </span>
        </div>
    </div>

</template>

<script>
import ChartStorage from './CharStorage.vue'
export default{
    name:'StorageState',
    components:{
        ChartStorage
    }
}
</script>

<style scoped>

    /* storage state*/

    .storagestate span div:nth-child(2) span p{

        font-size: 20px;
    }

    .storagestate span div:nth-child(2) span p:nth-child(2){

        font-size: 15px;
    }

    /* storage state*/
</style>