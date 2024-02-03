<template>
    <div class="main">
        <div class=" container-fluid">
            <div class="row">
                <SideBar></SideBar>
                <div class=" col-10  ">
                    <div class=" container-fluid">
                        <div class="row p-3 bg-white m-3 g-3 sections shadow justify-content-center">
                            <AllFolder></AllFolder>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import AllFolder from '../components/FoldersUser/AllFolder'

export default {
    name: 'AllFolders',

    components: {
        SideBar,
        AllFolder
      
    },

    mounted(){
     
    }
}
</script>
<style >
.main {
    margin: 0px;
    padding: 0px;
    box-shadow: inset 0px 0px 10px rgba(165, 215, 232, 0.6);
    /* Warning: CSS does not support Inner Shadow.*/
    background: #f7f7f7;
    background: linear-gradient(91deg, #f7f7f7 0.00%, #3787a1 100.00%);
    top: 0;
    overflow-x: hidden;
}


.item {
    box-shadow: inset 0px 0px 10px rgba(165, 215, 232, 0.6);
    /* Warning: CSS does not support Inner Shadow.*/
    background: #f7f7f7;
    background: linear-gradient( to top, #f7f7f7 0.00%, #3787a1 100.00%);
    border-radius: 45px;
   
    color: #0b2447;
    
}

.item a {
    /* Warning: CSS does not support Inner Shadow.*/
    background: #a5d7e8;
    color: white;
    text-decoration: none;
    border-radius: 40px;
    font-size: 100%;
    padding: 10px;
    padding-inline: 50px;
}

</style>