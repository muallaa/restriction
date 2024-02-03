<template>

 <!---recent upload-->
 <div class=" col-md-8 col-12  mb-5 mb-md-0">
    <div class="item py-2 px-5">
        <p class=" fs-4 text-white p-3" style="font-weight: 500;">Recent Uploaded Files</p>
        <span>
            <a :href="hostname +'/uploads/' + file.file" class="p-3 my-2 bg-white rounded rounded-3 recent d-flex align-content-center " v-for="file in files"  :key="file">
             
                    <span class="bi bi-file-earmark-fill  fs-3 align-self-center"></span>
                        
                    <span class=" align-self-center mx-2">{{ file.file }}</span>
         

            </a>
          
        </span>
    </div>
</div>
</template>

<script>

import axios from 'axios'
import { useCookies } from 'vue3-cookies'
export default{
    name:'RecentUploadUser',
    inject : ['hostname'],

    data(){
        return{
            files : []
        }
    },

    methods:{

        recent_file(){

            const tmp = this
            var id_user = useCookies().cookies.get('info')._id
            axios.get(this.hostname + `/recent_file/${id_user}`).then((res) => {

                if(res.data.length > 3){
                    for(var i =0 ; i < res.data.length ; i++){
                        tmp.files.push(res.data[i])
                        if( i == 2){
                            break
                        }
                    }
                }else{
                    tmp.files = res.data
                }

            }).catch((err) => {
                console.log(err)
            })
        }
    },
    mounted(){
        
     if(useCookies().cookies.get('info')){
         
        this.recent_file()
          }
  
     
    }
}
</script>

<style scoped>

.recent {
    box-shadow: inset 0px 0px 10px rgba(165, 215, 232, 0.6);
    /* Warning: CSS does not support Inner Shadow.*/
    background: #f7f7f7;
    border-radius: 20px;
    color: black;
}
</style>